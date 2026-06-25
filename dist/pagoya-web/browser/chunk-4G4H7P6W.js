import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-CAYUHUBX.js";

// src/app/core/services/token.service.ts
var ACCESS_KEY = "pagoya.accessToken";
var REFRESH_KEY = "pagoya.refreshToken";
var EMAIL_KEY = "pagoya.email";
var ROLE_KEY = "pagoya.role";
var TokenService = class _TokenService {
  get accessToken() {
    return localStorage.getItem(ACCESS_KEY);
  }
  get refreshToken() {
    return localStorage.getItem(REFRESH_KEY);
  }
  get email() {
    return localStorage.getItem(EMAIL_KEY);
  }
  get role() {
    return localStorage.getItem(ROLE_KEY);
  }
  save(accessToken, refreshToken, email, role) {
    localStorage.setItem(ACCESS_KEY, accessToken);
    localStorage.setItem(REFRESH_KEY, refreshToken);
    localStorage.setItem(EMAIL_KEY, email);
    localStorage.setItem(ROLE_KEY, role);
  }
  clear() {
    localStorage.removeItem(ACCESS_KEY);
    localStorage.removeItem(REFRESH_KEY);
    localStorage.removeItem(EMAIL_KEY);
    localStorage.removeItem(ROLE_KEY);
  }
  get isLoggedIn() {
    return !!this.accessToken;
  }
  static \u0275fac = function TokenService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TokenService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TokenService, factory: _TokenService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TokenService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  TokenService
};
//# sourceMappingURL=chunk-4G4H7P6W.js.map
