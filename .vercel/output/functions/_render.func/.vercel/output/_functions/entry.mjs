import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BRPlOEDL.mjs';
import { manifest } from './manifest_CCvi_Vro.mjs';
import { onRequest } from './_noop-middleware.mjs';
import { createExports } from '@astrojs/vercel/serverless/entrypoint';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_CeFBKPzi.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_8Z73qTtn.mjs')],
]);;

const _page0 = () => import('./pages/libro/_id_.astro.mjs');
const _page1 = () => import('./pages/index.astro.mjs');
const _page2 = () => import('./pages/_image.astro.mjs');
const pageMap = new Map([
    ["src/pages/libro/[id].astro", _page0],
    ["src/pages/index.astro", _page1],
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "209cb193-6a7b-43b2-a4a4-2b1342a78fd6",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
