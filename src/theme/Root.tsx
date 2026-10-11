import React, {useEffect} from 'react';
import {registerArticleTools, type WebMCPContext} from '../webmcp/register-tools';

type WebMCPDocument = Document & {modelContext?: WebMCPContext};

export default function Root({children}: {children: React.ReactNode}): React.JSX.Element {
  useEffect(() => {
    // Mermaid containers can scroll horizontally on small screens. Make that
    // scroll region keyboard reachable, including after client-side navigation.
    const markDiagrams = () => {
      document.querySelectorAll<HTMLElement>('.docusaurus-mermaid-container').forEach(node => {
        if (!node.hasAttribute('tabindex')) node.setAttribute('tabindex', '0');
        if (!node.hasAttribute('role')) node.setAttribute('role', 'region');
        if (!node.hasAttribute('aria-label')) node.setAttribute('aria-label', 'Scrollable diagram');
      });
    };
    markDiagrams();
    const observer = new MutationObserver(markDiagrams);
    observer.observe(document.body, {childList: true, subtree: true});
    return () => observer.disconnect();
  }, []);
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
