import React, {useEffect} from 'react';
import {articleTools} from '../webmcp/article-tools';

type WebMCPContext = {
  registerTool: (tool: Record<string, unknown>) => Promise<unknown> | unknown;
  unregisterTool?: (name: string) => Promise<unknown> | unknown;
};
type WebMCPDocument = Document & {modelContext?: WebMCPContext};

export default function Root({children}: {children: React.ReactNode}): React.JSX.Element {
  useEffect(() => {
    const ctx = (document as WebMCPDocument).modelContext;
    if (!ctx?.registerTool) return;
    let active = true;
    void (async () => {
      for (const tool of articleTools) {
        if (!active) return;
        try {
          await ctx.registerTool({
            ...tool,
            execute: (input: {query?: string}) => tool.execute(input as never, window.location.origin),
          });
        } catch (error) {
          console.warn('WebMCP tool registration failed:', tool.name, error);
        }
      }
    })();
    return () => {
      active = false;
      for (const tool of articleTools) {
        try { void ctx.unregisterTool?.(tool.name); }
        catch (error) { console.warn('WebMCP tool cleanup failed:', tool.name, error); }
      }
    };
  }, []);
  return <>{children}</>;
}
