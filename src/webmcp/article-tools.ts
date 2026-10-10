import ARTICLES from '../generated/articles.json';

export type ArticleQuery = {query?: string};
export const articleTools = [
  {
    name: 'sails_list_articles',
    description: 'List published Sails Protocol Blog articles with titles, descriptions, tags and canonical URLs. Read only.',
    inputSchema: {type: 'object', properties: {}, additionalProperties: false},
    annotations: {readOnlyHint: true},
    execute: async (_input: Record<string, never>, origin = 'https://sails-protocol-blog.netlify.app') => ({
      content: [{type: 'text', text: JSON.stringify(ARTICLES.map(a => ({...a, url: new URL(a.path, origin).href})))}],
    }),
  },
  {
    name: 'sails_search_articles',
    description: 'Search published Sails Protocol Blog article metadata by text query. Read only.',
    inputSchema: {
      type: 'object',
      properties: {query: {type: 'string', minLength: 1, maxLength: 200}},
      required: ['query'],
      additionalProperties: false,
    },
    annotations: {readOnlyHint: true},
    execute: async (input: ArticleQuery, origin = 'https://sails-protocol-blog.netlify.app') => {
      if (typeof input?.query !== 'string' || !input.query.trim() || input.query.length > 200) {
        return {content: [{type: 'text', text: 'Invalid query: provide 1 to 200 characters.'}], isError: true};
      }
      const query = input.query.trim().toLocaleLowerCase('en');
      const matches = ARTICLES.filter(a => [a.title, a.description, ...a.tags].some(v => v.toLocaleLowerCase('en').includes(query)));
      return {content: [{type: 'text', text: JSON.stringify(matches.map(a => ({...a, url: new URL(a.path, origin).href})))}]};
    },
  },
];
