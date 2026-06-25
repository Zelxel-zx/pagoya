import {
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-CAYUHUBX.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/examples/signals/signals.ts
var Signals = class _Signals {
  contador = signal(0, ...ngDevMode ? [{ debugName: "contador" }] : (
    /* istanbul ignore next */
    []
  ));
  incrementar() {
    this.contador.update((valor) => valor + 1);
  }
  resetear() {
    this.contador.set(4);
  }
  static \u0275fac = function Signals_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Signals)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Signals, selectors: [["app-signals"]], decls: 9, vars: 1, consts: [[3, "click"]], template: function Signals_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "signals works!");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(2, "h2");
      \u0275\u0275text(3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "section")(5, "button", 0);
      \u0275\u0275domListener("click", function Signals_Template_button_click_5_listener() {
        return ctx.incrementar();
      });
      \u0275\u0275text(6, "+");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "button", 0);
      \u0275\u0275domListener("click", function Signals_Template_button_click_7_listener() {
        return ctx.resetear();
      });
      \u0275\u0275text(8, "Reset");
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("Contador: ", ctx.contador());
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Signals, [{
    type: Component,
    args: [{ selector: "app-signals", imports: [], template: '<p>signals works!</p>\n<h2>Contador: {{ contador() }}</h2>\n<section>\n    <button (click)="incrementar()">+</button>\n    <button (click)="resetear()">Reset</button>\n</section>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Signals, { className: "Signals", filePath: "src/app/features/examples/signals/signals.ts", lineNumber: 9 });
})();

// src/app/features/examples/reactive-form/reactive-form.ts
var ReactiveForm = class _ReactiveForm {
  static \u0275fac = function ReactiveForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReactiveForm)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReactiveForm, selectors: [["app-reactive-form"]], decls: 2, vars: 0, template: function ReactiveForm_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "reactive works!");
      \u0275\u0275domElementEnd();
    }
  }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=reactive-form.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactiveForm, [{
    type: Component,
    args: [{ selector: "app-reactive-form", imports: [], template: "<p>reactive works!</p>\n", styles: ["/* src/app/features/examples/reactive-form/reactive-form.css */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=reactive-form.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReactiveForm, { className: "ReactiveForm", filePath: "src/app/features/examples/reactive-form/reactive-form.ts", lineNumber: 9 });
})();

// src/app/features/examples/examples.routes.ts
var EXAMPLES_ROUTES = [
  { path: "signals", component: Signals },
  { path: "reactive-form", component: ReactiveForm }
];
export {
  EXAMPLES_ROUTES
};
//# sourceMappingURL=chunk-F43BXTHE.js.map
