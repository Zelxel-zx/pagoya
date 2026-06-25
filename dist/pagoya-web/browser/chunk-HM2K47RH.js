import {
  HttpClient,
  HttpParams,
  environment
} from "./chunk-FDUTTXTA.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-CAYUHUBX.js";

// src/app/shared/models/account.model.ts
var ACCOUNT_TYPE_LABEL = {
  SAVINGS: "Ahorros",
  CHECKING: "Corriente"
};
var ACCOUNT_STATUS_LABEL = {
  ACTIVE: "Activa",
  SUSPENDED: "Suspendida",
  CLOSED: "Cerrada"
};

// src/app/core/services/account.service.ts
var AccountService = class _AccountService {
  http = inject(HttpClient);
  base = `${environment.apiUrl}/accounts`;
  create(body) {
    return this.http.post(this.base, body);
  }
  listMine(params = {}) {
    return this.http.get(`${this.base}/me`, {
      params: this.toParams(params)
    });
  }
  balance(accountNumber) {
    return this.http.get(`${this.base}/${accountNumber}/balance`);
  }
  deposit(accountNumber, body) {
    return this.http.post(`${this.base}/${accountNumber}/deposit`, body);
  }
  close(accountNumber) {
    return this.http.patch(`${this.base}/${accountNumber}/close`, {});
  }
  findRecipients(dni) {
    return this.http.get(`${this.base}/recipient`, {
      params: new HttpParams().set("dni", dni)
    });
  }
  listByCustomer(customerId, params = {}) {
    return this.http.get(`${this.base}/customer/${customerId}`, {
      params: this.toParams(params)
    });
  }
  summary() {
    return this.http.get(`${this.base}/reports/summary`);
  }
  toParams(params) {
    let http = new HttpParams();
    if (params.page != null)
      http = http.set("page", params.page);
    if (params.size != null)
      http = http.set("size", params.size);
    if (params.sort)
      http = http.set("sort", params.sort);
    return http;
  }
  static \u0275fac = function AccountService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccountService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AccountService, factory: _AccountService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ACCOUNT_TYPE_LABEL,
  ACCOUNT_STATUS_LABEL,
  AccountService
};
//# sourceMappingURL=chunk-HM2K47RH.js.map
