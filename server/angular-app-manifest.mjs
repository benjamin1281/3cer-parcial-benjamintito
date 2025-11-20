
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://benjamin1281.github.io/3cer-parcial-benjamintito/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/3cer-parcial-benjamintito"
  },
  {
    "renderMode": 2,
    "route": "/3cer-parcial-benjamintito/introduccion"
  },
  {
    "renderMode": 2,
    "route": "/3cer-parcial-benjamintito/soluciones"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 936, hash: '78212f6417ccc6cc3c3f736feb8b4ebc908a5ab7930aa62d7124f3d16c753967', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1449, hash: '31c9ef23d7f090be1205984a7e3306a6cc63860f4e9415fe040983179be87c6c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7668, hash: 'c5f0f4ef0c676b3a1945687b6b717d879d83cf04d67c02487acc4f831ff8ff36', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'introduccion/index.html': {size: 7587, hash: '206339a29b264db647297437119afa4b79d14ea1c6a76c10de41666f42cce6ff', text: () => import('./assets-chunks/introduccion_index_html.mjs').then(m => m.default)},
    'soluciones/index.html': {size: 7326, hash: '4f4ed31718443a9931f77b2a9439a4acd9fba0b01309dcaaa98beef7d5ed8d0b', text: () => import('./assets-chunks/soluciones_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
