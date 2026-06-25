import {
  Component,
  Input,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-CAYUHUBX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// src/app/shared/components/bar-chart/bar-chart.ts
var _forTrack0 = ($index, $item) => $item.label;
function BarChart_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 0);
    \u0275\u0275text(1, "Sin datos para mostrar.");
    \u0275\u0275domElementEnd();
  }
}
function BarChart_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 2)(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 4);
    \u0275\u0275domElement(4, "div", 5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span", 6);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const b_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", b_r1.width, "%")("background", b_r1.color || ctx_r1.defaultColor());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r1.display ?? b_r1.value);
  }
}
var BarChart = class _BarChart {
  data = input([], ...ngDevMode ? [{ debugName: "data" }] : (
    /* istanbul ignore next */
    []
  ));
  defaultColor = input("var(--color-primary)", ...ngDevMode ? [{ debugName: "defaultColor" }] : (
    /* istanbul ignore next */
    []
  ));
  bars = computed(() => {
    const items = this.data();
    const max = Math.max(0, ...items.map((i) => i.value));
    return items.map((i) => __spreadProps(__spreadValues({}, i), {
      width: max > 0 ? i.value / max * 100 : 0
    }));
  }, ...ngDevMode ? [{ debugName: "bars" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function BarChart_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BarChart)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BarChart, selectors: [["app-bar-chart"]], inputs: { data: [1, "data"], defaultColor: [1, "defaultColor"] }, decls: 4, vars: 1, consts: [[1, "bar-empty"], [1, "bars"], [1, "bar-row"], [1, "bar-label"], [1, "bar-track"], [1, "bar-fill"], [1, "bar-value"]], template: function BarChart_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, BarChart_Conditional_0_Template, 2, 0, "p", 0);
      \u0275\u0275domElementStart(1, "div", 1);
      \u0275\u0275repeaterCreate(2, BarChart_For_3_Template, 7, 6, "div", 2, _forTrack0);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.bars().length === 0 ? 0 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.bars());
    }
  }, styles: ["\n.bars[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.bar-empty[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  text-align: center;\n  padding: 20px 0;\n}\n.bar-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 90px 1fr auto;\n  align-items: center;\n  gap: 12px;\n}\n.bar-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--color-text-2);\n  font-weight: 500;\n}\n.bar-track[_ngcontent-%COMP%] {\n  height: 12px;\n  background: var(--color-surface-alt);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  min-width: 2px;\n  transition: width 0.4s ease;\n}\n.bar-value[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n  color: var(--color-text);\n}\n/*# sourceMappingURL=bar-chart.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarChart, [{
    type: Component,
    args: [{ selector: "app-bar-chart", template: `
    @if (bars().length === 0) {
      <p class="bar-empty">Sin datos para mostrar.</p>
    }
    <div class="bars">
      @for (b of bars(); track b.label) {
        <div class="bar-row">
          <span class="bar-label">{{ b.label }}</span>
          <div class="bar-track">
            <div class="bar-fill" [style.width.%]="b.width" [style.background]="b.color || defaultColor()"></div>
          </div>
          <span class="bar-value">{{ b.display ?? b.value }}</span>
        </div>
      }
    </div>
  `, styles: ["/* angular:styles/component:css;d7eb252ac9d2fde17734078110be7cfca700b7d5694581845af72a1ebc1fa217;/Users/henryantoniomendozapuerta/Downloads/pagoya-web/src/app/shared/components/bar-chart/bar-chart.ts */\n.bars {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.bar-empty {\n  color: var(--color-text-muted);\n  text-align: center;\n  padding: 20px 0;\n}\n.bar-row {\n  display: grid;\n  grid-template-columns: 90px 1fr auto;\n  align-items: center;\n  gap: 12px;\n}\n.bar-label {\n  font-size: 0.85rem;\n  color: var(--color-text-2);\n  font-weight: 500;\n}\n.bar-track {\n  height: 12px;\n  background: var(--color-surface-alt);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.bar-fill {\n  height: 100%;\n  border-radius: 999px;\n  min-width: 2px;\n  transition: width 0.4s ease;\n}\n.bar-value {\n  font-size: 0.85rem;\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n  color: var(--color-text);\n}\n/*# sourceMappingURL=bar-chart.css.map */\n"] }]
  }], null, { data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: false }] }], defaultColor: [{ type: Input, args: [{ isSignal: true, alias: "defaultColor", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BarChart, { className: "BarChart", filePath: "src/app/shared/components/bar-chart/bar-chart.ts", lineNumber: 43 });
})();

// src/app/shared/utils/export.ts
function escapeCell(value) {
  const text = value == null ? "" : String(value);
  return /[",\n;]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}
function downloadCsv(filename, headers, rows) {
  const lines = [headers, ...rows].map((row) => row.map(escapeCell).join(","));
  const blob = new Blob(["\uFEFF" + lines.join("\r\n")], {
    type: "text/csv;charset=utf-8;"
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename.endsWith(".csv") ? filename : `${filename}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}
function printToPdf() {
  window.print();
}

export {
  BarChart,
  downloadCsv,
  printToPdf
};
//# sourceMappingURL=chunk-IU3UZWU4.js.map
