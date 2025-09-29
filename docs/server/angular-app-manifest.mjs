
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/meu-portifolio-landing/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/meu-portifolio-landing/home",
    "route": "/meu-portifolio-landing"
  },
  {
    "renderMode": 2,
    "route": "/meu-portifolio-landing/home"
  },
  {
    "renderMode": 2,
    "route": "/meu-portifolio-landing/projetos"
  },
  {
    "renderMode": 2,
    "route": "/meu-portifolio-landing/interesses"
  },
  {
    "renderMode": 2,
    "route": "/meu-portifolio-landing/contato"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 15391, hash: '4dd24bfee9657464a7a369fb832bd30d3a05fcd6a1a6b1054c08bc8fed2acd4b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15635, hash: 'b7876c53e389d110820f85fa914e39da8fab521bb8674323ed3c368e56b892dd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'projetos/index.html': {size: 23377, hash: '2746301c916c37be274f7399733b60f4a066f60902a9195ad4484381ad758e6a', text: () => import('./assets-chunks/projetos_index_html.mjs').then(m => m.default)},
    'contato/index.html': {size: 21888, hash: 'fad588f53376562a0972bab26349ed2820e7181647ebd83d0c6c7d7ea7e6fa53', text: () => import('./assets-chunks/contato_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 22660, hash: 'a30d616b992903e8693b114d9a455d9b310a0d40c8bac377ab48ca9a05f25441', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'interesses/index.html': {size: 22973, hash: 'f3f14afa3e89f20950f538d89d3fe7a8b9a7f495eac5cf30ce4385e5b4d1a3ad', text: () => import('./assets-chunks/interesses_index_html.mjs').then(m => m.default)},
    'styles-OK6I73HX.css': {size: 196, hash: 'sciaGANPKuc', text: () => import('./assets-chunks/styles-OK6I73HX_css.mjs').then(m => m.default)}
  },
};
