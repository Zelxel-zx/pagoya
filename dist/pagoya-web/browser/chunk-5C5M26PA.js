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

// src/app/shared/models/transfer.model.ts
var CURRENCIES = ["PEN", "USD", "EUR", "GBP"];
var TRANSFER_STATUS_LABEL = {
  PENDING: "Pendiente",
  COMPLETED: "Completada",
  FAILED: "Fallida"
};
var TRANSFER_TYPE_LABEL = {
  INTERNAL: "Interna",
  EXTERNAL: "Externa"
};

// src/app/core/services/transfer.service.ts
var TransferService = class _TransferService {
  http = inject(HttpClient);
  base = `${environment.apiUrl}/transfers`;
  create(body) {
    return this.http.post(this.base, body);
  }
  findByAccount(accountNumber, params = {}) {
    return this.http.get(`${this.base}/account/${accountNumber}`, {
      params: this.toParams(params)
    });
  }
  reportByCurrency() {
    return this.http.get(`${this.base}/reports/by-currency`);
  }
  reportByStatus() {
    return this.http.get(`${this.base}/reports/by-status`);
  }
  reportByDay(from, to) {
    return this.http.get(`${this.base}/reports/by-day`, {
      params: new HttpParams().set("from", from).set("to", to)
    });
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
  static \u0275fac = function TransferService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TransferService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TransferService, factory: _TransferService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransferService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  CURRENCIES,
  TRANSFER_STATUS_LABEL,
  TRANSFER_TYPE_LABEL,
  TransferService
};
//# sourceMappingURL=chunk-5C5M26PA.js.map
