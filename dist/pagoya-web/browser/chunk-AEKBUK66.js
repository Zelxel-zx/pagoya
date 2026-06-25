import {
  TokenService
} from "./chunk-4G4H7P6W.js";
import {
  HttpClient,
  environment
} from "./chunk-FDUTTXTA.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-CAYUHUBX.js";

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  http = inject(HttpClient);
  tokens = inject(TokenService);
  base = `${environment.apiUrl}/auth`;
  isLoggedIn = signal(this.tokens.isLoggedIn, ...ngDevMode ? [{ debugName: "isLoggedIn" }] : (
    /* istanbul ignore next */
    []
  ));
  login(body) {
    return this.http.post(`${this.base}/login`, body).pipe(tap((res) => {
      this.tokens.save(res.accessToken, res.refreshToken, res.email, res.role);
      this.isLoggedIn.set(true);
    }));
  }
  register(body) {
    return this.http.post(`${this.base}/register`, body);
  }
  logout() {
    const refreshToken = this.tokens.refreshToken;
    if (refreshToken) {
      this.http.post(`${this.base}/logout`, { refreshToken }).subscribe();
    }
    this.tokens.clear();
    this.isLoggedIn.set(false);
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-AEKBUK66.js.map
