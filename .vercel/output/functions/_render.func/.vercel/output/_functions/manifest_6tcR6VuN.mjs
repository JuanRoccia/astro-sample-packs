import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_CeoTtfa2.mjs';
import { f as decodeKey } from './chunks/astro/server_CuTlcP9C.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/juanm/OneDrive/Escritorio/Desarrollo%20Web%203.0/Astro%20Midudev%20Curso/ossified-osiris/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/Astro Midudev Curso/ossified-osiris/src/pages/libro/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/libro/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/Astro Midudev Curso/ossified-osiris/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/libro/[id]@_@astro":"pages/libro/_id_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/Astro Midudev Curso/ossified-osiris/src/content/books/astro.md?astroContentCollectionEntry=true":"chunks/astro_CFxsCwOz.mjs","C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/Astro Midudev Curso/ossified-osiris/src/content/books/playoff.md?astroContentCollectionEntry=true":"chunks/playoff_DlYEp1Fn.mjs","C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/Astro Midudev Curso/ossified-osiris/src/content/books/siberian.md?astroContentCollectionEntry=true":"chunks/siberian_DJH1w01S.mjs","C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/Astro Midudev Curso/ossified-osiris/src/content/books/suerte.md?astroContentCollectionEntry=true":"chunks/suerte_CW9sK0Re.mjs","C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/Astro Midudev Curso/ossified-osiris/src/content/books/astro.md?astroPropagatedAssets":"chunks/astro_Yrj63B6P.mjs","C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/Astro Midudev Curso/ossified-osiris/src/content/books/playoff.md?astroPropagatedAssets":"chunks/playoff_BQxgnDiE.mjs","C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/Astro Midudev Curso/ossified-osiris/src/content/books/siberian.md?astroPropagatedAssets":"chunks/siberian_BpcrKJem.mjs","C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/Astro Midudev Curso/ossified-osiris/src/content/books/suerte.md?astroPropagatedAssets":"chunks/suerte_MFMu_2FB.mjs","C:\\Users\\juanm\\OneDrive\\Escritorio\\Desarrollo Web 3.0\\Astro Midudev Curso\\ossified-osiris\\.astro\\assets.mjs":"chunks/assets_BwNa1IAe.mjs","C:\\Users\\juanm\\OneDrive\\Escritorio\\Desarrollo Web 3.0\\Astro Midudev Curso\\ossified-osiris\\.astro\\modules.mjs":"chunks/modules_DKjajEJ1.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BmWAqJz7.mjs","C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/Astro Midudev Curso/ossified-osiris/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BPYZ1rbS.mjs","C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/Astro Midudev Curso/ossified-osiris/src/content/books/astro.md":"chunks/astro__Af4oQGV.mjs","C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/Astro Midudev Curso/ossified-osiris/src/content/books/playoff.md":"chunks/playoff_C4axGOTQ.mjs","C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/Astro Midudev Curso/ossified-osiris/src/content/books/siberian.md":"chunks/siberian_LDakSH1j.mjs","C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/Astro Midudev Curso/ossified-osiris/src/content/books/suerte.md":"chunks/suerte_BmeGGVeU.mjs","C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/Astro Midudev Curso/ossified-osiris/src/components/BookScore.astro":"chunks/BookScore_Dznio6qb.mjs","C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/Astro Midudev Curso/ossified-osiris/src/components/BuyButton.astro":"chunks/BuyButton_D4GMruxe.mjs","\u0000@astrojs-manifest":"manifest_6tcR6VuN.mjs","C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/Astro Midudev Curso/ossified-osiris/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CmkSwYHY.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.DEm6UmAr.css","/favicon.svg","/img/astro.jpeg","/img/playoff.jpeg","/img/seisseisseis.jpeg","/img/siberian.jpeg","/img/suerte.jpeg","/img/tecnocristiano.jpeg","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CmkSwYHY.js","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[["C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/Astro Midudev Curso/ossified-osiris/src/components/BookScore.astro","BookScore"],["C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/Astro Midudev Curso/ossified-osiris/src/components/BuyButton.astro","BuyButton"]],"key":"30a1Fb6dOIL4onr7U4sDESNu+2qSiJsKrihA8kQCI7w=","envGetSecretEnabled":true});

export { manifest };
