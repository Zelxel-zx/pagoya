import {
  CustomerService
} from "./chunk-LBY7AMU5.js";
import {
  TokenService
} from "./chunk-4G4H7P6W.js";
import {
  RouterLink
} from "./chunk-K7BMT7PF.js";
import {
  ACCOUNT_TYPE_LABEL,
  AccountService
} from "./chunk-HM2K47RH.js";
import {
  TRANSFER_STATUS_LABEL,
  TRANSFER_TYPE_LABEL,
  TransferService
} from "./chunk-5C5M26PA.js";
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
  SolesPipe
} from "./chunk-3NLNF65F.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-PXC5WPHP.js";
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
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CAYUHUBX.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/dashboard/dashboard.ts
function Dashboard_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Panel de administraci\xF3n de PagoYa ");
  }
}
function Dashboard_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Resumen de tu actividad ");
  }
}
function Dashboard_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 3);
  }
}
function Dashboard_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function Dashboard_Conditional_8_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-donut-chart", 15);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("data", ctx_r0.statusDonut());
  }
}
function Dashboard_Conditional_8_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1, "A\xFAn no hay transferencias registradas.");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "mat-card", 6)(2, "div", 7)(3, "mat-icon");
    \u0275\u0275text(4, "account_balance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 8)(6, "span", 9);
    \u0275\u0275text(7, "Cuentas totales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 10);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 11);
    \u0275\u0275text(11, "En toda la plataforma");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "mat-card", 6)(13, "div", 7)(14, "mat-icon");
    \u0275\u0275text(15, "savings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 8)(17, "span", 9);
    \u0275\u0275text(18, "Saldo acumulado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 10);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "soles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 11);
    \u0275\u0275text(23, "Suma de todas las cuentas");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "mat-card", 6)(25, "div", 7)(26, "mat-icon");
    \u0275\u0275text(27, "swap_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 8)(29, "span", 9);
    \u0275\u0275text(30, "Transferencias");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 10);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 11);
    \u0275\u0275text(34, "Registradas en total");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 12)(36, "mat-card", 13)(37, "h2", 14)(38, "mat-icon");
    \u0275\u0275text(39, "donut_large");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " Transferencias por estado");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(41, Dashboard_Conditional_8_Conditional_41_Template, 1, 1, "app-donut-chart", 15)(42, Dashboard_Conditional_8_Conditional_42_Template, 2, 0, "p", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 17)(44, "a", 18)(45, "mat-icon");
    \u0275\u0275text(46, "account_balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 19);
    \u0275\u0275text(48, "Reporte de cuentas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 20);
    \u0275\u0275text(50, "Resumen por tipo y estado.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "a", 21)(52, "mat-icon");
    \u0275\u0275text(53, "bar_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 19);
    \u0275\u0275text(55, "Reporte de transferencias");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 20);
    \u0275\u0275text(57, "Montos, estados y actividad diaria.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "a", 22)(59, "mat-icon");
    \u0275\u0275text(60, "smart_toy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 19);
    \u0275\u0275text(62, "Asistente IA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span", 20);
    \u0275\u0275text(64, "Consulta informaci\xF3n del sistema.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.totalAccounts());
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 4, ctx_r0.globalBalance()));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r0.totalTransfers());
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r0.statusDonut().length ? 41 : 42);
  }
}
function Dashboard_Conditional_9_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-donut-chart", 23);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("data", ctx_r0.balanceDonut());
  }
}
function Dashboard_Conditional_9_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1, "A\xFAn no tienes saldo en tus cuentas.");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_9_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1, "No hay transferencias recientes.");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_9_th_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 43);
    \u0275\u0275text(1, "Fecha");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_9_td_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 44);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, m_r2.createdAt, "dd/MM/yyyy HH:mm"));
  }
}
function Dashboard_Conditional_9_th_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 43);
    \u0275\u0275text(1, "Destino");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_9_td_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.destinationOf(m_r3));
  }
}
function Dashboard_Conditional_9_th_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 43);
    \u0275\u0275text(1, "Tipo");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_9_td_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.typeText(m_r4));
  }
}
function Dashboard_Conditional_9_th_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 45);
    \u0275\u0275text(1, "Monto");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_9_td_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "soles");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, m_r5.amount, m_r5.currency));
  }
}
function Dashboard_Conditional_9_tr_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 47);
  }
}
function Dashboard_Conditional_9_tr_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 48);
  }
}
function Dashboard_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "mat-card", 6)(2, "div", 7)(3, "mat-icon");
    \u0275\u0275text(4, "account_balance_wallet");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 8)(6, "span", 9);
    \u0275\u0275text(7, "Saldo total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 10);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "soles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 11);
    \u0275\u0275text(12, "En todas tus cuentas");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "mat-card", 6)(14, "div", 7)(15, "mat-icon");
    \u0275\u0275text(16, "account_balance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 8)(18, "span", 9);
    \u0275\u0275text(19, "Cuentas activas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 10);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 11);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "mat-card", 6)(25, "div", 7)(26, "mat-icon");
    \u0275\u0275text(27, "swap_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 8)(29, "span", 9);
    \u0275\u0275text(30, "Movimientos recientes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 10);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 11);
    \u0275\u0275text(34, "\xDAltimas transferencias");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 12)(36, "mat-card", 13)(37, "h2", 14)(38, "mat-icon");
    \u0275\u0275text(39, "donut_large");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " Distribuci\xF3n de saldo");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(41, Dashboard_Conditional_9_Conditional_41_Template, 1, 1, "app-donut-chart", 23)(42, Dashboard_Conditional_9_Conditional_42_Template, 2, 0, "p", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 17)(44, "a", 24)(45, "mat-icon");
    \u0275\u0275text(46, "send");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 19);
    \u0275\u0275text(48, "Nueva transferencia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 20);
    \u0275\u0275text(50, "Env\xEDa dinero a otra cuenta.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "a", 25)(52, "mat-icon");
    \u0275\u0275text(53, "add_card");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 19);
    \u0275\u0275text(55, "Agregar cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 20);
    \u0275\u0275text(57, "Registra una nueva cuenta.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "a", 26)(59, "mat-icon");
    \u0275\u0275text(60, "account_balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 19);
    \u0275\u0275text(62, "Mis cuentas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span", 20);
    \u0275\u0275text(64, "Revisa saldos y movimientos.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "a", 27)(66, "mat-icon");
    \u0275\u0275text(67, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "span", 19);
    \u0275\u0275text(69, "Mi perfil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "span", 20);
    \u0275\u0275text(71, "Actualiza tus datos.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(72, "mat-card", 28)(73, "div", 29)(74, "h2");
    \u0275\u0275text(75, "\xDAltimas transferencias");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "a", 30);
    \u0275\u0275text(77, "Ver todas");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(78, Dashboard_Conditional_9_Conditional_78_Template, 2, 0, "p", 16);
    \u0275\u0275elementStart(79, "div", 31)(80, "table", 32);
    \u0275\u0275elementContainerStart(81, 33);
    \u0275\u0275template(82, Dashboard_Conditional_9_th_82_Template, 2, 0, "th", 34)(83, Dashboard_Conditional_9_td_83_Template, 3, 4, "td", 35);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(84, 36);
    \u0275\u0275template(85, Dashboard_Conditional_9_th_85_Template, 2, 0, "th", 34)(86, Dashboard_Conditional_9_td_86_Template, 2, 1, "td", 35);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(87, 37);
    \u0275\u0275template(88, Dashboard_Conditional_9_th_88_Template, 2, 0, "th", 34)(89, Dashboard_Conditional_9_td_89_Template, 2, 1, "td", 35);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(90, 38);
    \u0275\u0275template(91, Dashboard_Conditional_9_th_91_Template, 2, 0, "th", 39)(92, Dashboard_Conditional_9_td_92_Template, 3, 4, "td", 40);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(93, Dashboard_Conditional_9_tr_93_Template, 1, 0, "tr", 41)(94, Dashboard_Conditional_9_tr_94_Template, 1, 0, "tr", 42);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 9, ctx_r0.totalBalance()));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r0.activeCount());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("de ", ctx_r0.accounts().length, " en total");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.movements().length);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r0.balanceDonut().length ? 41 : 42);
    \u0275\u0275advance(37);
    \u0275\u0275conditional(!ctx_r0.loading() && ctx_r0.movements().length === 0 ? 78 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("dataSource", ctx_r0.movements());
    \u0275\u0275advance(13);
    \u0275\u0275property("matHeaderRowDef", ctx_r0.columns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r0.columns);
  }
}
var ACCOUNT_PALETTE = ["#c0392b", "#1a5fb4", "#6c3fc4", "#1e7e34", "#e8a13a", "#0d9488"];
var STATUS_COLORS = {
  COMPLETED: "#1e7e34",
  PENDING: "#e8a13a",
  FAILED: "#c0392b"
};
var Dashboard = class _Dashboard {
  accountService = inject(AccountService);
  transferService = inject(TransferService);
  customerService = inject(CustomerService);
  tokens = inject(TokenService);
  isAdmin = this.tokens.role === "ADMIN";
  userName = signal("", ...ngDevMode ? [{ debugName: "userName" }] : (
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
  accounts = signal([], ...ngDevMode ? [{ debugName: "accounts" }] : (
    /* istanbul ignore next */
    []
  ));
  movements = signal([], ...ngDevMode ? [{ debugName: "movements" }] : (
    /* istanbul ignore next */
    []
  ));
  columns = ["date", "destination", "type", "amount"];
  totalBalance = computed(() => this.accounts().reduce((sum, a) => sum + a.balance, 0), ...ngDevMode ? [{ debugName: "totalBalance" }] : (
    /* istanbul ignore next */
    []
  ));
  activeCount = computed(() => this.accounts().filter((a) => a.status === "ACTIVE").length, ...ngDevMode ? [{ debugName: "activeCount" }] : (
    /* istanbul ignore next */
    []
  ));
  balanceDonut = computed(() => this.accounts().filter((a) => a.balance > 0).map((a, i) => ({
    label: `${ACCOUNT_TYPE_LABEL[a.type]} \xB7 ${a.accountNumber}`,
    value: a.balance,
    color: ACCOUNT_PALETTE[i % ACCOUNT_PALETTE.length]
  })), ...ngDevMode ? [{ debugName: "balanceDonut" }] : (
    /* istanbul ignore next */
    []
  ));
  accountSummary = signal([], ...ngDevMode ? [{ debugName: "accountSummary" }] : (
    /* istanbul ignore next */
    []
  ));
  transferStatus = signal([], ...ngDevMode ? [{ debugName: "transferStatus" }] : (
    /* istanbul ignore next */
    []
  ));
  totalAccounts = computed(() => this.accountSummary().reduce((s, r) => s + r.total, 0), ...ngDevMode ? [{ debugName: "totalAccounts" }] : (
    /* istanbul ignore next */
    []
  ));
  globalBalance = computed(() => this.accountSummary().reduce((s, r) => s + r.totalBalance, 0), ...ngDevMode ? [{ debugName: "globalBalance" }] : (
    /* istanbul ignore next */
    []
  ));
  totalTransfers = computed(() => this.transferStatus().reduce((s, r) => s + r.total, 0), ...ngDevMode ? [{ debugName: "totalTransfers" }] : (
    /* istanbul ignore next */
    []
  ));
  statusDonut = computed(() => this.transferStatus().map((s) => ({
    label: TRANSFER_STATUS_LABEL[s.status] ?? s.status,
    value: s.total,
    color: STATUS_COLORS[s.status] ?? "#999"
  })), ...ngDevMode ? [{ debugName: "statusDonut" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    if (this.isAdmin) {
      this.userName.set("Administrador");
      this.loadAdminData();
    } else {
      this.loadName();
      this.loadCustomerData();
    }
  }
  loadName() {
    this.customerService.findMe().subscribe({
      next: (c) => this.userName.set(c.fullName.split(" ")[0]),
      error: () => this.userName.set("")
    });
  }
  loadCustomerData() {
    this.loading.set(true);
    this.errorMessage.set("");
    this.accountService.listMine({ page: 0, size: 100, sort: "id" }).subscribe({
      next: (res) => {
        this.accounts.set(res.content);
        this.loading.set(false);
        this.loadMovements(res.content);
      },
      error: (err) => {
        this.loading.set(false);
        this.errorMessage.set(apiErrorMessage(err, "No se pudo cargar tu informaci\xF3n."));
      }
    });
  }
  loadMovements(accounts) {
    if (!accounts.length) {
      this.movements.set([]);
      return;
    }
    forkJoin(accounts.map((a) => this.transferService.findByAccount(a.accountNumber, {
      page: 0,
      size: 5,
      sort: "createdAt,desc"
    }))).subscribe({
      next: (pages) => {
        const merged = /* @__PURE__ */ new Map();
        for (const page of pages) {
          for (const t of page.content)
            merged.set(t.id, t);
        }
        const latest = [...merged.values()].sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, 5);
        this.movements.set(latest);
      },
      error: () => this.movements.set([])
    });
  }
  loadAdminData() {
    this.loading.set(true);
    this.errorMessage.set("");
    this.accountService.summary().subscribe({
      next: (data) => {
        this.accountSummary.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        this.errorMessage.set(apiErrorMessage(err, "No se pudo cargar el resumen."));
      }
    });
    this.transferService.reportByStatus().subscribe({
      next: (data) => this.transferStatus.set(data),
      error: () => this.transferStatus.set([])
    });
  }
  destinationOf(t) {
    return t.type === "INTERNAL" ? t.targetAccountNumber ?? "\u2014" : `${t.externalBeneficiaryName} \xB7 ${t.externalBankName}`;
  }
  typeText(t) {
    return TRANSFER_TYPE_LABEL[t.type];
  }
  static \u0275fac = function Dashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dashboard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Dashboard, selectors: [["app-dashboard"]], decls: 10, vars: 5, consts: [[1, "page-head"], [1, "page-title"], [1, "page-subtitle"], ["mode", "indeterminate"], [1, "form-mensaje", "form-mensaje--error"], [1, "stats"], ["appearance", "outlined", 1, "stat"], [1, "stat-icon"], [1, "stat-body"], [1, "stat-label"], [1, "stat-value"], [1, "stat-hint"], [1, "dash-grid"], ["appearance", "outlined", 1, "chart-card"], [1, "card-title"], ["caption", "Transf.", 3, "data"], [1, "card-empty"], [1, "quick-actions"], ["routerLink", "/app/reports/accounts", 1, "quick"], [1, "quick-title"], [1, "quick-desc"], ["routerLink", "/app/reports/transfers", 1, "quick"], ["routerLink", "/app/assistant", 1, "quick"], ["caption", "Saldo", 3, "data"], ["routerLink", "/app/transfers/new", 1, "quick"], ["routerLink", "/app/accounts/new", 1, "quick"], ["routerLink", "/app/accounts", 1, "quick"], ["routerLink", "/app/profile", 1, "quick"], ["appearance", "outlined", 1, "recent"], [1, "recent-head"], ["mat-button", "", "routerLink", "/app/transfers"], [1, "recent-table-wrap"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "date"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "destination"], ["matColumnDef", "type"], ["matColumnDef", "amount"], ["mat-header-cell", "", "class", "num", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "num", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", 1, "num"], ["mat-cell", "", 1, "num"], ["mat-header-row", ""], ["mat-row", ""]], template: function Dashboard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275conditionalCreate(4, Dashboard_Conditional_4_Template, 1, 0)(5, Dashboard_Conditional_5_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, Dashboard_Conditional_6_Template, 1, 0, "mat-progress-bar", 3);
      \u0275\u0275conditionalCreate(7, Dashboard_Conditional_7_Template, 2, 1, "div", 4);
      \u0275\u0275conditionalCreate(8, Dashboard_Conditional_8_Template, 65, 6)(9, Dashboard_Conditional_9_Template, 95, 11);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Hola", ctx.userName() ? " " + ctx.userName() : "");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isAdmin ? 4 : 5);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMessage() ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isAdmin ? 8 : 9);
    }
  }, dependencies: [
    RouterLink,
    MatCardModule,
    MatCard,
    MatIconModule,
    MatIcon,
    MatButtonModule,
    MatButton,
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
    MatProgressBarModule,
    MatProgressBar,
    DonutChart,
    DatePipe,
    SolesPipe
  ], styles: ["\n.stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 18px;\n  margin-bottom: 22px;\n}\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 14px;\n  padding: 18px 20px;\n  border-radius: var(--radius);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: var(--color-primary-light);\n  color: var(--color-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.stat-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.stat-hint[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--color-text-muted);\n}\nmat-progress-bar[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  border-radius: 999px;\n}\n.dash-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(280px, 360px) 1fr;\n  gap: 20px;\n  align-items: start;\n  margin-bottom: 22px;\n}\n.chart-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: var(--radius);\n}\n.card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.05rem;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n.card-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.card-empty[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  text-align: center;\n  padding: 24px 0;\n}\n.quick-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}\n@media (max-width: 820px) {\n  .dash-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.quick[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  background: var(--color-bg);\n  border: 1px solid var(--color-border);\n  border-left: 4px solid var(--color-primary);\n  border-radius: var(--radius);\n  padding: 18px 20px;\n  text-decoration: none;\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\n.quick[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow);\n  text-decoration: none;\n}\n.quick[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  margin-bottom: 4px;\n}\n.quick-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-text);\n}\n.quick-desc[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--color-text-muted);\n}\n.recent[_ngcontent-%COMP%] {\n  padding: 8px 0 0;\n  border-radius: var(--radius);\n}\n.recent[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  min-width: 520px;\n}\n.recent-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.recent-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 20px;\n}\n.recent-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 600;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.num[_ngcontent-%COMP%] {\n  text-align: right;\n}\ntd.num[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n}\n/*# sourceMappingURL=dashboard.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dashboard, [{
    type: Component,
    args: [{ selector: "app-dashboard", imports: [
      DatePipe,
      RouterLink,
      MatCardModule,
      MatIconModule,
      MatButtonModule,
      MatTableModule,
      MatProgressBarModule,
      SolesPipe,
      DonutChart
    ], template: `<div class="page-head">
  <h1 class="page-title">Hola{{ userName() ? ' ' + userName() : '' }}</h1>
  <p class="page-subtitle">
    @if (isAdmin) { Panel de administraci\xF3n de PagoYa } @else { Resumen de tu actividad }
  </p>
</div>

@if (loading()) {
  <mat-progress-bar mode="indeterminate"></mat-progress-bar>
}

@if (errorMessage()) {
  <div class="form-mensaje form-mensaje--error">{{ errorMessage() }}</div>
}

@if (isAdmin) {
  <!-- \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Vista de administrador \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="stats">
    <mat-card appearance="outlined" class="stat">
      <div class="stat-icon"><mat-icon>account_balance</mat-icon></div>
      <div class="stat-body">
        <span class="stat-label">Cuentas totales</span>
        <span class="stat-value">{{ totalAccounts() }}</span>
        <span class="stat-hint">En toda la plataforma</span>
      </div>
    </mat-card>
    <mat-card appearance="outlined" class="stat">
      <div class="stat-icon"><mat-icon>savings</mat-icon></div>
      <div class="stat-body">
        <span class="stat-label">Saldo acumulado</span>
        <span class="stat-value">{{ globalBalance() | soles }}</span>
        <span class="stat-hint">Suma de todas las cuentas</span>
      </div>
    </mat-card>
    <mat-card appearance="outlined" class="stat">
      <div class="stat-icon"><mat-icon>swap_horiz</mat-icon></div>
      <div class="stat-body">
        <span class="stat-label">Transferencias</span>
        <span class="stat-value">{{ totalTransfers() }}</span>
        <span class="stat-hint">Registradas en total</span>
      </div>
    </mat-card>
  </div>

  <div class="dash-grid">
    <mat-card appearance="outlined" class="chart-card">
      <h2 class="card-title"><mat-icon>donut_large</mat-icon> Transferencias por estado</h2>
      @if (statusDonut().length) {
        <app-donut-chart [data]="statusDonut()" caption="Transf." />
      } @else {
        <p class="card-empty">A\xFAn no hay transferencias registradas.</p>
      }
    </mat-card>

    <div class="quick-actions">
      <a routerLink="/app/reports/accounts" class="quick">
        <mat-icon>account_balance</mat-icon>
        <span class="quick-title">Reporte de cuentas</span>
        <span class="quick-desc">Resumen por tipo y estado.</span>
      </a>
      <a routerLink="/app/reports/transfers" class="quick">
        <mat-icon>bar_chart</mat-icon>
        <span class="quick-title">Reporte de transferencias</span>
        <span class="quick-desc">Montos, estados y actividad diaria.</span>
      </a>
      <a routerLink="/app/assistant" class="quick">
        <mat-icon>smart_toy</mat-icon>
        <span class="quick-title">Asistente IA</span>
        <span class="quick-desc">Consulta informaci\xF3n del sistema.</span>
      </a>
    </div>
  </div>
} @else {
  <!-- \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Vista de cliente \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="stats">
    <mat-card appearance="outlined" class="stat">
      <div class="stat-icon"><mat-icon>account_balance_wallet</mat-icon></div>
      <div class="stat-body">
        <span class="stat-label">Saldo total</span>
        <span class="stat-value">{{ totalBalance() | soles }}</span>
        <span class="stat-hint">En todas tus cuentas</span>
      </div>
    </mat-card>
    <mat-card appearance="outlined" class="stat">
      <div class="stat-icon"><mat-icon>account_balance</mat-icon></div>
      <div class="stat-body">
        <span class="stat-label">Cuentas activas</span>
        <span class="stat-value">{{ activeCount() }}</span>
        <span class="stat-hint">de {{ accounts().length }} en total</span>
      </div>
    </mat-card>
    <mat-card appearance="outlined" class="stat">
      <div class="stat-icon"><mat-icon>swap_horiz</mat-icon></div>
      <div class="stat-body">
        <span class="stat-label">Movimientos recientes</span>
        <span class="stat-value">{{ movements().length }}</span>
        <span class="stat-hint">\xDAltimas transferencias</span>
      </div>
    </mat-card>
  </div>

  <div class="dash-grid">
    <mat-card appearance="outlined" class="chart-card">
      <h2 class="card-title"><mat-icon>donut_large</mat-icon> Distribuci\xF3n de saldo</h2>
      @if (balanceDonut().length) {
        <app-donut-chart [data]="balanceDonut()" caption="Saldo" />
      } @else {
        <p class="card-empty">A\xFAn no tienes saldo en tus cuentas.</p>
      }
    </mat-card>

    <div class="quick-actions">
      <a routerLink="/app/transfers/new" class="quick">
        <mat-icon>send</mat-icon>
        <span class="quick-title">Nueva transferencia</span>
        <span class="quick-desc">Env\xEDa dinero a otra cuenta.</span>
      </a>
      <a routerLink="/app/accounts/new" class="quick">
        <mat-icon>add_card</mat-icon>
        <span class="quick-title">Agregar cuenta</span>
        <span class="quick-desc">Registra una nueva cuenta.</span>
      </a>
      <a routerLink="/app/accounts" class="quick">
        <mat-icon>account_balance</mat-icon>
        <span class="quick-title">Mis cuentas</span>
        <span class="quick-desc">Revisa saldos y movimientos.</span>
      </a>
      <a routerLink="/app/profile" class="quick">
        <mat-icon>person</mat-icon>
        <span class="quick-title">Mi perfil</span>
        <span class="quick-desc">Actualiza tus datos.</span>
      </a>
    </div>
  </div>

  <mat-card appearance="outlined" class="recent">
    <div class="recent-head">
      <h2>\xDAltimas transferencias</h2>
      <a mat-button routerLink="/app/transfers">Ver todas</a>
    </div>

    @if (!loading() && movements().length === 0) {
      <p class="card-empty">No hay transferencias recientes.</p>
    }

    <div class="recent-table-wrap">
    <table mat-table [dataSource]="movements()">
      <ng-container matColumnDef="date">
        <th mat-header-cell *matHeaderCellDef>Fecha</th>
        <td mat-cell *matCellDef="let m">{{ m.createdAt | date: 'dd/MM/yyyy HH:mm' }}</td>
      </ng-container>
      <ng-container matColumnDef="destination">
        <th mat-header-cell *matHeaderCellDef>Destino</th>
        <td mat-cell *matCellDef="let m">{{ destinationOf(m) }}</td>
      </ng-container>
      <ng-container matColumnDef="type">
        <th mat-header-cell *matHeaderCellDef>Tipo</th>
        <td mat-cell *matCellDef="let m">{{ typeText(m) }}</td>
      </ng-container>
      <ng-container matColumnDef="amount">
        <th mat-header-cell *matHeaderCellDef class="num">Monto</th>
        <td mat-cell *matCellDef="let m" class="num">{{ m.amount | soles: m.currency }}</td>
      </ng-container>
      <tr mat-header-row *matHeaderRowDef="columns"></tr>
      <tr mat-row *matRowDef="let row; columns: columns"></tr>
    </table>
    </div>
  </mat-card>
}
`, styles: ["/* src/app/features/dashboard/dashboard.css */\n.stats {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 18px;\n  margin-bottom: 22px;\n}\n.stat {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 14px;\n  padding: 18px 20px;\n  border-radius: var(--radius);\n}\n.stat-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: var(--color-primary-light);\n  color: var(--color-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.stat-body {\n  display: flex;\n  flex-direction: column;\n}\n.stat-label {\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n}\n.stat-value {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.stat-hint {\n  font-size: 0.8rem;\n  color: var(--color-text-muted);\n}\nmat-progress-bar {\n  margin-bottom: 16px;\n  border-radius: 999px;\n}\n.dash-grid {\n  display: grid;\n  grid-template-columns: minmax(280px, 360px) 1fr;\n  gap: 20px;\n  align-items: start;\n  margin-bottom: 22px;\n}\n.chart-card {\n  padding: 20px;\n  border-radius: var(--radius);\n}\n.card-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.05rem;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n.card-title mat-icon {\n  color: var(--color-primary);\n}\n.card-empty {\n  color: var(--color-text-muted);\n  text-align: center;\n  padding: 24px 0;\n}\n.quick-actions {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}\n@media (max-width: 820px) {\n  .dash-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.quick {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  background: var(--color-bg);\n  border: 1px solid var(--color-border);\n  border-left: 4px solid var(--color-primary);\n  border-radius: var(--radius);\n  padding: 18px 20px;\n  text-decoration: none;\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\n.quick:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow);\n  text-decoration: none;\n}\n.quick mat-icon {\n  color: var(--color-primary);\n  margin-bottom: 4px;\n}\n.quick-title {\n  font-weight: 600;\n  color: var(--color-text);\n}\n.quick-desc {\n  font-size: 0.85rem;\n  color: var(--color-text-muted);\n}\n.recent {\n  padding: 8px 0 0;\n  border-radius: var(--radius);\n}\n.recent table {\n  min-width: 520px;\n}\n.recent-table-wrap {\n  overflow-x: auto;\n}\n.recent-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 20px;\n}\n.recent-head h2 {\n  font-size: 1.05rem;\n  font-weight: 600;\n}\ntable {\n  width: 100%;\n}\n.num {\n  text-align: right;\n}\ntd.num {\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n}\n/*# sourceMappingURL=dashboard.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Dashboard, { className: "Dashboard", filePath: "src/app/features/dashboard/dashboard.ts", lineNumber: 49 });
})();
export {
  Dashboard
};
//# sourceMappingURL=chunk-HYZKNBFB.js.map
