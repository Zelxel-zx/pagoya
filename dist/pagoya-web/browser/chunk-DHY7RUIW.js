import "./chunk-GOMI4DH3.js";

// src/app/features/reports/reports.routes.ts
var REPORTS_ROUTES = [
  { path: "", redirectTo: "accounts", pathMatch: "full" },
  {
    path: "accounts",
    loadComponent: () => import("./chunk-TRONJQCM.js").then((m) => m.AccountsReport)
  },
  {
    path: "transfers",
    loadComponent: () => import("./chunk-6XHXUGGQ.js").then((m) => m.TransfersReport)
  }
];
export {
  REPORTS_ROUTES
};
//# sourceMappingURL=chunk-DHY7RUIW.js.map
