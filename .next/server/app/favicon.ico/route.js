"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 4021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 7903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./src/app/favicon.ico?__next_metadata_route__
var favicon_next_metadata_route_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_route_namespaceObject);
__webpack_require__.d(favicon_next_metadata_route_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(9513);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(514);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./src/app/favicon.ico?__next_metadata_route__


const contentType = "image/x-icon"
const buffer = Buffer.from("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", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=C%3A%5CUsers%5Cmuzaf%5COneDrive%5C%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%5Ccapital-telecom-client%5Csrc%5Capp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/favicon.ico/route",
        pathname: "/favicon.ico",
        filename: "favicon",
        bundlePath: "app/favicon.ico/route"
    },
    resolvedPagePath: "next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&isDynamic=0!C:\\Users\\muzaf\\OneDrive\\Рабочий стол\\capital-telecom-client\\src\\app\\favicon.ico?__next_metadata_route__",
    nextConfigOutput,
    userland: favicon_next_metadata_route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/favicon.ico/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,218], () => (__webpack_exec__(7903)));
module.exports = __webpack_exports__;

})();