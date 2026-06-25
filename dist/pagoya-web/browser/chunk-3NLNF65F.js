import {
  formatNumber
} from "./chunk-FDUTTXTA.js";
import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-CAYUHUBX.js";

// src/app/shared/pipes/soles.pipe.ts
var SolesPipe = class _SolesPipe {
  transform(value, symbol = "S/") {
    const amount = value ?? 0;
    return `${symbol} ${formatNumber(amount, "en-US", "1.2-2")}`;
  }
  static \u0275fac = function SolesPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SolesPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "soles", type: _SolesPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SolesPipe, [{
    type: Pipe,
    args: [{ name: "soles" }]
  }], null, null);
})();

export {
  SolesPipe
};
//# sourceMappingURL=chunk-3NLNF65F.js.map
