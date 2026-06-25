import {
  minAmountValidator
} from "./chunk-HCATZXIL.js";
import {
  MatOption,
  MatPaginator,
  MatPaginatorModule,
  MatSelect,
  MatSelectModule
} from "./chunk-H34AAE5N.js";
import {
  Router,
  RouterLink
} from "./chunk-K7BMT7PF.js";
import {
  MatSnackBar
} from "./chunk-2OVKITJA.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-UZK4RUW7.js";
import {
  ACCOUNT_STATUS_LABEL,
  ACCOUNT_TYPE_LABEL,
  AccountService
} from "./chunk-HM2K47RH.js";
import {
  CURRENCIES,
  TRANSFER_STATUS_LABEL,
  TRANSFER_TYPE_LABEL,
  TransferService
} from "./chunk-5C5M26PA.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatPrefix
} from "./chunk-AHMCEEYF.js";
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
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
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
  DatePipe,
  MatButton,
  MatButtonModule
} from "./chunk-FDUTTXTA.js";
import {
  Component,
  computed,
  forkJoin,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CAYUHUBX.js";
import {
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// src/app/features/transfers/transfer-list/transfer-list.ts
var _c0 = () => [10, 25, 50];
var _forTrack0 = ($index, $item) => $item.id;
function TransferList_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const acc_r1 = ctx.$implicit;
    \u0275\u0275property("value", acc_r1.accountNumber);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(acc_r1.accountNumber);
  }
}
function TransferList_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 15);
  }
}
function TransferList_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage());
  }
}
function TransferList_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, "No hay transferencias para mostrar.");
    \u0275\u0275elementEnd();
  }
}
function TransferList_th_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Fecha");
    \u0275\u0275elementEnd();
  }
}
function TransferList_td_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, t_r3.createdAt, "dd/MM/yyyy HH:mm"));
  }
}
function TransferList_th_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Origen");
    \u0275\u0275elementEnd();
  }
}
function TransferList_td_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4.sourceAccountNumber);
  }
}
function TransferList_th_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Destino");
    \u0275\u0275elementEnd();
  }
}
function TransferList_td_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 38)(1, "span", 39)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 40);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap("type-" + t_r5.type.toLowerCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5.type === "INTERNAL" ? "swap_horiz" : "account_balance");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.destinationOf(t_r5));
  }
}
function TransferList_th_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Tipo");
    \u0275\u0275elementEnd();
  }
}
function TransferList_td_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36)(1, "span", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap("type-" + t_r6.type.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.typeText(t_r6));
  }
}
function TransferList_th_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42);
    \u0275\u0275text(1, "Monto");
    \u0275\u0275elementEnd();
  }
}
function TransferList_td_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 43);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "soles");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, t_r7.amount, t_r7.currency));
  }
}
function TransferList_th_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 35);
    \u0275\u0275text(1, "Estado");
    \u0275\u0275elementEnd();
  }
}
function TransferList_td_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36)(1, "span", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.statusClass(t_r8));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusText(t_r8));
  }
}
function TransferList_tr_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 45);
  }
}
function TransferList_tr_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 46);
  }
}
var TransferList = class _TransferList {
  accountService = inject(AccountService);
  transferService = inject(TransferService);
  columns = ["date", "source", "destination", "type", "amount", "status"];
  accounts = signal([], ...ngDevMode ? [{ debugName: "accounts" }] : (
    /* istanbul ignore next */
    []
  ));
  transfers = signal([], ...ngDevMode ? [{ debugName: "transfers" }] : (
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
  accountFilter = signal("ALL", ...ngDevMode ? [{ debugName: "accountFilter" }] : (
    /* istanbul ignore next */
    []
  ));
  search = signal("", ...ngDevMode ? [{ debugName: "search" }] : (
    /* istanbul ignore next */
    []
  ));
  status = signal("ALL", ...ngDevMode ? [{ debugName: "status" }] : (
    /* istanbul ignore next */
    []
  ));
  pageIndex = signal(0, ...ngDevMode ? [{ debugName: "pageIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : (
    /* istanbul ignore next */
    []
  ));
  filtered = computed(() => {
    const text = this.search().toLowerCase();
    const st = this.status();
    const acc = this.accountFilter();
    return this.transfers().filter((t) => (acc === "ALL" || t.sourceAccountNumber === acc) && (st === "ALL" || t.status === st) && (this.destinationOf(t).toLowerCase().includes(text) || t.sourceAccountNumber.toLowerCase().includes(text)));
  }, ...ngDevMode ? [{ debugName: "filtered" }] : (
    /* istanbul ignore next */
    []
  ));
  paged = computed(() => {
    const start = this.pageIndex() * this.pageSize();
    return this.filtered().slice(start, start + this.pageSize());
  }, ...ngDevMode ? [{ debugName: "paged" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.errorMessage.set("");
    this.accountService.listMine({ page: 0, size: 100, sort: "id" }).subscribe({
      next: (res) => {
        this.accounts.set(res.content);
        if (!res.content.length) {
          this.transfers.set([]);
          this.loading.set(false);
          return;
        }
        forkJoin(res.content.map((a) => this.transferService.findByAccount(a.accountNumber, {
          page: 0,
          size: 500,
          sort: "createdAt,desc"
        }))).subscribe({
          next: (pages) => {
            const merged = /* @__PURE__ */ new Map();
            for (const page of pages) {
              for (const t of page.content)
                merged.set(t.id, t);
            }
            const all = [...merged.values()].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
            this.transfers.set(all);
            this.loading.set(false);
          },
          error: (err) => {
            this.loading.set(false);
            this.errorMessage.set(apiErrorMessage(err, "No se pudieron cargar las transferencias."));
          }
        });
      },
      error: (err) => {
        this.loading.set(false);
        this.errorMessage.set(apiErrorMessage(err, "No se pudieron cargar tus cuentas."));
      }
    });
  }
  resetPage() {
    this.pageIndex.set(0);
  }
  onPage(event) {
    this.pageIndex.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
  }
  destinationOf(t) {
    return t.type === "INTERNAL" ? t.targetAccountNumber ?? "\u2014" : `${t.externalBeneficiaryName} \xB7 ${t.externalBankName}`;
  }
  statusText(t) {
    return TRANSFER_STATUS_LABEL[t.status];
  }
  typeText(t) {
    return TRANSFER_TYPE_LABEL[t.type];
  }
  statusClass(t) {
    return "status-" + t.status.toLowerCase();
  }
  static \u0275fac = function TransferList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TransferList)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransferList, selectors: [["app-transfer-list"]], decls: 65, vars: 14, consts: [[1, "page-head", "with-action"], [1, "page-title"], [1, "page-subtitle"], ["mat-flat-button", "", "color", "primary", "routerLink", "/app/transfers/new"], [1, "list-toolbar"], ["appearance", "outline", "subscriptSizing", "dynamic"], [3, "ngModelChange", "ngModel"], ["value", "ALL"], [3, "value"], ["matPrefix", ""], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "search"], ["matInput", "", "placeholder", "Destino o cuenta origen", 3, "ngModelChange", "ngModel"], ["value", "COMPLETED"], ["value", "PENDING"], ["value", "FAILED"], ["mode", "indeterminate"], [1, "form-mensaje", "form-mensaje--error"], [1, "empty"], ["appearance", "outlined", 1, "table-card"], ["mat-table", "", 1, "transfers-table", 3, "dataSource"], ["matColumnDef", "date"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "source"], ["mat-cell", "", "class", "cell-src", 4, "matCellDef"], ["matColumnDef", "destination"], ["mat-cell", "", "class", "cell-dest", 4, "matCellDef"], ["matColumnDef", "type"], ["matColumnDef", "amount"], ["mat-header-cell", "", "class", "num", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "num", 4, "matCellDef"], ["matColumnDef", "status"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "page", "length", "pageSize", "pageIndex", "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 1, "cell-src"], ["mat-cell", "", 1, "cell-dest"], [1, "dest-icon"], [1, "dest-text"], [1, "type-badge"], ["mat-header-cell", "", 1, "num"], ["mat-cell", "", 1, "num"], [1, "status-chip"], ["mat-header-row", ""], ["mat-row", ""]], template: function TransferList_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Transferencias");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Historial de todos tus movimientos.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "a", 3)(7, "mat-icon");
      \u0275\u0275text(8, "send");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " Nueva transferencia ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 4)(11, "mat-form-field", 5)(12, "mat-label");
      \u0275\u0275text(13, "Cuenta de origen");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "mat-select", 6);
      \u0275\u0275listener("ngModelChange", function TransferList_Template_mat_select_ngModelChange_14_listener($event) {
        ctx.accountFilter.set($event);
        return ctx.resetPage();
      });
      \u0275\u0275elementStart(15, "mat-option", 7);
      \u0275\u0275text(16, "Todas las cuentas");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(17, TransferList_For_18_Template, 2, 2, "mat-option", 8, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "mat-icon", 9);
      \u0275\u0275text(20, "account_balance_wallet");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "mat-form-field", 10)(22, "mat-label");
      \u0275\u0275text(23, "Buscar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "input", 11);
      \u0275\u0275listener("ngModelChange", function TransferList_Template_input_ngModelChange_24_listener($event) {
        ctx.search.set($event);
        return ctx.resetPage();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "mat-icon", 9);
      \u0275\u0275text(26, "search");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "mat-form-field", 5)(28, "mat-label");
      \u0275\u0275text(29, "Estado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "mat-select", 6);
      \u0275\u0275listener("ngModelChange", function TransferList_Template_mat_select_ngModelChange_30_listener($event) {
        ctx.status.set($event);
        return ctx.resetPage();
      });
      \u0275\u0275elementStart(31, "mat-option", 7);
      \u0275\u0275text(32, "Todos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "mat-option", 12);
      \u0275\u0275text(34, "Completada");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "mat-option", 13);
      \u0275\u0275text(36, "Pendiente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "mat-option", 14);
      \u0275\u0275text(38, "Fallida");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(39, TransferList_Conditional_39_Template, 1, 0, "mat-progress-bar", 15);
      \u0275\u0275conditionalCreate(40, TransferList_Conditional_40_Template, 2, 1, "div", 16);
      \u0275\u0275conditionalCreate(41, TransferList_Conditional_41_Template, 2, 0, "div", 17);
      \u0275\u0275elementStart(42, "mat-card", 18)(43, "table", 19);
      \u0275\u0275elementContainerStart(44, 20);
      \u0275\u0275template(45, TransferList_th_45_Template, 2, 0, "th", 21)(46, TransferList_td_46_Template, 3, 4, "td", 22);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(47, 23);
      \u0275\u0275template(48, TransferList_th_48_Template, 2, 0, "th", 21)(49, TransferList_td_49_Template, 2, 1, "td", 24);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(50, 25);
      \u0275\u0275template(51, TransferList_th_51_Template, 2, 0, "th", 21)(52, TransferList_td_52_Template, 6, 4, "td", 26);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(53, 27);
      \u0275\u0275template(54, TransferList_th_54_Template, 2, 0, "th", 21)(55, TransferList_td_55_Template, 3, 3, "td", 22);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(56, 28);
      \u0275\u0275template(57, TransferList_th_57_Template, 2, 0, "th", 29)(58, TransferList_td_58_Template, 3, 4, "td", 30);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(59, 31);
      \u0275\u0275template(60, TransferList_th_60_Template, 2, 0, "th", 21)(61, TransferList_td_61_Template, 3, 3, "td", 22);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275template(62, TransferList_tr_62_Template, 1, 0, "tr", 32)(63, TransferList_tr_63_Template, 1, 0, "tr", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "mat-paginator", 34);
      \u0275\u0275listener("page", function TransferList_Template_mat_paginator_page_64_listener($event) {
        return ctx.onPage($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275property("ngModel", ctx.accountFilter());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.accounts());
      \u0275\u0275advance(7);
      \u0275\u0275property("ngModel", ctx.search());
      \u0275\u0275advance(6);
      \u0275\u0275property("ngModel", ctx.status());
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.loading() ? 39 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMessage() ? 40 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() && !ctx.errorMessage() && ctx.filtered().length === 0 ? 41 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("dataSource", ctx.paged());
      \u0275\u0275advance(19);
      \u0275\u0275property("matHeaderRowDef", ctx.columns);
      \u0275\u0275advance();
      \u0275\u0275property("matRowDefColumns", ctx.columns);
      \u0275\u0275advance();
      \u0275\u0275property("length", ctx.filtered().length)("pageSize", ctx.pageSize())("pageIndex", ctx.pageIndex())("pageSizeOptions", \u0275\u0275pureFunction0(13, _c0));
    }
  }, dependencies: [
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    RouterLink,
    MatCardModule,
    MatCard,
    MatButtonModule,
    MatButton,
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
    MatPrefix,
    MatInputModule,
    MatInput,
    MatSelectModule,
    MatSelect,
    MatOption,
    MatPaginatorModule,
    MatPaginator,
    MatProgressBarModule,
    MatProgressBar,
    DatePipe,
    SolesPipe
  ], styles: ['\n.page-head.with-action[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n}\nmat-progress-bar[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  border-radius: 999px;\n}\n.empty[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  color: var(--color-text-muted);\n  background: var(--color-bg);\n  border: 1px dashed var(--color-border);\n  border-radius: var(--radius);\n  margin-bottom: 16px;\n}\n.table-card[_ngcontent-%COMP%] {\n  padding: 4px 4px 0;\n  border-radius: var(--radius);\n  overflow-x: auto;\n}\n.transfers-table[_ngcontent-%COMP%] {\n  width: 100%;\n  background: transparent;\n}\n.transfers-table[_ngcontent-%COMP%]   th.mat-mdc-header-cell[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n}\n.transfers-table[_ngcontent-%COMP%]   tr.mat-mdc-row[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface);\n}\n.cell-src[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.82rem;\n  color: var(--color-text-muted);\n  white-space: nowrap;\n}\n.cell-dest[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.cell-dest[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.dest-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  margin-right: 10px;\n  vertical-align: middle;\n}\n.dest-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.dest-text[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.74rem;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 999px;\n}\n.type-internal[_ngcontent-%COMP%] {\n  background: #eaf2fb;\n  color: #1a5fb4;\n}\n.type-external[_ngcontent-%COMP%] {\n  background: #f3eefb;\n  color: #6c3fc4;\n}\n.num[_ngcontent-%COMP%] {\n  text-align: right;\n}\ntd.num[_ngcontent-%COMP%] {\n  font-variant-numeric: tabular-nums;\n  font-weight: 600;\n}\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  padding: 4px 10px;\n  border-radius: 999px;\n}\n.status-completed[_ngcontent-%COMP%] {\n  background: #e7f4ea;\n  color: #1e7e34;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #b26a00;\n}\n.status-failed[_ngcontent-%COMP%] {\n  background: var(--color-primary-light);\n  color: var(--color-primary-dark);\n}\nmat-paginator[_ngcontent-%COMP%] {\n  border-radius: var(--radius);\n  background: transparent;\n}\n/*# sourceMappingURL=transfer-list.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransferList, [{
    type: Component,
    args: [{ selector: "app-transfer-list", imports: [
      DatePipe,
      FormsModule,
      RouterLink,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatTableModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatPaginatorModule,
      MatProgressBarModule,
      SolesPipe
    ], template: `<div class="page-head with-action">
  <div>
    <h1 class="page-title">Transferencias</h1>
    <p class="page-subtitle">Historial de todos tus movimientos.</p>
  </div>
  <a mat-flat-button color="primary" routerLink="/app/transfers/new">
    <mat-icon>send</mat-icon>
    Nueva transferencia
  </a>
</div>

<div class="list-toolbar">
  <mat-form-field appearance="outline" subscriptSizing="dynamic">
    <mat-label>Cuenta de origen</mat-label>
    <mat-select [ngModel]="accountFilter()" (ngModelChange)="accountFilter.set($event); resetPage()">
      <mat-option value="ALL">Todas las cuentas</mat-option>
      @for (acc of accounts(); track acc.id) {
        <mat-option [value]="acc.accountNumber">{{ acc.accountNumber }}</mat-option>
      }
    </mat-select>
    <mat-icon matPrefix>account_balance_wallet</mat-icon>
  </mat-form-field>

  <mat-form-field appearance="outline" class="search" subscriptSizing="dynamic">
    <mat-label>Buscar</mat-label>
    <input matInput [ngModel]="search()" (ngModelChange)="search.set($event); resetPage()" placeholder="Destino o cuenta origen" />
    <mat-icon matPrefix>search</mat-icon>
  </mat-form-field>

  <mat-form-field appearance="outline" subscriptSizing="dynamic">
    <mat-label>Estado</mat-label>
    <mat-select [ngModel]="status()" (ngModelChange)="status.set($event); resetPage()">
      <mat-option value="ALL">Todos</mat-option>
      <mat-option value="COMPLETED">Completada</mat-option>
      <mat-option value="PENDING">Pendiente</mat-option>
      <mat-option value="FAILED">Fallida</mat-option>
    </mat-select>
  </mat-form-field>
</div>

@if (loading()) {
  <mat-progress-bar mode="indeterminate"></mat-progress-bar>
}

@if (errorMessage()) {
  <div class="form-mensaje form-mensaje--error">{{ errorMessage() }}</div>
}

@if (!loading() && !errorMessage() && filtered().length === 0) {
  <div class="empty">No hay transferencias para mostrar.</div>
}

<mat-card appearance="outlined" class="table-card">
  <table mat-table [dataSource]="paged()" class="transfers-table">

    <ng-container matColumnDef="date">
      <th mat-header-cell *matHeaderCellDef>Fecha</th>
      <td mat-cell *matCellDef="let t">{{ t.createdAt | date: 'dd/MM/yyyy HH:mm' }}</td>
    </ng-container>

    <ng-container matColumnDef="source">
      <th mat-header-cell *matHeaderCellDef>Origen</th>
      <td mat-cell *matCellDef="let t" class="cell-src">{{ t.sourceAccountNumber }}</td>
    </ng-container>

    <ng-container matColumnDef="destination">
      <th mat-header-cell *matHeaderCellDef>Destino</th>
      <td mat-cell *matCellDef="let t" class="cell-dest">
        <span class="dest-icon" [class]="'type-' + t.type.toLowerCase()">
          <mat-icon>{{ t.type === 'INTERNAL' ? 'swap_horiz' : 'account_balance' }}</mat-icon>
        </span>
        <span class="dest-text">{{ destinationOf(t) }}</span>
      </td>
    </ng-container>

    <ng-container matColumnDef="type">
      <th mat-header-cell *matHeaderCellDef>Tipo</th>
      <td mat-cell *matCellDef="let t">
        <span class="type-badge" [class]="'type-' + t.type.toLowerCase()">{{ typeText(t) }}</span>
      </td>
    </ng-container>

    <ng-container matColumnDef="amount">
      <th mat-header-cell *matHeaderCellDef class="num">Monto</th>
      <td mat-cell *matCellDef="let t" class="num">{{ t.amount | soles: t.currency }}</td>
    </ng-container>

    <ng-container matColumnDef="status">
      <th mat-header-cell *matHeaderCellDef>Estado</th>
      <td mat-cell *matCellDef="let t">
        <span class="status-chip" [class]="statusClass(t)">{{ statusText(t) }}</span>
      </td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="columns"></tr>
    <tr mat-row *matRowDef="let row; columns: columns"></tr>
  </table>

  <mat-paginator
    [length]="filtered().length"
    [pageSize]="pageSize()"
    [pageIndex]="pageIndex()"
    [pageSizeOptions]="[10, 25, 50]"
    (page)="onPage($event)"
  />
</mat-card>
`, styles: ['/* src/app/features/transfers/transfer-list/transfer-list.css */\n.page-head.with-action {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n}\nmat-progress-bar {\n  margin-bottom: 16px;\n  border-radius: 999px;\n}\n.empty {\n  padding: 40px;\n  text-align: center;\n  color: var(--color-text-muted);\n  background: var(--color-bg);\n  border: 1px dashed var(--color-border);\n  border-radius: var(--radius);\n  margin-bottom: 16px;\n}\n.table-card {\n  padding: 4px 4px 0;\n  border-radius: var(--radius);\n  overflow-x: auto;\n}\n.transfers-table {\n  width: 100%;\n  background: transparent;\n}\n.transfers-table th.mat-mdc-header-cell {\n  font-size: 0.74rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n}\n.transfers-table tr.mat-mdc-row:hover {\n  background: var(--color-surface);\n}\n.cell-src {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.82rem;\n  color: var(--color-text-muted);\n  white-space: nowrap;\n}\n.cell-dest {\n  font-weight: 500;\n}\n.cell-dest {\n  white-space: nowrap;\n}\n.dest-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  margin-right: 10px;\n  vertical-align: middle;\n}\n.dest-icon mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.dest-text {\n  vertical-align: middle;\n}\n.type-badge {\n  display: inline-block;\n  font-size: 0.74rem;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 999px;\n}\n.type-internal {\n  background: #eaf2fb;\n  color: #1a5fb4;\n}\n.type-external {\n  background: #f3eefb;\n  color: #6c3fc4;\n}\n.num {\n  text-align: right;\n}\ntd.num {\n  font-variant-numeric: tabular-nums;\n  font-weight: 600;\n}\n.status-chip {\n  display: inline-block;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  padding: 4px 10px;\n  border-radius: 999px;\n}\n.status-completed {\n  background: #e7f4ea;\n  color: #1e7e34;\n}\n.status-pending {\n  background: #fff3e0;\n  color: #b26a00;\n}\n.status-failed {\n  background: var(--color-primary-light);\n  color: var(--color-primary-dark);\n}\nmat-paginator {\n  border-radius: var(--radius);\n  background: transparent;\n}\n/*# sourceMappingURL=transfer-list.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransferList, { className: "TransferList", filePath: "src/app/features/transfers/transfer-list/transfer-list.ts", lineNumber: 47 });
})();

// src/app/features/transfers/transfer-form/transfer-form.ts
var _forTrack02 = ($index, $item) => $item.id;
function TransferForm_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 4);
  }
}
function TransferForm_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function TransferForm_For_26_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "soles");
  }
  if (rf & 2) {
    const acc_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, acc_r2.balance), " ");
  }
}
function TransferForm_For_26_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const acc_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusLabel[acc_r2.status], " ");
  }
}
function TransferForm_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14)(1, "span", 28)(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 30);
    \u0275\u0275text(5);
    \u0275\u0275conditionalCreate(6, TransferForm_For_26_Conditional_6_Template, 2, 3)(7, TransferForm_For_26_Conditional_7_Template, 1, 1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const acc_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", acc_r2.accountNumber)("disabled", acc_r2.status !== "ACTIVE");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(acc_r2.accountNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.typeLabel[acc_r2.type], " \xB7 ");
    \u0275\u0275advance();
    \u0275\u0275conditional(acc_r2.status === "ACTIVE" ? 6 : 7);
  }
}
function TransferForm_ForEmpty_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1, "No tienes cuentas");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
  }
}
function TransferForm_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Elige una cuenta de origen");
    \u0275\u0275elementEnd();
  }
}
function TransferForm_Conditional_31_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "La cuenta destino es obligatoria");
    \u0275\u0275elementEnd();
  }
}
function TransferForm_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 12)(1, "mat-label");
    \u0275\u0275text(2, "Cuenta destino");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 31);
    \u0275\u0275elementStart(4, "mat-icon", 16);
    \u0275\u0275text(5, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, TransferForm_Conditional_31_Conditional_6_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.form.controls.targetAccountNumber.hasError("required") ? 6 : -1);
  }
}
function TransferForm_Conditional_32_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "El beneficiario es obligatorio");
    \u0275\u0275elementEnd();
  }
}
function TransferForm_Conditional_32_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Indica el banco");
    \u0275\u0275elementEnd();
  }
}
function TransferForm_Conditional_32_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Indica el N\xB0 de cuenta");
    \u0275\u0275elementEnd();
  }
}
function TransferForm_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 12)(1, "mat-label");
    \u0275\u0275text(2, "Beneficiario");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 32);
    \u0275\u0275elementStart(4, "mat-icon", 16);
    \u0275\u0275text(5, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, TransferForm_Conditional_32_Conditional_6_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 17)(8, "mat-form-field", 33)(9, "mat-label");
    \u0275\u0275text(10, "Banco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 34);
    \u0275\u0275conditionalCreate(12, TransferForm_Conditional_32_Conditional_12_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-form-field", 33)(14, "mat-label");
    \u0275\u0275text(15, "N\xB0 de cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 35);
    \u0275\u0275conditionalCreate(17, TransferForm_Conditional_32_Conditional_17_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.form.controls.externalBeneficiaryName.hasError("required") ? 6 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.form.controls.externalBankName.hasError("required") ? 12 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.form.controls.externalAccountNumber.hasError("required") ? 17 : -1);
  }
}
function TransferForm_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "El monto es obligatorio");
    \u0275\u0275elementEnd();
  }
}
function TransferForm_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "El monto m\xEDnimo es S/ 1.00");
    \u0275\u0275elementEnd();
  }
}
function TransferForm_For_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("value", c_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r3);
  }
}
function TransferForm_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 27);
  }
}
function TransferForm_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Enviar ");
  }
}
var TransferForm = class _TransferForm {
  fb = inject(FormBuilder);
  accountService = inject(AccountService);
  transferService = inject(TransferService);
  router = inject(Router);
  snack = inject(MatSnackBar);
  currencies = CURRENCIES;
  typeLabel = ACCOUNT_TYPE_LABEL;
  statusLabel = ACCOUNT_STATUS_LABEL;
  sourceAccounts = signal([], ...ngDevMode ? [{ debugName: "sourceAccounts" }] : (
    /* istanbul ignore next */
    []
  ));
  type = signal("INTERNAL", ...ngDevMode ? [{ debugName: "type" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  submitting = signal(false, ...ngDevMode ? [{ debugName: "submitting" }] : (
    /* istanbul ignore next */
    []
  ));
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  form = this.fb.group({
    sourceAccountNumber: ["", [Validators.required]],
    amount: [null, [Validators.required, minAmountValidator(1)]],
    currency: ["PEN", [Validators.required]],
    targetAccountNumber: ["", [Validators.required]],
    externalBankName: [""],
    externalAccountNumber: [""],
    externalBeneficiaryName: [""]
  });
  constructor() {
    this.loadAccounts();
  }
  loadAccounts() {
    this.loading.set(true);
    this.accountService.listMine({ page: 0, size: 100, sort: "id" }).subscribe({
      next: (res) => {
        this.sourceAccounts.set(res.content);
        const firstActive = res.content.find((a) => a.status === "ACTIVE");
        if (firstActive) {
          this.form.controls.sourceAccountNumber.setValue(firstActive.accountNumber);
        }
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        this.errorMessage.set(apiErrorMessage(err, "No se pudieron cargar tus cuentas."));
      }
    });
  }
  setType(type) {
    this.type.set(type);
    const c = this.form.controls;
    const internal = type === "INTERNAL";
    c.targetAccountNumber.setValidators(internal ? [Validators.required] : []);
    c.externalBeneficiaryName.setValidators(internal ? [] : [Validators.required]);
    c.externalBankName.setValidators(internal ? [] : [Validators.required]);
    c.externalAccountNumber.setValidators(internal ? [] : [Validators.required]);
    [
      c.targetAccountNumber,
      c.externalBeneficiaryName,
      c.externalBankName,
      c.externalAccountNumber
    ].forEach((ctrl) => ctrl.updateValueAndValidity());
  }
  submit() {
    this.errorMessage.set("");
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const internal = this.type() === "INTERNAL";
    const body = __spreadValues({
      sourceAccountNumber: v.sourceAccountNumber,
      type: this.type(),
      amount: v.amount,
      currency: v.currency
    }, internal ? { targetAccountNumber: v.targetAccountNumber } : {
      externalBankName: v.externalBankName,
      externalAccountNumber: v.externalAccountNumber,
      externalBeneficiaryName: v.externalBeneficiaryName
    });
    this.submitting.set(true);
    this.transferService.create(body).subscribe({
      next: () => {
        this.snack.open("Transferencia enviada con \xE9xito.", "OK", { duration: 3e3 });
        this.router.navigateByUrl("/app/transfers");
      },
      error: (err) => {
        this.submitting.set(false);
        this.errorMessage.set(apiErrorMessage(err, "No se pudo realizar la transferencia."));
      }
    });
  }
  static \u0275fac = function TransferForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TransferForm)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransferForm, selectors: [["app-transfer-form"]], decls: 54, vars: 10, consts: [[1, "centered-page"], [1, "page-head"], [1, "page-title"], [1, "page-subtitle"], ["mode", "indeterminate"], ["appearance", "outlined", 1, "form-card", "transfer-form-card"], [3, "ngSubmit", "formGroup"], [1, "form-mensaje", "form-mensaje--error"], [1, "field-group-label"], ["hideSingleSelectionIndicator", "", 1, "type-toggle", 3, "change", "value"], ["value", "INTERNAL"], ["value", "EXTERNAL"], ["appearance", "outline", 1, "field-full"], ["formControlName", "sourceAccountNumber"], [3, "value", "disabled"], [3, "disabled"], ["matPrefix", ""], [1, "field-row"], ["appearance", "outline", 1, "amount-field"], ["matInput", "", "type", "number", "formControlName", "amount", "placeholder", "0.00", "min", "1"], ["matTextPrefix", ""], ["appearance", "outline", 1, "currency-field"], ["formControlName", "currency"], [3, "value"], [1, "form-card-actions"], ["mat-stroked-button", "", "routerLink", "/app/transfers"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["diameter", "20"], [1, "opt-account"], [1, "opt-number"], [1, "opt-meta"], ["matInput", "", "formControlName", "targetAccountNumber", "placeholder", "ACC-XXXX-000"], ["matInput", "", "formControlName", "externalBeneficiaryName", "placeholder", "Nombre del titular"], ["appearance", "outline"], ["matInput", "", "formControlName", "externalBankName", "placeholder", "BCP, Interbank\u2026"], ["matInput", "", "formControlName", "externalAccountNumber", "placeholder", "0000-0000-0000"]], template: function TransferForm_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Nueva transferencia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Env\xEDa dinero a otra cuenta de Pagoya o a un banco externo.");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, TransferForm_Conditional_6_Template, 1, 0, "mat-progress-bar", 4);
      \u0275\u0275elementStart(7, "mat-card", 5)(8, "form", 6);
      \u0275\u0275listener("ngSubmit", function TransferForm_Template_form_ngSubmit_8_listener() {
        return ctx.submit();
      });
      \u0275\u0275conditionalCreate(9, TransferForm_Conditional_9_Template, 2, 1, "div", 7);
      \u0275\u0275elementStart(10, "span", 8);
      \u0275\u0275text(11, "Tipo de transferencia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "mat-button-toggle-group", 9);
      \u0275\u0275listener("change", function TransferForm_Template_mat_button_toggle_group_change_12_listener($event) {
        return ctx.setType($event.value);
      });
      \u0275\u0275elementStart(13, "mat-button-toggle", 10)(14, "mat-icon");
      \u0275\u0275text(15, "swap_horiz");
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, " Interna ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "mat-button-toggle", 11)(18, "mat-icon");
      \u0275\u0275text(19, "account_balance");
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, " Externa ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "mat-form-field", 12)(22, "mat-label");
      \u0275\u0275text(23, "Cuenta de origen");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "mat-select", 13);
      \u0275\u0275repeaterCreate(25, TransferForm_For_26_Template, 8, 5, "mat-option", 14, _forTrack02, false, TransferForm_ForEmpty_27_Template, 2, 1, "mat-option", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "mat-icon", 16);
      \u0275\u0275text(29, "account_balance_wallet");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(30, TransferForm_Conditional_30_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(31, TransferForm_Conditional_31_Template, 7, 1, "mat-form-field", 12)(32, TransferForm_Conditional_32_Template, 18, 3);
      \u0275\u0275elementStart(33, "div", 17)(34, "mat-form-field", 18)(35, "mat-label");
      \u0275\u0275text(36, "Monto");
      \u0275\u0275elementEnd();
      \u0275\u0275element(37, "input", 19);
      \u0275\u0275elementStart(38, "span", 20);
      \u0275\u0275text(39, "S/\xA0");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(40, TransferForm_Conditional_40_Template, 2, 0, "mat-error")(41, TransferForm_Conditional_41_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "mat-form-field", 21)(43, "mat-label");
      \u0275\u0275text(44, "Moneda");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "mat-select", 22);
      \u0275\u0275repeaterCreate(46, TransferForm_For_47_Template, 2, 2, "mat-option", 23, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "div", 24)(49, "a", 25);
      \u0275\u0275text(50, "Cancelar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "button", 26);
      \u0275\u0275conditionalCreate(52, TransferForm_Conditional_52_Template, 1, 0, "mat-spinner", 27)(53, TransferForm_Conditional_53_Template, 1, 0);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loading() ? 6 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMessage() ? 9 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.type());
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.sourceAccounts());
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.form.controls.sourceAccountNumber.hasError("required") ? 30 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.type() === "INTERNAL" ? 31 : 32);
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.form.controls.amount.hasError("required") ? 40 : ctx.form.controls.amount.hasError("minAmount") ? 41 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.currencies);
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", ctx.submitting());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.submitting() ? 52 : 53);
    }
  }, dependencies: [
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    MinValidator,
    FormGroupDirective,
    FormControlName,
    RouterLink,
    MatCardModule,
    MatCard,
    MatButtonModule,
    MatButton,
    MatButtonToggleModule,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatIconModule,
    MatIcon,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatError,
    MatPrefix,
    MatInputModule,
    MatInput,
    MatSelectModule,
    MatSelect,
    MatOption,
    MatProgressBarModule,
    MatProgressBar,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    SolesPipe
  ], styles: ['\n.field-group-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n  margin-bottom: 8px;\n}\n.type-toggle[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n  width: 100%;\n  border-radius: var(--radius);\n  overflow: hidden;\n}\n.type-toggle[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n}\n.amount-field[_ngcontent-%COMP%] {\n  flex: 2;\n}\n.currency-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.opt-account[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.3;\n}\n.opt-number[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  letter-spacing: 0.5px;\n  font-size: 0.9rem;\n}\n.opt-meta[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\nmat-progress-bar[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  border-radius: 999px;\n}\n/*# sourceMappingURL=transfer-form.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransferForm, [{
    type: Component,
    args: [{ selector: "app-transfer-form", imports: [
      ReactiveFormsModule,
      RouterLink,
      MatCardModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      SolesPipe
    ], template: `<div class="centered-page">
<div class="page-head">
  <h1 class="page-title">Nueva transferencia</h1>
  <p class="page-subtitle">Env\xEDa dinero a otra cuenta de Pagoya o a un banco externo.</p>
</div>

@if (loading()) {
  <mat-progress-bar mode="indeterminate"></mat-progress-bar>
}

<mat-card appearance="outlined" class="form-card transfer-form-card">
  <form [formGroup]="form" (ngSubmit)="submit()">

    @if (errorMessage()) {
      <div class="form-mensaje form-mensaje--error">{{ errorMessage() }}</div>
    }

    <span class="field-group-label">Tipo de transferencia</span>
    <mat-button-toggle-group
      [value]="type()"
      (change)="setType($event.value)"
      class="type-toggle"
      hideSingleSelectionIndicator
    >
      <mat-button-toggle value="INTERNAL">
        <mat-icon>swap_horiz</mat-icon> Interna
      </mat-button-toggle>
      <mat-button-toggle value="EXTERNAL">
        <mat-icon>account_balance</mat-icon> Externa
      </mat-button-toggle>
    </mat-button-toggle-group>

    <mat-form-field appearance="outline" class="field-full">
      <mat-label>Cuenta de origen</mat-label>
      <mat-select formControlName="sourceAccountNumber">
        @for (acc of sourceAccounts(); track acc.id) {
          <mat-option [value]="acc.accountNumber" [disabled]="acc.status !== 'ACTIVE'">
            <span class="opt-account">
              <span class="opt-number">{{ acc.accountNumber }}</span>
              <span class="opt-meta">
                {{ typeLabel[acc.type] }} \xB7
                @if (acc.status === 'ACTIVE') {
                  {{ acc.balance | soles }}
                } @else {
                  {{ statusLabel[acc.status] }}
                }
              </span>
            </span>
          </mat-option>
        } @empty {
          <mat-option [disabled]="true">No tienes cuentas</mat-option>
        }
      </mat-select>
      <mat-icon matPrefix>account_balance_wallet</mat-icon>
      @if (form.controls.sourceAccountNumber.hasError('required')) {
        <mat-error>Elige una cuenta de origen</mat-error>
      }
    </mat-form-field>

    @if (type() === 'INTERNAL') {
      <mat-form-field appearance="outline" class="field-full">
        <mat-label>Cuenta destino</mat-label>
        <input matInput formControlName="targetAccountNumber" placeholder="ACC-XXXX-000" />
        <mat-icon matPrefix>person</mat-icon>
        @if (form.controls.targetAccountNumber.hasError('required')) {
          <mat-error>La cuenta destino es obligatoria</mat-error>
        }
      </mat-form-field>
    } @else {
      <mat-form-field appearance="outline" class="field-full">
        <mat-label>Beneficiario</mat-label>
        <input matInput formControlName="externalBeneficiaryName" placeholder="Nombre del titular" />
        <mat-icon matPrefix>person</mat-icon>
        @if (form.controls.externalBeneficiaryName.hasError('required')) {
          <mat-error>El beneficiario es obligatorio</mat-error>
        }
      </mat-form-field>

      <div class="field-row">
        <mat-form-field appearance="outline">
          <mat-label>Banco</mat-label>
          <input matInput formControlName="externalBankName" placeholder="BCP, Interbank\u2026" />
          @if (form.controls.externalBankName.hasError('required')) {
            <mat-error>Indica el banco</mat-error>
          }
        </mat-form-field>
        <mat-form-field appearance="outline">
          <mat-label>N\xB0 de cuenta</mat-label>
          <input matInput formControlName="externalAccountNumber" placeholder="0000-0000-0000" />
          @if (form.controls.externalAccountNumber.hasError('required')) {
            <mat-error>Indica el N\xB0 de cuenta</mat-error>
          }
        </mat-form-field>
      </div>
    }

    <div class="field-row">
      <mat-form-field appearance="outline" class="amount-field">
        <mat-label>Monto</mat-label>
        <input matInput type="number" formControlName="amount" placeholder="0.00" min="1" />
        <span matTextPrefix>S/&nbsp;</span>
        @if (form.controls.amount.hasError('required')) {
          <mat-error>El monto es obligatorio</mat-error>
        } @else if (form.controls.amount.hasError('minAmount')) {
          <mat-error>El monto m\xEDnimo es S/ 1.00</mat-error>
        }
      </mat-form-field>
      <mat-form-field appearance="outline" class="currency-field">
        <mat-label>Moneda</mat-label>
        <mat-select formControlName="currency">
          @for (c of currencies; track c) {
            <mat-option [value]="c">{{ c }}</mat-option>
          }
        </mat-select>
      </mat-form-field>
    </div>

    <div class="form-card-actions">
      <a mat-stroked-button routerLink="/app/transfers">Cancelar</a>
      <button mat-flat-button color="primary" type="submit" [disabled]="submitting()">
        @if (submitting()) {
          <mat-spinner diameter="20"></mat-spinner>
        } @else {
          Enviar
        }
      </button>
    </div>
  </form>
</mat-card>
</div>
`, styles: ['/* src/app/features/transfers/transfer-form/transfer-form.css */\n.field-group-label {\n  display: block;\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n  margin-bottom: 8px;\n}\n.type-toggle {\n  margin-bottom: 22px;\n  width: 100%;\n  border-radius: var(--radius);\n  overflow: hidden;\n}\n.type-toggle .mat-button-toggle {\n  flex: 1;\n  text-align: center;\n}\n.amount-field {\n  flex: 2;\n}\n.currency-field {\n  flex: 1;\n}\n.opt-account {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.3;\n}\n.opt-number {\n  font-family: "Roboto Mono", monospace;\n  letter-spacing: 0.5px;\n  font-size: 0.9rem;\n}\n.opt-meta {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\nmat-progress-bar {\n  margin-bottom: 16px;\n  border-radius: 999px;\n}\n/*# sourceMappingURL=transfer-form.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransferForm, { className: "TransferForm", filePath: "src/app/features/transfers/transfer-form/transfer-form.ts", lineNumber: 50 });
})();

// src/app/features/transfers/transfers.routes.ts
var TRANSFERS_ROUTES = [
  { path: "", component: TransferList },
  { path: "new", component: TransferForm }
];
export {
  TRANSFERS_ROUTES
};
//# sourceMappingURL=chunk-SN4HAMGD.js.map
