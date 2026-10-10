import React, {useEffect} from 'react';
import {registerArticleTools, type WebMCPContext} from '../webmcp/register-tools';

type WebMCPDocument = Document & {modelContext?: WebMCPContext};

export default function Root({children}: {children: React.ReactNode}): React.JSX.Element {
  useEffect(() => {
    const context = (document as WebMCPDocument).modelContext;
    if (!context?.registerTool) return;
    let disposed = false;
    let cleanup: (() => Promise<void>) | undefined;
    void registerArticleTools(context, window.location.origin)
      .then(dispose => {
        if (disposed) void dispose();
        else cleanup = dispose;
      })
      .catch(error => console.warn('WebMCP registration failed:', error));
    return () => {
      disposed = true;
      if (cleanup) void cleanup();
    };
  }, []);
  return <>{children}</>;
}
