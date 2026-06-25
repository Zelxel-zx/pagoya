import {
  AuthService
} from "./chunk-AEKBUK66.js";
import {
  CustomerService
} from "./chunk-LBY7AMU5.js";
import {
  TokenService
} from "./chunk-4G4H7P6W.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  provideRouter
} from "./chunk-K7BMT7PF.js";
import {
  MatSnackBar
} from "./chunk-2OVKITJA.js";
import "./chunk-YP26LRAW.js";
import {
  bootstrapApplication,
  provideHttpClient,
  withInterceptors
} from "./chunk-FDUTTXTA.js";
import {
  Component,
  DestroyRef,
  RuntimeError,
  assertInInjectionContext,
  assertNotInReactiveContext,
  computed,
  filter,
  inject,
  map,
  provideBrowserGlobalErrorListeners,
  setClassMetadata,
  signal,
  startWith,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-CAYUHUBX.js";
import {
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
/**
 * @license Angular v21.2.14
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
function toSignal(source, options) {
  typeof ngDevMode !== "undefined" && ngDevMode && assertNotInReactiveContext(toSignal, "Invoking `toSignal` causes new subscriptions every time. Consider moving `toSignal` outside of the reactive context and read the signal value where needed.");
  const requiresCleanup = !options?.manualCleanup;
  if (ngDevMode && requiresCleanup && !options?.injector) {
    assertInInjectionContext(toSignal);
  }
  const cleanupRef = requiresCleanup ? options?.injector?.get(DestroyRef) ?? inject(DestroyRef) : null;
  const equal = makeToSignalEqual(options?.equal);
  let state;
  if (options?.requireSync) {
    state = signal({
      kind: 0
    }, __spreadValues({
      equal
    }, ngDevMode ? createDebugNameObject(options?.debugName, "state") : void 0));
  } else {
    state = signal({
      kind: 1,
      value: options?.initialValue
    }, __spreadValues({
      equal
    }, ngDevMode ? createDebugNameObject(options?.debugName, "state") : void 0));
  }
  let destroyUnregisterFn;
  const sub = source.subscribe({
    next: (value) => state.set({
      kind: 1,
      value
    }),
    error: (error) => {
      state.set({
        kind: 2,
        error
      });
      destroyUnregisterFn?.();
    },
    complete: () => {
      destroyUnregisterFn?.();
    }
  });
  if (options?.requireSync && state().kind === 0) {
    throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
  }
  destroyUnregisterFn = cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
  return computed(() => {
    const current = state();
    switch (current.kind) {
      case 1:
        return current.value;
      case 2:
        throw current.error;
      case 0:
        throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
    }
  }, __spreadValues({
    equal: options?.equal
  }, ngDevMode ? createDebugNameObject(options?.debugName, "source") : void 0));
}
function makeToSignalEqual(userEquality = Object.is) {
  return (a, b) => a.kind === 1 && b.kind === 1 && userEquality(a.value, b.value);
}
function createDebugNameObject(toSignalDebugName, internalSignalDebugName) {
  return {
    debugName: `toSignal${toSignalDebugName ? "#" + toSignalDebugName : ""}.${internalSignalDebugName}`
  };
}

// src/app/shared/layouts/main-layout/main-layout.ts
function MainLayout_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div", 7);
    \u0275\u0275elementStart(1, "span", 8);
    \u0275\u0275text(2, "Operaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 22);
    \u0275\u0275listener("click", function MainLayout_Conditional_10_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275text(4, " Cuentas ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 23);
    \u0275\u0275listener("click", function MainLayout_Conditional_10_Template_a_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275text(6, " Transferencias ");
    \u0275\u0275elementEnd();
  }
}
function MainLayout_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div", 7);
    \u0275\u0275elementStart(1, "span", 8);
    \u0275\u0275text(2, "Reportes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 24);
    \u0275\u0275listener("click", function MainLayout_Conditional_11_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275text(4, " Cuentas ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 25);
    \u0275\u0275listener("click", function MainLayout_Conditional_11_Template_a_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275text(6, " Transferencias ");
    \u0275\u0275elementEnd();
  }
}
function MainLayout_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 26);
    \u0275\u0275listener("click", function MainLayout_Conditional_19_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275text(1, " Perfil ");
    \u0275\u0275elementEnd();
  }
}
var CRUMBS = {
  "/app/dashboard": "Inicio",
  "/app/accounts": "Cuentas",
  "/app/accounts/new": "Cuentas / Nueva",
  "/app/transfers": "Transferencias",
  "/app/transfers/new": "Transferencias / Nueva",
  "/app/reports/accounts": "Reportes / Cuentas",
  "/app/reports/transfers": "Reportes / Transferencias",
  "/app/assistant": "Asistente IA",
  "/app/profile": "Perfil",
  "/app/profile/edit": "Perfil / Editar"
};
var MainLayout = class _MainLayout {
  router = inject(Router);
  auth = inject(AuthService);
  tokens = inject(TokenService);
  customerService = inject(CustomerService);
  sidebarOpen = false;
  isAdmin = this.tokens.role === "ADMIN";
  userName = signal(this.tokens.email ?? "Usuario", ...ngDevMode ? [{ debugName: "userName" }] : (
    /* istanbul ignore next */
    []
  ));
  userInitials = signal("U", ...ngDevMode ? [{ debugName: "userInitials" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    if (this.isAdmin) {
      this.userName.set("Administrador");
      this.userInitials.set("AD");
      return;
    }
    this.customerService.findMe().subscribe({
      next: (c) => {
        this.userName.set(c.fullName);
        this.userInitials.set(this.initialsOf(c.fullName));
      },
      error: () => {
      }
    });
  }
  initialsOf(name) {
    return name.split(" ").filter(Boolean).map((p) => p[0]).slice(0, 2).join("").toUpperCase() || "U";
  }
  crumb = toSignal(this.router.events.pipe(filter((e) => e instanceof NavigationEnd), map((e) => this.labelFor(e.urlAfterRedirects)), startWith(this.labelFor(this.router.url))), { initialValue: "Inicio" });
  labelFor(url) {
    const clean = url.split("?")[0].split("#")[0];
    return CRUMBS[clean] ?? "Inicio";
  }
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  closeSidebar() {
    this.sidebarOpen = false;
  }
  logout() {
    this.auth.logout();
    this.router.navigateByUrl("/auth/login");
  }
  static \u0275fac = function MainLayout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MainLayout)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainLayout, selectors: [["app-main-layout"]], decls: 37, vars: 8, consts: [[1, "layout"], [1, "sidebar"], [1, "sidebar-brand"], [1, "brand-name"], [1, "brand-accent"], [1, "sidebar-nav"], ["routerLink", "/app/dashboard", "routerLinkActive", "active", 3, "click"], [1, "nav-separator"], [1, "nav-group-label"], ["routerLink", "/app/assistant", "routerLinkActive", "active", 3, "click"], [1, "sidebar-bottom"], ["routerLink", "/app/profile", "routerLinkActive", "active"], ["type", "button", 1, "nav-logout", 3, "click"], [1, "main-area"], [1, "topbar"], ["type", "button", "aria-label", "Abrir men\xFA", 1, "menu-toggle", 3, "click"], [1, "crumb"], [1, "user"], [1, "user-name"], [1, "avatar"], [1, "content"], [1, "app-footer"], ["routerLink", "/app/accounts", "routerLinkActive", "active", 3, "click"], ["routerLink", "/app/transfers", "routerLinkActive", "active", 3, "click"], ["routerLink", "/app/reports/accounts", "routerLinkActive", "active", 3, "click"], ["routerLink", "/app/reports/transfers", "routerLinkActive", "active", 3, "click"], ["routerLink", "/app/profile", "routerLinkActive", "active", 3, "click"]], template: function MainLayout_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "Pago");
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "Ya");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "nav", 5)(8, "a", 6);
      \u0275\u0275listener("click", function MainLayout_Template_a_click_8_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275text(9, " Dashboard ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(10, MainLayout_Conditional_10_Template, 7, 0);
      \u0275\u0275conditionalCreate(11, MainLayout_Conditional_11_Template, 7, 0);
      \u0275\u0275element(12, "div", 7);
      \u0275\u0275elementStart(13, "span", 8);
      \u0275\u0275text(14, "Asistente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "a", 9);
      \u0275\u0275listener("click", function MainLayout_Template_a_click_15_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275text(16, " Asistente IA ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 10);
      \u0275\u0275element(18, "div", 7);
      \u0275\u0275conditionalCreate(19, MainLayout_Conditional_19_Template, 2, 0, "a", 11);
      \u0275\u0275elementStart(20, "button", 12);
      \u0275\u0275listener("click", function MainLayout_Template_button_click_20_listener() {
        return ctx.logout();
      });
      \u0275\u0275text(21, " Cerrar sesi\xF3n ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 13)(23, "header", 14)(24, "button", 15);
      \u0275\u0275listener("click", function MainLayout_Template_button_click_24_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275text(25, " \u2630 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "span", 16);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 17)(29, "span", 18);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "span", 19);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "main", 20);
      \u0275\u0275element(34, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "footer", 21);
      \u0275\u0275text(36, "\xA9 2026 PagoYa");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.sidebarOpen);
      \u0275\u0275advance(9);
      \u0275\u0275conditional(!ctx.isAdmin ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isAdmin ? 11 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275conditional(!ctx.isAdmin ? 19 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.crumb());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.userName());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.userInitials());
    }
  }, dependencies: [RouterLink, RouterLinkActive, RouterOutlet], styles: ["\n.layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  max-width: 100%;\n  overflow-x: hidden;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 240px;\n  min-width: 240px;\n  background: var(--sidebar-bg);\n  color: var(--sidebar-tx);\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.25s ease;\n}\n.sidebar-brand[_ngcontent-%COMP%] {\n  padding: 18px 20px 22px;\n  border-bottom: 1px solid #2c2e34;\n}\n.brand-name[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 700;\n  font-size: 1.3rem;\n  letter-spacing: 0.5px;\n}\n.brand-name[_ngcontent-%COMP%]   .brand-accent[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 16px 12px;\n  gap: 2px;\n  flex: 1;\n}\n.sidebar-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0 12px 20px;\n  gap: 2px;\n}\n.nav-separator[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #2c2e34;\n  margin: 8px 4px;\n}\n.nav-group-label[_ngcontent-%COMP%] {\n  font-size: 0.70rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--sidebar-mut);\n  padding: 4px 12px 2px;\n}\n.sidebar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.sidebar-bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.nav-logout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 9px 12px;\n  border-radius: var(--radius-sm);\n  color: var(--sidebar-tx);\n  text-decoration: none;\n  font-size: 0.92rem;\n  font-weight: 500;\n  transition: background 0.15s, color 0.15s;\n  cursor: pointer;\n}\n.nav-logout[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  width: 100%;\n  text-align: left;\n  font-family: inherit;\n}\n.sidebar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.sidebar-bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.nav-logout[_ngcontent-%COMP%]:hover {\n  background: #2c2e34;\n  color: #fff;\n  text-decoration: none;\n}\n.sidebar-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], \n.sidebar-bottom[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: #fff;\n  font-weight: 600;\n}\n.main-area[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  max-width: 100%;\n}\n.topbar[_ngcontent-%COMP%] {\n  min-height: 52px;\n  background: var(--color-bg);\n  border-bottom: 1px solid var(--color-border);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 0 var(--spacing-lg);\n}\n.menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n  background: transparent;\n  border: none;\n  font-size: 1.4rem;\n  cursor: pointer;\n  color: var(--color-text);\n  padding: 4px 8px;\n  border-radius: var(--radius-sm);\n}\n.crumb[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: 0.88rem;\n  margin-right: auto;\n}\n.user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: var(--color-text-2);\n  font-size: 0.9rem;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: var(--color-primary-light);\n  color: var(--color-primary);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.78rem;\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  max-width: 100%;\n  overflow-x: hidden;\n  padding: var(--spacing-lg) var(--spacing);\n  background: var(--color-surface);\n}\n.app-footer[_ngcontent-%COMP%] {\n  padding: 16px var(--spacing-lg);\n  border-top: 1px solid var(--color-border);\n  background: var(--color-bg);\n  color: var(--color-text-muted);\n  font-size: 0.82rem;\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    z-index: 200;\n    transform: translateX(-100%);\n  }\n  .sidebar.open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .menu-toggle[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .main-area[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=main-layout.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainLayout, [{
    type: Component,
    args: [{ selector: "app-main-layout", imports: [RouterLink, RouterLinkActive, RouterOutlet], template: '<div class="layout">\n  <aside class="sidebar" [class.open]="sidebarOpen">\n    <div class="sidebar-brand">\n      <span class="brand-name">Pago<span class="brand-accent">Ya</span></span>\n    </div>\n\n    <nav class="sidebar-nav">\n\n      <a routerLink="/app/dashboard" routerLinkActive="active" (click)="closeSidebar()">\n        Dashboard\n      </a>\n\n      @if (!isAdmin) {\n        <div class="nav-separator"></div>\n\n        <span class="nav-group-label">Operaciones</span>\n        <a routerLink="/app/accounts" routerLinkActive="active" (click)="closeSidebar()">\n          Cuentas\n        </a>\n        <a routerLink="/app/transfers" routerLinkActive="active" (click)="closeSidebar()">\n          Transferencias\n        </a>\n      }\n\n      @if (isAdmin) {\n        <div class="nav-separator"></div>\n\n        <span class="nav-group-label">Reportes</span>\n        <a routerLink="/app/reports/accounts" routerLinkActive="active" (click)="closeSidebar()">\n          Cuentas\n        </a>\n        <a routerLink="/app/reports/transfers" routerLinkActive="active" (click)="closeSidebar()">\n         Transferencias\n        </a>\n      }\n\n      <div class="nav-separator"></div>\n\n      <span class="nav-group-label">Asistente</span>\n      <a routerLink="/app/assistant" routerLinkActive="active" (click)="closeSidebar()">\n        Asistente IA\n      </a>\n\n    </nav>\n\n    <div class="sidebar-bottom">\n      <div class="nav-separator"></div>\n      @if (!isAdmin) {\n        <a routerLink="/app/profile" routerLinkActive="active" (click)="closeSidebar()">\n          Perfil\n        </a>\n      }\n      <button class="nav-logout" type="button" (click)="logout()">\n        Cerrar sesi\xF3n\n      </button>\n    </div>\n  </aside>\n\n  <div class="main-area">\n    <header class="topbar">\n      <button class="menu-toggle" type="button" aria-label="Abrir men\xFA" (click)="toggleSidebar()">\n        &#9776;\n      </button>\n      <span class="crumb">{{ crumb() }}</span>\n      <div class="user">\n        <span class="user-name">{{ userName() }}</span>\n        <span class="avatar">{{ userInitials() }}</span>\n      </div>\n    </header>\n\n    <main class="content">\n      <router-outlet />\n    </main>\n\n    <footer class="app-footer">\xA9 2026 PagoYa</footer>\n  </div>\n</div>\n', styles: ["/* src/app/shared/layouts/main-layout/main-layout.css */\n.layout {\n  display: flex;\n  min-height: 100vh;\n  max-width: 100%;\n  overflow-x: hidden;\n}\n.sidebar {\n  width: 240px;\n  min-width: 240px;\n  background: var(--sidebar-bg);\n  color: var(--sidebar-tx);\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.25s ease;\n}\n.sidebar-brand {\n  padding: 18px 20px 22px;\n  border-bottom: 1px solid #2c2e34;\n}\n.brand-name {\n  color: #fff;\n  font-weight: 700;\n  font-size: 1.3rem;\n  letter-spacing: 0.5px;\n}\n.brand-name .brand-accent {\n  color: var(--color-primary);\n}\n.sidebar-nav {\n  display: flex;\n  flex-direction: column;\n  padding: 16px 12px;\n  gap: 2px;\n  flex: 1;\n}\n.sidebar-bottom {\n  display: flex;\n  flex-direction: column;\n  padding: 0 12px 20px;\n  gap: 2px;\n}\n.nav-separator {\n  height: 1px;\n  background: #2c2e34;\n  margin: 8px 4px;\n}\n.nav-group-label {\n  font-size: 0.70rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--sidebar-mut);\n  padding: 4px 12px 2px;\n}\n.sidebar-nav a,\n.sidebar-bottom a,\n.nav-logout {\n  display: flex;\n  align-items: center;\n  padding: 9px 12px;\n  border-radius: var(--radius-sm);\n  color: var(--sidebar-tx);\n  text-decoration: none;\n  font-size: 0.92rem;\n  font-weight: 500;\n  transition: background 0.15s, color 0.15s;\n  cursor: pointer;\n}\n.nav-logout {\n  background: transparent;\n  border: none;\n  width: 100%;\n  text-align: left;\n  font-family: inherit;\n}\n.sidebar-nav a:hover,\n.sidebar-bottom a:hover,\n.nav-logout:hover {\n  background: #2c2e34;\n  color: #fff;\n  text-decoration: none;\n}\n.sidebar-nav a.active,\n.sidebar-bottom a.active {\n  background: var(--color-primary);\n  color: #fff;\n  font-weight: 600;\n}\n.main-area {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  max-width: 100%;\n}\n.topbar {\n  min-height: 52px;\n  background: var(--color-bg);\n  border-bottom: 1px solid var(--color-border);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 0 var(--spacing-lg);\n}\n.menu-toggle {\n  display: none;\n  background: transparent;\n  border: none;\n  font-size: 1.4rem;\n  cursor: pointer;\n  color: var(--color-text);\n  padding: 4px 8px;\n  border-radius: var(--radius-sm);\n}\n.crumb {\n  color: var(--color-text-muted);\n  font-size: 0.88rem;\n  margin-right: auto;\n}\n.user {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: var(--color-text-2);\n  font-size: 0.9rem;\n}\n.avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: var(--color-primary-light);\n  color: var(--color-primary);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.78rem;\n}\n.content {\n  flex: 1;\n  min-width: 0;\n  max-width: 100%;\n  overflow-x: hidden;\n  padding: var(--spacing-lg) var(--spacing);\n  background: var(--color-surface);\n}\n.app-footer {\n  padding: 16px var(--spacing-lg);\n  border-top: 1px solid var(--color-border);\n  background: var(--color-bg);\n  color: var(--color-text-muted);\n  font-size: 0.82rem;\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .sidebar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    z-index: 200;\n    transform: translateX(-100%);\n  }\n  .sidebar.open {\n    transform: translateX(0);\n  }\n  .menu-toggle {\n    display: flex;\n  }\n  .main-area {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=main-layout.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainLayout, { className: "MainLayout", filePath: "src/app/shared/layouts/main-layout/main-layout.ts", lineNumber: 28 });
})();

// src/app/shared/layouts/auth-layout/auth-layout.ts
var AuthLayout = class _AuthLayout {
  static \u0275fac = function AuthLayout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthLayout)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthLayout, selectors: [["app-auth-layout"]], decls: 13, vars: 0, consts: [[1, "auth-layout"], [1, "auth-body"], [1, "auth-panel-left"], [1, "auth-panel-left-content"], ["routerLink", "/", 1, "auth-logo"], [1, "panel-subtitle"], [1, "auth-panel-right"], [1, "auth-form-wrapper"]], template: function AuthLayout_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "aside", 2)(3, "div", 3)(4, "a", 4);
      \u0275\u0275text(5, "Pago");
      \u0275\u0275elementStart(6, "span");
      \u0275\u0275text(7, "Ya");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "p", 5);
      \u0275\u0275text(9, " Tu plataforma de pagos, simple y al instante. Env\xEDa, administra y controla tu dinero en un solo lugar. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 6)(11, "div", 7);
      \u0275\u0275element(12, "router-outlet");
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [RouterLink, RouterOutlet], styles: ["\n.auth-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: var(--color-bg);\n}\n.auth-body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n}\n.auth-panel-left[_ngcontent-%COMP%] {\n  flex: 1;\n  background: var(--sidebar-bg);\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 48px;\n}\n.auth-panel-left-content[_ngcontent-%COMP%] {\n  max-width: 420px;\n}\n.auth-logo[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 1.9rem;\n  font-weight: 700;\n  color: #fff;\n  letter-spacing: 0.5px;\n  margin-bottom: 14px;\n  text-decoration: none;\n}\n.auth-logo[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.auth-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.panel-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  color: rgba(255, 255, 255, 0.78);\n  line-height: 1.7;\n}\n.auth-panel-right[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--spacing-xl) var(--spacing-lg);\n  background: var(--color-bg);\n}\n.auth-form-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  background: var(--color-bg);\n  border-radius: var(--radius);\n  box-shadow: var(--shadow-lg);\n  padding: 36px 32px;\n}\n@media (max-width: 900px) {\n  .auth-panel-left[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .auth-panel-right[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .auth-panel-right[_ngcontent-%COMP%] {\n    padding: var(--spacing-lg) var(--spacing);\n    align-items: flex-start;\n    padding-top: var(--spacing-xl);\n  }\n  .auth-form-wrapper[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 28px 22px;\n  }\n}\n/*# sourceMappingURL=auth-layout.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthLayout, [{
    type: Component,
    args: [{ selector: "app-auth-layout", imports: [RouterLink, RouterOutlet], template: '<div class="auth-layout">\n\n  <div class="auth-body">\n\n    <!-- Panel izquierdo: logo + texto, sobre fondo oscuro (igual que PagoYa) -->\n    <aside class="auth-panel-left">\n      <div class="auth-panel-left-content">\n        <a routerLink="/" class="auth-logo">Pago<span>Ya</span></a>\n        <p class="panel-subtitle">\n          Tu plataforma de pagos, simple y al instante.\n          Env\xEDa, administra y controla tu dinero en un solo lugar.\n        </p>\n      </div>\n    </aside>\n\n    <!-- Panel derecho: aqu\xED va el formulario (login o register) -->\n    <div class="auth-panel-right">\n      <div class="auth-form-wrapper">\n        <router-outlet />\n      </div>\n    </div>\n\n  </div>\n\n</div>\n', styles: ["/* src/app/shared/layouts/auth-layout/auth-layout.css */\n.auth-layout {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: var(--color-bg);\n}\n.auth-body {\n  flex: 1;\n  display: flex;\n}\n.auth-panel-left {\n  flex: 1;\n  background: var(--sidebar-bg);\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 48px;\n}\n.auth-panel-left-content {\n  max-width: 420px;\n}\n.auth-logo {\n  display: inline-block;\n  font-size: 1.9rem;\n  font-weight: 700;\n  color: #fff;\n  letter-spacing: 0.5px;\n  margin-bottom: 14px;\n  text-decoration: none;\n}\n.auth-logo:hover {\n  text-decoration: none;\n}\n.auth-logo span {\n  color: var(--color-primary);\n}\n.panel-subtitle {\n  font-size: 1.05rem;\n  color: rgba(255, 255, 255, 0.78);\n  line-height: 1.7;\n}\n.auth-panel-right {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--spacing-xl) var(--spacing-lg);\n  background: var(--color-bg);\n}\n.auth-form-wrapper {\n  width: 100%;\n  max-width: 400px;\n  background: var(--color-bg);\n  border-radius: var(--radius);\n  box-shadow: var(--shadow-lg);\n  padding: 36px 32px;\n}\n@media (max-width: 900px) {\n  .auth-panel-left {\n    display: none;\n  }\n  .auth-panel-right {\n    width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .auth-panel-right {\n    padding: var(--spacing-lg) var(--spacing);\n    align-items: flex-start;\n    padding-top: var(--spacing-xl);\n  }\n  .auth-form-wrapper {\n    max-width: 100%;\n    padding: 28px 22px;\n  }\n}\n/*# sourceMappingURL=auth-layout.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthLayout, { className: "AuthLayout", filePath: "src/app/shared/layouts/auth-layout/auth-layout.ts", lineNumber: 10 });
})();

// src/app/core/guards/auth-guard.ts
var authGuard = () => {
  const router = inject(Router);
  if (inject(TokenService).isLoggedIn) {
    return true;
  }
  return router.createUrlTree(["/auth/login"]);
};

// src/app/core/guards/admin-guard.ts
var adminGuard = () => {
  const router = inject(Router);
  if (inject(TokenService).role === "ADMIN") {
    return true;
  }
  inject(MatSnackBar).open("Esta secci\xF3n requiere permisos de administrador.", "OK", { duration: 4e3 });
  return router.createUrlTree(["/app/dashboard"]);
};

// src/app/core/guards/customer-guard.ts
var customerGuard = () => {
  const router = inject(Router);
  if (inject(TokenService).role !== "ADMIN") {
    return true;
  }
  inject(MatSnackBar).open("Esta secci\xF3n es solo para clientes.", "OK", { duration: 4e3 });
  return router.createUrlTree(["/app/dashboard"]);
};

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "auth/login", pathMatch: "full" },
  {
    path: "auth",
    component: AuthLayout,
    children: [
      {
        path: "",
        loadChildren: () => import("./chunk-FE4XDI55.js").then((m) => m.AUTH_ROUTES)
      }
    ]
  },
  {
    path: "app",
    component: MainLayout,
    canActivate: [authGuard],
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-HYZKNBFB.js").then((m) => m.Dashboard)
      },
      {
        path: "assistant",
        loadComponent: () => import("./chunk-FZM3IXCR.js").then((m) => m.Assistant)
      },
      {
        path: "accounts",
        canActivate: [customerGuard],
        loadChildren: () => import("./chunk-XPANTEQF.js").then((m) => m.ACCOUNTS_ROUTES)
      },
      {
        path: "transfers",
        canActivate: [customerGuard],
        loadChildren: () => import("./chunk-SN4HAMGD.js").then((m) => m.TRANSFERS_ROUTES)
      },
      {
        path: "reports",
        canActivate: [adminGuard],
        loadChildren: () => import("./chunk-DHY7RUIW.js").then((m) => m.REPORTS_ROUTES)
      },
      {
        path: "profile",
        canActivate: [customerGuard],
        loadChildren: () => import("./chunk-YG6ZYXQF.js").then((m) => m.PROFILE_ROUTES)
      },
      {
        path: "examples",
        loadChildren: () => import("./chunk-F43BXTHE.js").then((m) => m.EXAMPLES_ROUTES)
      }
    ]
  }
];

// src/app/core/interceptors/auth-interceptor.ts
var authInterceptor = (req, next) => {
  const token = inject(TokenService).accessToken;
  if (token) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }
  return next(req);
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};

// src/app/app.ts
var App = class _App {
  title = signal("pagoya-web", ...ngDevMode ? [{ debugName: "title" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 1, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet], template: "<router-outlet />" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 10 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
