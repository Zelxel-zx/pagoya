import {
  ACCOUNT_STATUS_LABEL,
  ACCOUNT_TYPE_LABEL,
  AccountService
} from "./chunk-HM2K47RH.js";
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
import "./chunk-XEEWL246.js";
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CAYUHUBX.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/reports/accounts/accounts-report.ts
function AccountsReport_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 5);
  }
}
function AccountsReport_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function AccountsReport_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-donut-chart", 18);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.statusDonut());
  }
}
function AccountsReport_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1, "Sin datos para mostrar.");
    \u0275\u0275elementEnd();
  }
}
function AccountsReport_th_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, "Tipo");
    \u0275\u0275elementEnd();
  }
}
function AccountsReport_td_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.typeText(r_r2));
  }
}
function AccountsReport_th_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, "Estado");
    \u0275\u0275elementEnd();
  }
}
function AccountsReport_td_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.statusText(r_r3));
  }
}
function AccountsReport_th_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Cantidad");
    \u0275\u0275elementEnd();
  }
}
function AccountsReport_td_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r4.total);
  }
}
function AccountsReport_th_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Saldo");
    \u0275\u0275elementEnd();
  }
}
function AccountsReport_td_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "soles");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, r_r5.totalBalance));
  }
}
function AccountsReport_tr_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 37);
  }
}
function AccountsReport_tr_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 38);
  }
}
var STATUS_COLORS = {
  ACTIVE: "#1e7e34",
  SUSPENDED: "#e8a13a",
  CLOSED: "#9aa0a6"
};
var TYPE_COLORS = {
  SAVINGS: "#1a5fb4",
  CHECKING: "#6c3fc4"
};
var AccountsReport = class _AccountsReport {
  accountService = inject(AccountService);
  columns = ["type", "status", "total", "totalBalance"];
  rows = signal([], ...ngDevMode ? [{ debugName: "rows" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  totalAccounts = computed(() => this.rows().reduce((sum, r) => sum + r.total, 0), ...ngDevMode ? [{ debugName: "totalAccounts" }] : (
    /* istanbul ignore next */
    []
  ));
  totalBalance = computed(() => this.rows().reduce((sum, r) => sum + r.totalBalance, 0), ...ngDevMode ? [{ debugName: "totalBalance" }] : (
    /* istanbul ignore next */
    []
  ));
  donutMode = signal("status", ...ngDevMode ? [{ debugName: "donutMode" }] : (
    /* istanbul ignore next */
    []
  ));
  statusDonut = computed(() => {
    if (this.donutMode() === "type") {
      const grouped2 = /* @__PURE__ */ new Map();
      for (const r of this.rows()) {
        grouped2.set(r.type, (grouped2.get(r.type) ?? 0) + r.total);
      }
      return [...grouped2.entries()].map(([type, total]) => ({
        label: ACCOUNT_TYPE_LABEL[type],
        value: total,
        color: TYPE_COLORS[type]
      }));
    }
    const grouped = /* @__PURE__ */ new Map();
    for (const r of this.rows()) {
      grouped.set(r.status, (grouped.get(r.status) ?? 0) + r.total);
    }
    return [...grouped.entries()].map(([status, total]) => ({
      label: ACCOUNT_STATUS_LABEL[status],
      value: total,
      color: STATUS_COLORS[status]
    }));
  }, ...ngDevMode ? [{ debugName: "statusDonut" }] : (
    /* istanbul ignore next */
    []
  ));
  balanceByType = computed(() => {
    const grouped = /* @__PURE__ */ new Map();
    for (const r of this.rows()) {
      grouped.set(r.type, (grouped.get(r.type) ?? 0) + r.totalBalance);
    }
    return [...grouped.entries()].map(([type, balance]) => ({
      label: ACCOUNT_TYPE_LABEL[type],
      value: balance,
      display: `S/ ${balance.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })}`,
      color: TYPE_COLORS[type]
    }));
  }, ...ngDevMode ? [{ debugName: "balanceByType" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.loading.set(true);
    this.accountService.summary().subscribe({
      next: (data) => {
        this.rows.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        this.errorMessage.set(apiErrorMessage(err, "No se pudo cargar el reporte."));
      }
    });
  }
  typeText(r) {
    return ACCOUNT_TYPE_LABEL[r.type];
  }
  statusText(r) {
    return ACCOUNT_STATUS_LABEL[r.status];
  }
  exportCsv() {
    downloadCsv("reporte-cuentas", ["Tipo", "Estado", "Cantidad", "Saldo"], this.rows().map((r) => [this.typeText(r), this.statusText(r), r.total, r.totalBalance]));
  }
  exportPdf() {
    printToPdf();
  }
  static \u0275fac = function AccountsReport_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccountsReport)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountsReport, selectors: [["app-accounts-report"]], decls: 65, vars: 13, consts: [[1, "page-head", "with-action"], [1, "page-title"], [1, "page-subtitle"], [1, "head-actions", "no-print"], ["mat-stroked-button", "", 3, "click"], ["mode", "indeterminate"], [1, "form-mensaje", "form-mensaje--error"], [1, "report-stats"], ["appearance", "outlined", 1, "report-stat"], [1, "stat-label"], [1, "stat-value"], [1, "report-grid"], ["appearance", "outlined", 1, "panel"], [1, "panel-head"], [1, "panel-title"], ["hideSingleSelectionIndicator", "", 1, "no-print", "donut-toggle", 3, "change", "value"], ["value", "status"], ["value", "type"], ["caption", "Cuentas", 3, "data"], [1, "panel-empty"], [3, "data"], ["appearance", "outlined", 1, "table-card"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "type"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "status"], ["matColumnDef", "total"], ["mat-header-cell", "", "class", "num", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "num", 4, "matCellDef"], ["matColumnDef", "totalBalance"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", 1, "num"], ["mat-cell", "", 1, "num"], ["mat-header-row", ""], ["mat-row", ""]], template: function AccountsReport_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Reporte de cuentas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Resumen de cuentas por tipo y estado.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3)(7, "button", 4);
      \u0275\u0275listener("click", function AccountsReport_Template_button_click_7_listener() {
        return ctx.exportCsv();
      });
      \u0275\u0275elementStart(8, "mat-icon");
      \u0275\u0275text(9, "download");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " CSV ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 4);
      \u0275\u0275listener("click", function AccountsReport_Template_button_click_11_listener() {
        return ctx.exportPdf();
      });
      \u0275\u0275elementStart(12, "mat-icon");
      \u0275\u0275text(13, "picture_as_pdf");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " PDF ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(15, AccountsReport_Conditional_15_Template, 1, 0, "mat-progress-bar", 5);
      \u0275\u0275conditionalCreate(16, AccountsReport_Conditional_16_Template, 2, 1, "div", 6);
      \u0275\u0275elementStart(17, "div", 7)(18, "mat-card", 8)(19, "span", 9);
      \u0275\u0275text(20, "Total de cuentas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "span", 10);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "mat-card", 8)(24, "span", 9);
      \u0275\u0275text(25, "Saldo acumulado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "span", 10);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "soles");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "div", 11)(30, "mat-card", 12)(31, "div", 13)(32, "h2", 14)(33, "mat-icon");
      \u0275\u0275text(34, "donut_large");
      \u0275\u0275elementEnd();
      \u0275\u0275text(35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "mat-button-toggle-group", 15);
      \u0275\u0275listener("change", function AccountsReport_Template_mat_button_toggle_group_change_36_listener($event) {
        return ctx.donutMode.set($event.value);
      });
      \u0275\u0275elementStart(37, "mat-button-toggle", 16);
      \u0275\u0275text(38, "Estado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "mat-button-toggle", 17);
      \u0275\u0275text(40, "Tipo");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(41, AccountsReport_Conditional_41_Template, 1, 1, "app-donut-chart", 18)(42, AccountsReport_Conditional_42_Template, 2, 0, "p", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "mat-card", 12)(44, "h2", 14)(45, "mat-icon");
      \u0275\u0275text(46, "bar_chart");
      \u0275\u0275elementEnd();
      \u0275\u0275text(47, " Saldo por tipo");
      \u0275\u0275elementEnd();
      \u0275\u0275element(48, "app-bar-chart", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "mat-card", 21)(50, "table", 22);
      \u0275\u0275elementContainerStart(51, 23);
      \u0275\u0275template(52, AccountsReport_th_52_Template, 2, 0, "th", 24)(53, AccountsReport_td_53_Template, 2, 1, "td", 25);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(54, 26);
      \u0275\u0275template(55, AccountsReport_th_55_Template, 2, 0, "th", 24)(56, AccountsReport_td_56_Template, 2, 1, "td", 25);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(57, 27);
      \u0275\u0275template(58, AccountsReport_th_58_Template, 2, 0, "th", 28)(59, AccountsReport_td_59_Template, 2, 1, "td", 29);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(60, 30);
      \u0275\u0275template(61, AccountsReport_th_61_Template, 2, 0, "th", 28)(62, AccountsReport_td_62_Template, 3, 3, "td", 29);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275template(63, AccountsReport_tr_63_Template, 1, 0, "tr", 31)(64, AccountsReport_tr_64_Template, 1, 0, "tr", 32);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275conditional(ctx.loading() ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMessage() ? 16 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.totalAccounts());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 11, ctx.totalBalance()));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" Cuentas por ", ctx.donutMode() === "type" ? "tipo" : "estado", " ");
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.donutMode());
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.statusDonut().length ? 41 : 42);
      \u0275\u0275advance(7);
      \u0275\u0275property("data", ctx.balanceByType());
      \u0275\u0275advance(2);
      \u0275\u0275property("dataSource", ctx.rows());
      \u0275\u0275advance(13);
      \u0275\u0275property("matHeaderRowDef", ctx.columns);
      \u0275\u0275advance();
      \u0275\u0275property("matRowDefColumns", ctx.columns);
    }
  }, dependencies: [
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
  ], styles: ["\n.report-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 18px;\n  margin-bottom: 20px;\n}\n.report-stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 18px 20px;\n  border-radius: var(--radius);\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.report-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  align-items: start;\n  margin-bottom: 20px;\n}\n.panel[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: var(--radius);\n}\n.panel-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.05rem;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n.panel-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.panel-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.panel-head[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.donut-toggle[_ngcontent-%COMP%] {\n  height: 36px;\n}\n.head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.page-head.with-action[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n}\n.panel-empty[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  text-align: center;\n  padding: 28px 0;\n}\n.table-card[_ngcontent-%COMP%] {\n  padding: 4px 4px 0;\n  border-radius: var(--radius);\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  background: transparent;\n}\n.num[_ngcontent-%COMP%] {\n  text-align: right;\n}\nmat-progress-bar[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  border-radius: 999px;\n}\n@media (max-width: 860px) {\n  .report-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=accounts-report.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountsReport, [{
    type: Component,
    args: [{ selector: "app-accounts-report", imports: [
      MatCardModule,
      MatIconModule,
      MatTableModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatProgressBarModule,
      SolesPipe,
      DonutChart,
      BarChart
    ], template: `<div class="page-head with-action">
  <div>
    <h1 class="page-title">Reporte de cuentas</h1>
    <p class="page-subtitle">Resumen de cuentas por tipo y estado.</p>
  </div>
  <div class="head-actions no-print">
    <button mat-stroked-button (click)="exportCsv()">
      <mat-icon>download</mat-icon> CSV
    </button>
    <button mat-stroked-button (click)="exportPdf()">
      <mat-icon>picture_as_pdf</mat-icon> PDF
    </button>
  </div>
</div>

@if (loading()) {
  <mat-progress-bar mode="indeterminate"></mat-progress-bar>
}

@if (errorMessage()) {
  <div class="form-mensaje form-mensaje--error">{{ errorMessage() }}</div>
}

<div class="report-stats">
  <mat-card appearance="outlined" class="report-stat">
    <span class="stat-label">Total de cuentas</span>
    <span class="stat-value">{{ totalAccounts() }}</span>
  </mat-card>
  <mat-card appearance="outlined" class="report-stat">
    <span class="stat-label">Saldo acumulado</span>
    <span class="stat-value">{{ totalBalance() | soles }}</span>
  </mat-card>
</div>

<div class="report-grid">
  <mat-card appearance="outlined" class="panel">
    <div class="panel-head">
      <h2 class="panel-title">
        <mat-icon>donut_large</mat-icon>
        Cuentas por {{ donutMode() === 'type' ? 'tipo' : 'estado' }}
      </h2>
      <mat-button-toggle-group
        [value]="donutMode()"
        (change)="donutMode.set($event.value)"
        hideSingleSelectionIndicator
        class="no-print donut-toggle"
      >
        <mat-button-toggle value="status">Estado</mat-button-toggle>
        <mat-button-toggle value="type">Tipo</mat-button-toggle>
      </mat-button-toggle-group>
    </div>
    @if (statusDonut().length) {
      <app-donut-chart [data]="statusDonut()" caption="Cuentas" />
    } @else {
      <p class="panel-empty">Sin datos para mostrar.</p>
    }
  </mat-card>

  <mat-card appearance="outlined" class="panel">
    <h2 class="panel-title"><mat-icon>bar_chart</mat-icon> Saldo por tipo</h2>
    <app-bar-chart [data]="balanceByType()" />
  </mat-card>
</div>

<mat-card appearance="outlined" class="table-card">
  <table mat-table [dataSource]="rows()">
    <ng-container matColumnDef="type">
      <th mat-header-cell *matHeaderCellDef>Tipo</th>
      <td mat-cell *matCellDef="let r">{{ typeText(r) }}</td>
    </ng-container>
    <ng-container matColumnDef="status">
      <th mat-header-cell *matHeaderCellDef>Estado</th>
      <td mat-cell *matCellDef="let r">{{ statusText(r) }}</td>
    </ng-container>
    <ng-container matColumnDef="total">
      <th mat-header-cell *matHeaderCellDef class="num">Cantidad</th>
      <td mat-cell *matCellDef="let r" class="num">{{ r.total }}</td>
    </ng-container>
    <ng-container matColumnDef="totalBalance">
      <th mat-header-cell *matHeaderCellDef class="num">Saldo</th>
      <td mat-cell *matCellDef="let r" class="num">{{ r.totalBalance | soles }}</td>
    </ng-container>
    <tr mat-header-row *matHeaderRowDef="columns"></tr>
    <tr mat-row *matRowDef="let row; columns: columns"></tr>
  </table>
</mat-card>
`, styles: ["/* src/app/features/reports/accounts/accounts-report.css */\n.report-stats {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 18px;\n  margin-bottom: 20px;\n}\n.report-stat {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 18px 20px;\n  border-radius: var(--radius);\n}\n.stat-label {\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n}\n.stat-value {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.report-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  align-items: start;\n  margin-bottom: 20px;\n}\n.panel {\n  padding: 20px;\n  border-radius: var(--radius);\n}\n.panel-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.05rem;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n.panel-title mat-icon {\n  color: var(--color-primary);\n}\n.panel-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.panel-head .panel-title {\n  margin-bottom: 0;\n}\n.donut-toggle {\n  height: 36px;\n}\n.head-actions {\n  display: flex;\n  gap: 10px;\n}\n.page-head.with-action {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n}\n.panel-empty {\n  color: var(--color-text-muted);\n  text-align: center;\n  padding: 28px 0;\n}\n.table-card {\n  padding: 4px 4px 0;\n  border-radius: var(--radius);\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  background: transparent;\n}\n.num {\n  text-align: right;\n}\nmat-progress-bar {\n  margin-bottom: 16px;\n  border-radius: 999px;\n}\n@media (max-width: 860px) {\n  .report-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=accounts-report.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountsReport, { className: "AccountsReport", filePath: "src/app/features/reports/accounts/accounts-report.ts", lineNumber: 51 });
})();
export {
  AccountsReport
};
//# sourceMappingURL=chunk-TRONJQCM.js.map
