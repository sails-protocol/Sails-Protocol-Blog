import React, {useEffect} from 'react';

type WebMCPContext = {
  registerTool: (tool: Record<string, unknown>) => Promise<unknown> | unknown;
  unregisterTool?: (name: string) => Promise<unknown> | unknown;
};
type WebMCPDocument = Document & {modelContext?: WebMCPContext};

import ARTICLES from '../generated/articles.json';

const toolDefinitions = [
  {
    name: 'sails_list_articles',
    description: 'List published Sails Protocol Blog articles with titles, descriptions, tags and canonical URLs. Read only.',
    inputSchema: {type: 'object', properties: {}, additionalProperties: false},
    annotations: {readOnlyHint: true},
    execute: async () => ({content: [{type: 'text', text: JSON.stringify(ARTICLES.map(a => ({...a, url: new URL(a.path, window.location.origin).href})))}]}),
  },
  {
    name: 'sails_search_articles',
    description: 'Search published Sails Protocol Blog article metadata by a text query. Read only; results do not imply protocol readiness.',
    inputSchema: {
      type: 'object',
      properties: {query: {type: 'string', minLength: 1, maxLength: 200, description: 'Search phrase for article title, description or tags'}},
      required: ['query'],
      additionalProperties: false,
    },
    annotations: {readOnlyHint: true},
    execute: async (input: {query?: string}) => {
      if (typeof input?.query !== 'string' || !input.query.trim() || input.query.length > 200) {
        return {content: [{type: 'text', text: 'Invalid query: provide 1 to 200 characters.'}], isError: true};
      }
      const q = input.query.trim().toLocaleLowerCase('en');
      const matches = ARTICLES.filter(a => [a.title, a.description, ...a.tags].some(v => v.toLocaleLowerCase('en').includes(q)));
      return {content: [{type: 'text', text: JSON.stringify(matches.map(a => ({...a, url: new URL(a.path, window.location.origin).href})))}]};
    },
  },
];

export default function Root({children}: {children: React.ReactNode}): React.JSX.Element {
  useEffect(() => {
    const ctx = (document as WebMCPDocument).modelContext;
    if (!ctx?.registerTool) return;
    let active = true;
    void (async () => {
      for (const tool of toolDefinitions) {
        if (!active) return;
        try { await ctx.registerTool(tool); }
        catch (error) { console.warn('WebMCP tool registration failed:', tool.name, error); }
      }
    })();
    return () => {
      active = false;
      for (const tool of toolDefinitions) {
        try { void ctx.unregisterTool?.(tool.name); }
        catch (error) { console.warn('WebMCP tool cleanup failed:', tool.name, error); }
      }
    };
  }, []);
  return <>{children}</>;
}
