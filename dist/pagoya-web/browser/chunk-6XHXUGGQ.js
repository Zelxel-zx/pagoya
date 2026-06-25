import {
  TRANSFER_STATUS_LABEL,
  TransferService
} from "./chunk-5C5M26PA.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel
} from "./chunk-AHMCEEYF.js";
import {
  BarChart,
  downloadCsv,
  printToPdf
} from "./chunk-IU3UZWU4.js";
import {
  DonutChart
} from "./chunk-JI76JCEH.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableModule
} from "./chunk-GTVTQJZ3.js";
import {
  MatButtonToggle,
  MatButtonToggleGroup,
  MatButtonToggleModule
} from "./chunk-Y5ZZLN5Y.js";
import {
  SolesPipe
} from "./chunk-3NLNF65F.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-PXC5WPHP.js";
import "./chunk-X6Y4PJVM.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-XEEWL246.js";
import "./chunk-BX5HM337.js";
import {
  MatCard,
  MatCardModule
} from "./chunk-ZDX2EUAE.js";
import "./chunk-YP26LRAW.js";
import {
  MatIcon,
  MatIconModule,
  apiErrorMessage
} from "./chunk-J4RFI7W2.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-FDUTTXTA.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CAYUHUBX.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/reports/transfers/transfers-report.ts
var _forTrack0 = ($index, $item) => $item.day;
function TransfersReport_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 4);
  }
}
function TransfersReport_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function TransfersReport_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-donut-chart", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.statusDonut());
  }
}
function TransfersReport_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1, "Sin transferencias registradas.");
    \u0275\u0275elementEnd();
  }
}
function TransfersReport_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function TransfersReport_Conditional_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.exportCurrencyCsv());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " CSV ");
    \u0275\u0275elementEnd();
  }
}
function TransfersReport_Conditional_28_th_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36);
    \u0275\u0275text(1, "Moneda");
    \u0275\u0275elementEnd();
  }
}
function TransfersReport_Conditional_28_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r3.currency);
  }
}
function TransfersReport_Conditional_28_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 38);
    \u0275\u0275text(1, "Cantidad");
    \u0275\u0275elementEnd();
  }
}
function TransfersReport_Conditional_28_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r4.totalTransfers);
  }
}
function TransfersReport_Conditional_28_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 38);
    \u0275\u0275text(1, "Total");
    \u0275\u0275elementEnd();
  }
}
function TransfersReport_Conditional_28_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 39);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "soles");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, r_r5.totalAmount, r_r5.currency));
  }
}
function TransfersReport_Conditional_28_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 40);
  }
}
function TransfersReport_Conditional_28_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 41);
  }
}
function TransfersReport_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 14);
    \u0275\u0275elementContainerStart(1, 27);
    \u0275\u0275template(2, TransfersReport_Conditional_28_th_2_Template, 2, 0, "th", 28)(3, TransfersReport_Conditional_28_td_3_Template, 2, 1, "td", 29);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(4, 30);
    \u0275\u0275template(5, TransfersReport_Conditional_28_th_5_Template, 2, 0, "th", 31)(6, TransfersReport_Conditional_28_td_6_Template, 2, 1, "td", 32);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(7, 33);
    \u0275\u0275template(8, TransfersReport_Conditional_28_th_8_Template, 2, 0, "th", 31)(9, TransfersReport_Conditional_28_td_9_Template, 3, 4, "td", 32);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(10, TransfersReport_Conditional_28_tr_10_Template, 1, 0, "tr", 34)(11, TransfersReport_Conditional_28_tr_11_Template, 1, 0, "tr", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("dataSource", ctx_r0.byCurrency());
    \u0275\u0275advance(10);
    \u0275\u0275property("matHeaderRowDef", ctx_r0.currencyColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r0.currencyColumns);
  }
}
function TransfersReport_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function TransfersReport_Conditional_53_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.exportDayCsv());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " CSV ");
    \u0275\u0275elementEnd();
  }
}
function TransfersReport_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 4);
  }
}
function TransfersReport_Conditional_55_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "soles");
  }
  if (rf & 2) {
    const d_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, d_r7.amount), " ");
  }
}
function TransfersReport_Conditional_55_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const d_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", d_r7.transfers, " ");
  }
}
function TransfersReport_Conditional_55_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275pipe(1, "soles");
    \u0275\u0275elementStart(2, "div", 44)(3, "span", 45);
    \u0275\u0275conditionalCreate(4, TransfersReport_Conditional_55_For_2_Conditional_4_Template, 2, 3)(5, TransfersReport_Conditional_55_For_2_Conditional_5_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 47);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", d_r7.day + " \xB7 " + d_r7.transfers + " transf. \xB7 " + \u0275\u0275pipeBind1(1, 5, d_r7.amount));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.dayMetric() === "amount" ? 4 : 5);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", d_r7.height, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r7.shortDay);
  }
}
function TransfersReport_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275repeaterCreate(1, TransfersReport_Conditional_55_For_2_Template, 9, 7, "div", 43, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.dayColumns());
  }
}
function TransfersReport_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1, "No hubo transferencias en el rango seleccionado.");
    \u0275\u0275elementEnd();
  }
}
var STATUS_COLORS = {
  COMPLETED: "#1e7e34",
  PENDING: "#e8a13a",
  FAILED: "#c0392b"
};
var CURRENCY_COLORS = {
  PEN: "#c0392b",
  USD: "#1a5fb4",
  EUR: "#6c3fc4",
  GBP: "#1e7e34"
};
var TransfersReport = class _TransfersReport {
  transferService = inject(TransferService);
  byCurrency = signal([], ...ngDevMode ? [{ debugName: "byCurrency" }] : (
    /* istanbul ignore next */
    []
  ));
  byStatus = signal([], ...ngDevMode ? [{ debugName: "byStatus" }] : (
    /* istanbul ignore next */
    []
  ));
  byDay = signal([], ...ngDevMode ? [{ debugName: "byDay" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  loadingDay = signal(false, ...ngDevMode ? [{ debugName: "loadingDay" }] : (
    /* istanbul ignore next */
    []
  ));
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  currencyColumns = ["currency", "totalTransfers", "totalAmount"];
  from = signal(this.isoDaysAgo(14), ...ngDevMode ? [{ debugName: "from" }] : (
    /* istanbul ignore next */
    []
  ));
  to = signal(this.isoDaysAgo(0), ...ngDevMode ? [{ debugName: "to" }] : (
    /* istanbul ignore next */
    []
  ));
  dayMetric = signal("amount", ...ngDevMode ? [{ debugName: "dayMetric" }] : (
    /* istanbul ignore next */
    []
  ));
  statusDonut = computed(() => this.byStatus().map((s) => ({
    label: TRANSFER_STATUS_LABEL[s.status] ?? s.status,
    value: s.total,
    color: STATUS_COLORS[s.status] ?? "#999"
  })), ...ngDevMode ? [{ debugName: "statusDonut" }] : (
    /* istanbul ignore next */
    []
  ));
  currencyBars = computed(() => this.byCurrency().map((c) => ({
    label: c.currency,
    value: c.totalAmount,
    display: `${c.currency} ${c.totalAmount.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`,
    color: CURRENCY_COLORS[c.currency] ?? "var(--color-primary)"
  })), ...ngDevMode ? [{ debugName: "currencyBars" }] : (
    /* istanbul ignore next */
    []
  ));
  dayMax = computed(() => {
    const metric = this.dayMetric();
    return Math.max(0, ...this.byDay().map((d) => metric === "amount" ? d.totalAmount : d.totalTransfers));
  }, ...ngDevMode ? [{ debugName: "dayMax" }] : (
    /* istanbul ignore next */
    []
  ));
  dayColumns = computed(() => {
    const metric = this.dayMetric();
    const max = this.dayMax();
    return this.byDay().map((d) => {
      const value = metric === "amount" ? d.totalAmount : d.totalTransfers;
      return {
        day: d.day,
        shortDay: String(d.day).slice(5),
        // MM-dd
        transfers: d.totalTransfers,
        amount: d.totalAmount,
        value,
        height: max > 0 ? value / max * 100 : 0
      };
    });
  }, ...ngDevMode ? [{ debugName: "dayColumns" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.loadAggregates();
    this.loadByDay();
  }
  loadAggregates() {
    this.loading.set(true);
    this.errorMessage.set("");
    this.transferService.reportByCurrency().subscribe({
      next: (data) => this.byCurrency.set(data),
      error: (err) => this.errorMessage.set(apiErrorMessage(err, "No se pudo cargar el reporte."))
    });
    this.transferService.reportByStatus().subscribe({
      next: (data) => {
        this.byStatus.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        this.errorMessage.set(apiErrorMessage(err, "No se pudo cargar el reporte."));
      }
    });
  }
  loadByDay() {
    this.loadingDay.set(true);
    this.transferService.reportByDay(this.from(), this.to()).subscribe({
      next: (data) => {
        this.byDay.set(data);
        this.loadingDay.set(false);
      },
      error: (err) => {
        this.loadingDay.set(false);
        this.errorMessage.set(apiErrorMessage(err, "No se pudo cargar el reporte por d\xEDa."));
      }
    });
  }
  statusText(status) {
    return TRANSFER_STATUS_LABEL[status] ?? status;
  }
  exportCurrencyCsv() {
    downloadCsv("reporte-transferencias-por-moneda", ["Moneda", "Cantidad", "Monto total"], this.byCurrency().map((c) => [c.currency, c.totalTransfers, c.totalAmount]));
  }
  exportDayCsv() {
    downloadCsv(`reporte-transferencias-por-dia_${this.from()}_${this.to()}`, ["Fecha", "Transferencias", "Monto total"], this.byDay().map((d) => [String(d.day), d.totalTransfers, d.totalAmount]));
  }
  exportPdf() {
    printToPdf();
  }
  isoDaysAgo(days) {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() - days);
    return d.toISOString().slice(0, 10);
  }
  static \u0275fac = function TransfersReport_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TransfersReport)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransfersReport, selectors: [["app-transfers-report"]], decls: 57, vars: 13, consts: [[1, "page-head", "with-action"], [1, "page-title"], [1, "page-subtitle"], ["mat-stroked-button", "", 1, "no-print", 3, "click"], ["mode", "indeterminate"], [1, "form-mensaje", "form-mensaje--error"], [1, "report-grid"], ["appearance", "outlined", 1, "panel"], [1, "panel-title"], ["caption", "Transferencias", 3, "data"], [1, "panel-empty"], [1, "panel-head"], ["mat-stroked-button", "", 1, "no-print", "csv-btn"], [3, "data"], ["mat-table", "", 1, "mini-table", 3, "dataSource"], ["appearance", "outlined", 1, "panel", "day-panel"], [1, "day-head"], [1, "day-range", "no-print"], ["hideSingleSelectionIndicator", "", 1, "metric-toggle", 3, "change", "value"], ["value", "amount"], ["value", "count"], ["appearance", "outline", "subscriptSizing", "dynamic"], ["matInput", "", "type", "date", 3, "ngModelChange", "ngModel"], ["mat-flat-button", "", "color", "primary", 3, "click", "disabled"], ["mat-stroked-button", ""], [1, "day-chart"], ["mat-stroked-button", "", 1, "no-print", "csv-btn", 3, "click"], ["matColumnDef", "currency"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "totalTransfers"], ["mat-header-cell", "", "class", "num", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "num", 4, "matCellDef"], ["matColumnDef", "totalAmount"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", 1, "num"], ["mat-cell", "", 1, "num"], ["mat-header-row", ""], ["mat-row", ""], ["mat-stroked-button", "", 3, "click"], [1, "day-col", 3, "title"], [1, "day-bar-wrap"], [1, "day-amount"], [1, "day-bar"], [1, "day-label"]], template: function TransfersReport_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Reporte de transferencias");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Montos por moneda, distribuci\xF3n por estado y actividad diaria.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "button", 3);
      \u0275\u0275listener("click", function TransfersReport_Template_button_click_6_listener() {
        return ctx.exportPdf();
      });
      \u0275\u0275elementStart(7, "mat-icon");
      \u0275\u0275text(8, "picture_as_pdf");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " Descargar PDF ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(10, TransfersReport_Conditional_10_Template, 1, 0, "mat-progress-bar", 4);
      \u0275\u0275conditionalCreate(11, TransfersReport_Conditional_11_Template, 2, 1, "div", 5);
      \u0275\u0275elementStart(12, "div", 6)(13, "mat-card", 7)(14, "h2", 8)(15, "mat-icon");
      \u0275\u0275text(16, "donut_large");
      \u0275\u0275elementEnd();
      \u0275\u0275text(17, " Por estado");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(18, TransfersReport_Conditional_18_Template, 1, 1, "app-donut-chart", 9)(19, TransfersReport_Conditional_19_Template, 2, 0, "p", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "mat-card", 7)(21, "div", 11)(22, "h2", 8)(23, "mat-icon");
      \u0275\u0275text(24, "bar_chart");
      \u0275\u0275elementEnd();
      \u0275\u0275text(25, " Monto por moneda");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(26, TransfersReport_Conditional_26_Template, 4, 0, "button", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "app-bar-chart", 13);
      \u0275\u0275conditionalCreate(28, TransfersReport_Conditional_28_Template, 12, 3, "table", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "mat-card", 15)(30, "div", 16)(31, "h2", 8)(32, "mat-icon");
      \u0275\u0275text(33, "show_chart");
      \u0275\u0275elementEnd();
      \u0275\u0275text(34, " Actividad por d\xEDa");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 17)(36, "mat-button-toggle-group", 18);
      \u0275\u0275listener("change", function TransfersReport_Template_mat_button_toggle_group_change_36_listener($event) {
        return ctx.dayMetric.set($event.value);
      });
      \u0275\u0275elementStart(37, "mat-button-toggle", 19);
      \u0275\u0275text(38, "Monto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "mat-button-toggle", 20);
      \u0275\u0275text(40, "Cantidad");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "mat-form-field", 21)(42, "mat-label");
      \u0275\u0275text(43, "Desde");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "input", 22);
      \u0275\u0275listener("ngModelChange", function TransfersReport_Template_input_ngModelChange_44_listener($event) {
        return ctx.from.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "mat-form-field", 21)(46, "mat-label");
      \u0275\u0275text(47, "Hasta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "input", 22);
      \u0275\u0275listener("ngModelChange", function TransfersReport_Template_input_ngModelChange_48_listener($event) {
        return ctx.to.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "button", 23);
      \u0275\u0275listener("click", function TransfersReport_Template_button_click_49_listener() {
        return ctx.loadByDay();
      });
      \u0275\u0275elementStart(50, "mat-icon");
      \u0275\u0275text(51, "refresh");
      \u0275\u0275elementEnd();
      \u0275\u0275text(52, " Aplicar ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(53, TransfersReport_Conditional_53_Template, 4, 0, "button", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(54, TransfersReport_Conditional_54_Template, 1, 0, "mat-progress-bar", 4);
      \u0275\u0275conditionalCreate(55, TransfersReport_Conditional_55_Template, 3, 0, "div", 25)(56, TransfersReport_Conditional_56_Template, 2, 0, "p", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.loading() ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMessage() ? 11 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.statusDonut().length ? 18 : 19);
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.byCurrency().length ? 26 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.currencyBars());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.byCurrency().length ? 28 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275property("value", ctx.dayMetric());
      \u0275\u0275advance(8);
      \u0275\u0275property("ngModel", ctx.from());
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", ctx.to());
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loadingDay());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.byDay().length ? 53 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loadingDay() ? 54 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.dayColumns().length ? 55 : !ctx.loadingDay() ? 56 : -1);
    }
  }, dependencies: [
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    MatCardModule,
    MatCard,
    MatIconModule,
    MatIcon,
    MatTableModule,
    MatTable,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatColumnDef,
    MatCellDef,
    MatRowDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatInputModule,
    MatInput,
    MatButtonModule,
    MatButton,
    MatButtonToggleModule,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatProgressBarModule,
    MatProgressBar,
    DonutChart,
    BarChart,
    SolesPipe
  ], styles: ["\n.report-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  align-items: start;\n  margin-bottom: 20px;\n}\n.panel[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: var(--radius);\n}\n.panel-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.05rem;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n.panel-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.panel-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n.panel-head[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.metric-toggle[_ngcontent-%COMP%] {\n  height: 38px;\n}\n.panel-empty[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  text-align: center;\n  padding: 28px 0;\n}\n.mini-table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 18px;\n}\n.num[_ngcontent-%COMP%] {\n  text-align: right;\n}\nmat-progress-bar[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  border-radius: 999px;\n}\n.day-head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.day-range[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.day-range[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.day-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n  height: 220px;\n  padding: 24px 4px 0;\n  overflow-x: auto;\n}\n.day-col[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n}\n.day-bar-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n  position: relative;\n}\n.day-bar[_ngcontent-%COMP%] {\n  width: 60%;\n  max-width: 34px;\n  min-height: 2px;\n  background:\n    linear-gradient(\n      180deg,\n      var(--color-primary),\n      var(--color-primary-dark));\n  border-radius: 6px 6px 0 0;\n  transition: height 0.4s ease;\n}\n.day-amount[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  color: var(--color-text-muted);\n  margin-bottom: 4px;\n  white-space: nowrap;\n  font-variant-numeric: tabular-nums;\n}\n.day-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--color-text-muted);\n  margin-top: 6px;\n  white-space: nowrap;\n}\n@media (max-width: 860px) {\n  .report-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=transfers-report.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransfersReport, [{
    type: Component,
    args: [{ selector: "app-transfers-report", imports: [
      FormsModule,
      MatCardModule,
      MatIconModule,
      MatTableModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatProgressBarModule,
      SolesPipe,
      DonutChart,
      BarChart
    ], template: `<div class="page-head with-action">
  <div>
    <h1 class="page-title">Reporte de transferencias</h1>
    <p class="page-subtitle">Montos por moneda, distribuci\xF3n por estado y actividad diaria.</p>
  </div>
  <button mat-stroked-button class="no-print" (click)="exportPdf()">
    <mat-icon>picture_as_pdf</mat-icon> Descargar PDF
  </button>
</div>

@if (loading()) {
  <mat-progress-bar mode="indeterminate"></mat-progress-bar>
}

@if (errorMessage()) {
  <div class="form-mensaje form-mensaje--error">{{ errorMessage() }}</div>
}

<div class="report-grid">
  <mat-card appearance="outlined" class="panel">
    <h2 class="panel-title"><mat-icon>donut_large</mat-icon> Por estado</h2>
    @if (statusDonut().length) {
      <app-donut-chart [data]="statusDonut()" caption="Transferencias" />
    } @else {
      <p class="panel-empty">Sin transferencias registradas.</p>
    }
  </mat-card>

  <mat-card appearance="outlined" class="panel">
    <div class="panel-head">
      <h2 class="panel-title"><mat-icon>bar_chart</mat-icon> Monto por moneda</h2>
      @if (byCurrency().length) {
        <button mat-stroked-button class="no-print csv-btn" (click)="exportCurrencyCsv()">
          <mat-icon>download</mat-icon> CSV
        </button>
      }
    </div>
    <app-bar-chart [data]="currencyBars()" />

    @if (byCurrency().length) {
      <table mat-table [dataSource]="byCurrency()" class="mini-table">
        <ng-container matColumnDef="currency">
          <th mat-header-cell *matHeaderCellDef>Moneda</th>
          <td mat-cell *matCellDef="let r">{{ r.currency }}</td>
        </ng-container>
        <ng-container matColumnDef="totalTransfers">
          <th mat-header-cell *matHeaderCellDef class="num">Cantidad</th>
          <td mat-cell *matCellDef="let r" class="num">{{ r.totalTransfers }}</td>
        </ng-container>
        <ng-container matColumnDef="totalAmount">
          <th mat-header-cell *matHeaderCellDef class="num">Total</th>
          <td mat-cell *matCellDef="let r" class="num">{{ r.totalAmount | soles: r.currency }}</td>
        </ng-container>
        <tr mat-header-row *matHeaderRowDef="currencyColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: currencyColumns"></tr>
      </table>
    }
  </mat-card>
</div>

<mat-card appearance="outlined" class="panel day-panel">
  <div class="day-head">
    <h2 class="panel-title"><mat-icon>show_chart</mat-icon> Actividad por d\xEDa</h2>
    <div class="day-range no-print">
      <mat-button-toggle-group
        [value]="dayMetric()"
        (change)="dayMetric.set($event.value)"
        hideSingleSelectionIndicator
        class="metric-toggle"
      >
        <mat-button-toggle value="amount">Monto</mat-button-toggle>
        <mat-button-toggle value="count">Cantidad</mat-button-toggle>
      </mat-button-toggle-group>

      <mat-form-field appearance="outline" subscriptSizing="dynamic">
        <mat-label>Desde</mat-label>
        <input matInput type="date" [ngModel]="from()" (ngModelChange)="from.set($event)" />
      </mat-form-field>
      <mat-form-field appearance="outline" subscriptSizing="dynamic">
        <mat-label>Hasta</mat-label>
        <input matInput type="date" [ngModel]="to()" (ngModelChange)="to.set($event)" />
      </mat-form-field>
      <button mat-flat-button color="primary" (click)="loadByDay()" [disabled]="loadingDay()">
        <mat-icon>refresh</mat-icon> Aplicar
      </button>
      @if (byDay().length) {
        <button mat-stroked-button (click)="exportDayCsv()">
          <mat-icon>download</mat-icon> CSV
        </button>
      }
    </div>
  </div>

  @if (loadingDay()) {
    <mat-progress-bar mode="indeterminate"></mat-progress-bar>
  }

  @if (dayColumns().length) {
    <div class="day-chart">
      @for (d of dayColumns(); track d.day) {
        <div class="day-col" [title]="d.day + ' \xB7 ' + d.transfers + ' transf. \xB7 ' + (d.amount | soles)">
          <div class="day-bar-wrap">
            <span class="day-amount">
              @if (dayMetric() === 'amount') {
                {{ d.amount | soles }}
              } @else {
                {{ d.transfers }}
              }
            </span>
            <div class="day-bar" [style.height.%]="d.height"></div>
          </div>
          <span class="day-label">{{ d.shortDay }}</span>
        </div>
      }
    </div>
  } @else if (!loadingDay()) {
    <p class="panel-empty">No hubo transferencias en el rango seleccionado.</p>
  }
</mat-card>
`, styles: ["/* src/app/features/reports/transfers/transfers-report.css */\n.report-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  align-items: start;\n  margin-bottom: 20px;\n}\n.panel {\n  padding: 20px;\n  border-radius: var(--radius);\n}\n.panel-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.05rem;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n.panel-title mat-icon {\n  color: var(--color-primary);\n}\n.panel-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n.panel-head .panel-title {\n  margin-bottom: 0;\n}\n.metric-toggle {\n  height: 38px;\n}\n.panel-empty {\n  color: var(--color-text-muted);\n  text-align: center;\n  padding: 28px 0;\n}\n.mini-table {\n  width: 100%;\n  margin-top: 18px;\n}\n.num {\n  text-align: right;\n}\nmat-progress-bar {\n  margin-bottom: 16px;\n  border-radius: 999px;\n}\n.day-head {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.day-range {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.day-range mat-form-field {\n  width: 150px;\n}\n.day-chart {\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n  height: 220px;\n  padding: 24px 4px 0;\n  overflow-x: auto;\n}\n.day-col {\n  flex: 1;\n  min-width: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n}\n.day-bar-wrap {\n  flex: 1;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n  position: relative;\n}\n.day-bar {\n  width: 60%;\n  max-width: 34px;\n  min-height: 2px;\n  background:\n    linear-gradient(\n      180deg,\n      var(--color-primary),\n      var(--color-primary-dark));\n  border-radius: 6px 6px 0 0;\n  transition: height 0.4s ease;\n}\n.day-amount {\n  font-size: 0.62rem;\n  color: var(--color-text-muted);\n  margin-bottom: 4px;\n  white-space: nowrap;\n  font-variant-numeric: tabular-nums;\n}\n.day-label {\n  font-size: 0.7rem;\n  color: var(--color-text-muted);\n  margin-top: 6px;\n  white-space: nowrap;\n}\n@media (max-width: 860px) {\n  .report-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=transfers-report.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransfersReport, { className: "TransfersReport", filePath: "src/app/features/reports/transfers/transfers-report.ts", lineNumber: 58 });
})();
export {
  TransfersReport
};
//# sourceMappingURL=chunk-6XHXUGGQ.js.map
