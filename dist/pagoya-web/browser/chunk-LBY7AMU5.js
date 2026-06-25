import {
  HttpClient,
  environment
} from "./chunk-FDUTTXTA.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-CAYUHUBX.js";

// src/app/core/services/customer.service.ts
var CustomerService = class _CustomerService {
  http = inject(HttpClient);
  base = `${environment.apiUrl}/customers`;
  findMe() {
    return this.http.get(`${this.base}/me`);
  }
  updateMe(body) {
    return this.http.put(`${this.base}/me`, body);
  }
  deleteMe() {
    return this.http.delete(`${this.base}/me`);
  }
  static \u0275fac = function CustomerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomerService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CustomerService, factory: _CustomerService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  CustomerService
};
//# sourceMappingURL=chunk-LBY7AMU5.js.map
