
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/project-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/project-portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23847, hash: '5010cca32323113bb299d60c78bbd60ca0b31ba52793a27098a6d1633efe00cf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17220, hash: '6a272334add4f7e59f711be125561fdae373dc86cd7c7a35273233f698fa252e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 35944, hash: '9008c958e6aeed3f8424da9d72d23d062c41d898f6bac6ce76d1edc340ce8195', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4OEXRMHR.css': {size: 7924, hash: 'Qp/APtOhDhw', text: () => import('./assets-chunks/styles-4OEXRMHR_css.mjs').then(m => m.default)}
  },
};
