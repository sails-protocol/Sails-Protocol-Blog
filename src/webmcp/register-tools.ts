import {articleTools} from './article-tools';

export type WebMCPContext = {
  registerTool: (tool: Record<string, unknown>, options?: {signal?: AbortSignal}) => Promise<unknown> | unknown;
};

export async function registerArticleTools(context: WebMCPContext, origin: string): Promise<() => Promise<void>> {
  const controller = new AbortController();
  try {
    for (const tool of articleTools) {
      await context.registerTool({
        ...tool,
        execute: (input: {query?: string}) => tool.execute(input as never, origin),
      }, {signal: controller.signal});
    }
  } catch (error) {
    controller.abort();
    throw error;
  }
  return async () => { controller.abort(); };
}
