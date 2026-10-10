import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
const config: Config = {
 title:'Sails Protocol Blog', tagline:'Engineering notes on open P2P infrastructure',
 url:process.env.SITE_URL || 'https://sails-protocol-blog.netlify.app', baseUrl:'/', favicon:'img/favicon.svg',
 organizationName:'sails-protocol',projectName:'Sails-Protocol-Blog',
 onBrokenLinks:'throw', markdown:{mermaid:true},themes:['@docusaurus/theme-mermaid'],
 i18n:{defaultLocale:'en',locales:['en']},
 presets:[['classic',{docs:false,blog:{path:'./articles',routeBasePath:'articles',showReadingTime:true,blogTitle:'Articles',postsPerPage:10,feedOptions:{type:['rss','atom'],title:'Sails Protocol Blog'}},theme:{customCss:'./src/css/custom.css'},sitemap:{changefreq:'weekly',priority:0.5}} satisfies Preset.Options]],
 themeConfig:{navbar:{title:'Sails / Blog',items:[{to:'/articles',label:'Articles',position:'left'},{href:'https://github.com/sails-protocol/Sails-Protocol',label:'Protocol',position:'right'},{href:'https://github.com/sails-protocol/Sails-Protocol-Blog',label:'GitHub',position:'right'}]},colorMode:{defaultMode:'dark',respectPrefersColorScheme:true},footer:{style:'dark',copyright:'© Sails Protocol. Editorial content is not normative documentation.'}} satisfies Preset.ThemeConfig
};
export default config;
