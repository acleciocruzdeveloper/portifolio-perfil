
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23809, hash: 'cc31e3bcaf9b3e7af74818a7b9e1cae0805e2f5aa2f5ce6ed83ef829a3d4ccec', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17182, hash: '9757a6e5d88db2f3479eb9c4c56f4f7d39e5cb78303e73fc3e3f0a34574d4275', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 35913, hash: 'bd3a46c5e58ae3c9070a7d69ca6c88b4035f74bbc5d79d67c807a5e62435f3c5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4OEXRMHR.css': {size: 7924, hash: 'Qp/APtOhDhw', text: () => import('./assets-chunks/styles-4OEXRMHR_css.mjs').then(m => m.default)}
  },
};
