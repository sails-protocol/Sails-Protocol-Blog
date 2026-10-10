import {articleTools} from './article-tools';

export type WebMCPContext = {
  registerTool: (tool: Record<string, unknown>) => Promise<unknown> | unknown;
  unregisterTool?: (name: string) => Promise<unknown> | unknown;
};

export async function registerArticleTools(context: WebMCPContext, origin: string): Promise<() => void> {
  const registered: string[] = [];
  try {
    for (const tool of articleTools) {
      await context.registerTool({
        ...tool,
        execute: (input: {query?: string}) => tool.execute(input as never, origin),
      });
      registered.push(tool.name);
    }
  } catch (error) {
    for (const name of registered.reverse()) {
      try { await context.unregisterTool?.(name); }
      catch (cleanupError) { console.warn('WebMCP rollback failed:', name, cleanupError); }
    }
    throw error;
  }
  return () => {
    for (const name of registered) {
      try { void context.unregisterTool?.(name); }
      catch (error) { console.warn('WebMCP cleanup failed:', name, error); }
    }
  };
}
