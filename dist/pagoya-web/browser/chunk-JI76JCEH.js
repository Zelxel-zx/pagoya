import {
  DecimalPipe
} from "./chunk-FDUTTXTA.js";
import {
  Component,
  Input,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-CAYUHUBX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// src/app/shared/components/donut-chart/donut-chart.ts
var _forTrack0 = ($index, $item) => $item.label;
function DonutChart_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "circle", 3);
  }
  if (rf & 2) {
    const a_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("r", ctx_r1.radius)("stroke", a_r1.color)("stroke-width", ctx_r1.thickness())("stroke-dasharray", a_r1.dash + " " + ctx_r1.circumference)("transform", "rotate(" + a_r1.rotate + " 50 50)");
  }
}
function DonutChart_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275domElement(1, "span", 8);
    \u0275\u0275domElementStart(2, "span", 9);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 10);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const a_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", a_r3.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(6, 5, a_r3.value), " \xB7 ", a_r3.pct, "%");
  }
}
var DonutChart = class _DonutChart {
  data = input([], ...ngDevMode ? [{ debugName: "data" }] : (
    /* istanbul ignore next */
    []
  ));
  size = input(170, ...ngDevMode ? [{ debugName: "size" }] : (
    /* istanbul ignore next */
    []
  ));
  thickness = input(16, ...ngDevMode ? [{ debugName: "thickness" }] : (
    /* istanbul ignore next */
    []
  ));
  caption = input("Total", ...ngDevMode ? [{ debugName: "caption" }] : (
    /* istanbul ignore next */
    []
  ));
  radius = 40;
  circumference = 2 * Math.PI * 40;
  total = computed(() => this.data().reduce((sum, s) => sum + s.value, 0), ...ngDevMode ? [{ debugName: "total" }] : (
    /* istanbul ignore next */
    []
  ));
  arcs = computed(() => {
    const total = this.total();
    if (total <= 0)
      return [];
    let cumulative = 0;
    return this.data().filter((s) => s.value > 0).map((s) => {
      const fraction = s.value / total;
      const arc = __spreadProps(__spreadValues({}, s), {
        dash: fraction * this.circumference,
        rotate: cumulative * 360 - 90,
        pct: Math.round(fraction * 100)
      });
      cumulative += fraction;
      return arc;
    });
  }, ...ngDevMode ? [{ debugName: "arcs" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function DonutChart_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DonutChart)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DonutChart, selectors: [["app-donut-chart"]], inputs: { data: [1, "data"], size: [1, "size"], thickness: [1, "thickness"], caption: [1, "caption"] }, decls: 14, vars: 10, consts: [[1, "donut"], ["viewBox", "0 0 100 100", 1, "donut-svg"], ["cx", "50", "cy", "50", "fill", "none", 1, "track"], ["cx", "50", "cy", "50", "fill", "none", "stroke-linecap", "butt"], [1, "donut-center"], [1, "donut-total"], [1, "donut-caption"], [1, "legend"], [1, "dot"], [1, "legend-label"], [1, "legend-value"]], template: function DonutChart_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(1, "svg", 1);
      \u0275\u0275domElement(2, "circle", 2);
      \u0275\u0275repeaterCreate(3, DonutChart_For_4_Template, 1, 5, ":svg:circle", 3, _forTrack0);
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(5, "div", 4)(6, "span", 5);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "number");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "span", 6);
      \u0275\u0275text(10);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(11, "ul", 7);
      \u0275\u0275repeaterCreate(12, DonutChart_For_13_Template, 7, 7, "li", null, _forTrack0);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275styleProp("width", ctx.size(), "px")("height", ctx.size(), "px");
      \u0275\u0275advance();
      \u0275\u0275attribute("r", ctx.radius)("stroke-width", ctx.thickness());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.arcs());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 8, ctx.total()));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.caption());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.arcs());
    }
  }, dependencies: [DecimalPipe], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 14px;\n}\n.donut[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n}\n.donut-svg[_ngcontent-%COMP%] {\n  transform: rotate(0deg);\n}\n.track[_ngcontent-%COMP%] {\n  stroke: var(--color-surface-alt);\n}\n.donut-center[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.donut-total[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--color-text);\n  line-height: 1;\n}\n.donut-caption[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n}\n.legend[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  width: 100%;\n}\n.legend[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.85rem;\n}\n.dot[_ngcontent-%COMP%] {\n  width: 11px;\n  height: 11px;\n  border-radius: 3px;\n  flex-shrink: 0;\n}\n.legend-label[_ngcontent-%COMP%] {\n  color: var(--color-text-2);\n}\n.legend-value[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: var(--color-text-muted);\n  font-variant-numeric: tabular-nums;\n}\n/*# sourceMappingURL=donut-chart.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DonutChart, [{
    type: Component,
    args: [{ selector: "app-donut-chart", imports: [DecimalPipe], template: `
    <div class="donut">
      <svg viewBox="0 0 100 100" class="donut-svg" [style.width.px]="size()" [style.height.px]="size()">
        <circle class="track" cx="50" cy="50" [attr.r]="radius" fill="none" [attr.stroke-width]="thickness()" />
        @for (a of arcs(); track a.label) {
          <circle
            cx="50"
            cy="50"
            [attr.r]="radius"
            fill="none"
            [attr.stroke]="a.color"
            [attr.stroke-width]="thickness()"
            [attr.stroke-dasharray]="a.dash + ' ' + circumference"
            [attr.transform]="'rotate(' + a.rotate + ' 50 50)'"
            stroke-linecap="butt"
          />
        }
      </svg>
      <div class="donut-center">
        <span class="donut-total">{{ total() | number }}</span>
        <span class="donut-caption">{{ caption() }}</span>
      </div>
    </div>

    <ul class="legend">
      @for (a of arcs(); track a.label) {
        <li>
          <span class="dot" [style.background]="a.color"></span>
          <span class="legend-label">{{ a.label }}</span>
          <span class="legend-value">{{ a.value | number }} \xB7 {{ a.pct }}%</span>
        </li>
      }
    </ul>
  `, styles: ["/* angular:styles/component:css;98c571e3cced235acd360276a5a6933eec75dbce26e363fe913d50629b39eab3;/Users/henryantoniomendozapuerta/Downloads/pagoya-web/src/app/shared/components/donut-chart/donut-chart.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 14px;\n}\n.donut {\n  position: relative;\n  display: inline-flex;\n}\n.donut-svg {\n  transform: rotate(0deg);\n}\n.track {\n  stroke: var(--color-surface-alt);\n}\n.donut-center {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.donut-total {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--color-text);\n  line-height: 1;\n}\n.donut-caption {\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n}\n.legend {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  width: 100%;\n}\n.legend li {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.85rem;\n}\n.dot {\n  width: 11px;\n  height: 11px;\n  border-radius: 3px;\n  flex-shrink: 0;\n}\n.legend-label {\n  color: var(--color-text-2);\n}\n.legend-value {\n  margin-left: auto;\n  color: var(--color-text-muted);\n  font-variant-numeric: tabular-nums;\n}\n/*# sourceMappingURL=donut-chart.css.map */\n"] }]
  }], null, { data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], thickness: [{ type: Input, args: [{ isSignal: true, alias: "thickness", required: false }] }], caption: [{ type: Input, args: [{ isSignal: true, alias: "caption", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DonutChart, { className: "DonutChart", filePath: "src/app/shared/components/donut-chart/donut-chart.ts", lineNumber: 71 });
})();

export {
  DonutChart
};
//# sourceMappingURL=chunk-JI76JCEH.js.map
