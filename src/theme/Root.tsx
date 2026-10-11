import React, {useEffect} from 'react';
import {registerArticleTools, type WebMCPContext} from '../webmcp/register-tools';

type WebMCPDocument = Document & {modelContext?: WebMCPContext};

export default function Root({children}: {children: React.ReactNode}): React.JSX.Element {
  useEffect(() => {
    const context = (document as WebMCPDocument).modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    void registerArticleTools(context, window.location.origin, lifecycle.signal)
      .catch(error => {
        if (!lifecycle.signal.aborted) console.warn('WebMCP registration failed:', error);
      });
    return () => { lifecycle.abort(); };
  }, []);
  return <>{children}</>;
}
