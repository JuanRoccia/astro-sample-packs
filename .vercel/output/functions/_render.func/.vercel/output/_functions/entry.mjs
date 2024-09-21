import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Cmsiz9cT.mjs';
import { manifest } from './manifest_6tcR6VuN.mjs';
import { onRequest } from './_noop-middleware.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_Dznio6qb.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_D4GMruxe.mjs')],
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
    "middlewareSecret": "9dd891f9-d875-49c2-bbea-192389535e76",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
