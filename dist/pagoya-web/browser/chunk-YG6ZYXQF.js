import {
  CustomerService
} from "./chunk-LBY7AMU5.js";
import {
  TokenService
} from "./chunk-4G4H7P6W.js";
import {
  phoneValidator
} from "./chunk-HCATZXIL.js";
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
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatInput,
  MatInputModule,
  MatLabel,
  MatPrefix
} from "./chunk-AHMCEEYF.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-PXC5WPHP.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-XEEWL246.js";
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
  BidiModule,
  MatButton,
  MatButtonModule,
  coerceBooleanProperty
} from "./chunk-FDUTTXTA.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
  ViewEncapsulation,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CAYUHUBX.js";
import "./chunk-GOMI4DH3.js";

// node_modules/@angular/material/fesm2022/divider.mjs
var MatDivider = class _MatDivider {
  get vertical() {
    return this._vertical;
  }
  set vertical(value) {
    this._vertical = coerceBooleanProperty(value);
  }
  _vertical = false;
  get inset() {
    return this._inset;
  }
  set inset(value) {
    this._inset = coerceBooleanProperty(value);
  }
  _inset = false;
  static \u0275fac = function MatDivider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDivider)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDivider,
    selectors: [["mat-divider"]],
    hostAttrs: ["role", "separator", 1, "mat-divider"],
    hostVars: 7,
    hostBindings: function MatDivider_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-orientation", ctx.vertical ? "vertical" : "horizontal");
        \u0275\u0275classProp("mat-divider-vertical", ctx.vertical)("mat-divider-horizontal", !ctx.vertical)("mat-divider-inset", ctx.inset);
      }
    },
    inputs: {
      vertical: "vertical",
      inset: "inset"
    },
    decls: 0,
    vars: 0,
    template: function MatDivider_Template(rf, ctx) {
    },
    styles: [".mat-divider {\n  display: block;\n  margin: 0;\n  border-top-style: solid;\n  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));\n  border-top-width: var(--mat-divider-width, 1px);\n}\n.mat-divider.mat-divider-vertical {\n  border-top: 0;\n  border-right-style: solid;\n  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));\n  border-right-width: var(--mat-divider-width, 1px);\n}\n.mat-divider.mat-divider-inset {\n  margin-left: 80px;\n}\n[dir=rtl] .mat-divider.mat-divider-inset {\n  margin-left: auto;\n  margin-right: 80px;\n}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDivider, [{
    type: Component,
    args: [{
      selector: "mat-divider",
      host: {
        "role": "separator",
        "[attr.aria-orientation]": 'vertical ? "vertical" : "horizontal"',
        "[class.mat-divider-vertical]": "vertical",
        "[class.mat-divider-horizontal]": "!vertical",
        "[class.mat-divider-inset]": "inset",
        "class": "mat-divider"
      },
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [".mat-divider {\n  display: block;\n  margin: 0;\n  border-top-style: solid;\n  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));\n  border-top-width: var(--mat-divider-width, 1px);\n}\n.mat-divider.mat-divider-vertical {\n  border-top: 0;\n  border-right-style: solid;\n  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));\n  border-right-width: var(--mat-divider-width, 1px);\n}\n.mat-divider.mat-divider-inset {\n  margin-left: 80px;\n}\n[dir=rtl] .mat-divider.mat-divider-inset {\n  margin-left: auto;\n  margin-right: 80px;\n}\n"]
    }]
  }], null, {
    vertical: [{
      type: Input
    }],
    inset: [{
      type: Input
    }]
  });
})();
var MatDividerModule = class _MatDividerModule {
  static \u0275fac = function MatDividerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDividerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatDividerModule,
    imports: [MatDivider],
    exports: [MatDivider, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDividerModule, [{
    type: NgModule,
    args: [{
      imports: [MatDivider],
      exports: [MatDivider, BidiModule]
    }]
  }], null, null);
})();

// src/app/features/profile/detail/profile-detail.ts
function ProfileDetail_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 4);
  }
}
function ProfileDetail_Conditional_7_Template(rf, ctx) {
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
function ProfileDetail_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 6)(1, "div", 7)(2, "span", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9)(5, "span", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 11)(8, "mat-icon");
    \u0275\u0275text(9, "verified_user");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "a", 12)(12, "mat-icon");
    \u0275\u0275text(13, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Editar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "mat-divider");
    \u0275\u0275elementStart(16, "dl", 13)(17, "div", 14)(18, "dt")(19, "mat-icon");
    \u0275\u0275text(20, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " Correo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "dd");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 14)(25, "dt")(26, "mat-icon");
    \u0275\u0275text(27, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " DNI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "dd");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 14)(32, "dt")(33, "mat-icon");
    \u0275\u0275text(34, "call");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "dd");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const customer_r2 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.initials());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(customer_r2.fullName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.role, " ");
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r0.email);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(customer_r2.dni);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(customer_r2.phone ?? "No registrado");
  }
}
var ProfileDetail = class _ProfileDetail {
  customerService = inject(CustomerService);
  tokens = inject(TokenService);
  customer = signal(null, ...ngDevMode ? [{ debugName: "customer" }] : (
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
  email = this.tokens.email ?? "";
  role = this.tokens.role ?? "";
  initials = computed(() => {
    const name = this.customer()?.fullName ?? "";
    return name.split(" ").filter(Boolean).map((p) => p[0]).slice(0, 4).join("").toUpperCase() || "\u2014";
  }, ...ngDevMode ? [{ debugName: "initials" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.errorMessage.set("");
    this.customerService.findMe().subscribe({
      next: (customer) => {
        this.customer.set(customer);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        this.errorMessage.set(apiErrorMessage(err, "No se pudo cargar tu perfil."));
      }
    });
  }
  static \u0275fac = function ProfileDetail_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileDetail)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileDetail, selectors: [["app-profile-detail"]], decls: 9, vars: 3, consts: [[1, "centered-page"], [1, "page-head"], [1, "page-title"], [1, "page-subtitle"], ["mode", "indeterminate"], [1, "form-mensaje", "form-mensaje--error"], ["appearance", "outlined", 1, "profile-card"], [1, "profile-header"], [1, "profile-avatar"], [1, "profile-id"], [1, "profile-name"], [1, "profile-role"], ["mat-stroked-button", "", "routerLink", "/app/profile/edit", 1, "edit-btn"], [1, "profile-fields"], [1, "field"]], template: function ProfileDetail_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Mi perfil");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Tu informaci\xF3n personal en Pagoya.");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, ProfileDetail_Conditional_6_Template, 1, 0, "mat-progress-bar", 4);
      \u0275\u0275conditionalCreate(7, ProfileDetail_Conditional_7_Template, 2, 1, "div", 5);
      \u0275\u0275conditionalCreate(8, ProfileDetail_Conditional_8_Template, 38, 6, "mat-card", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loading() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMessage() ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_2_0 = ctx.customer()) ? 8 : -1, tmp_2_0);
    }
  }, dependencies: [
    RouterLink,
    MatCardModule,
    MatCard,
    MatButtonModule,
    MatButton,
    MatIconModule,
    MatIcon,
    MatDividerModule,
    MatDivider,
    MatProgressBarModule,
    MatProgressBar
  ], styles: ["\n.profile-card[_ngcontent-%COMP%] {\n  padding: 0;\n  border-radius: var(--radius);\n  overflow: hidden;\n}\n.profile-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 24px;\n}\n.profile-avatar[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: var(--color-primary-light);\n  color: var(--color-primary);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 1.2rem;\n  flex-shrink: 0;\n}\n.profile-id[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-right: auto;\n}\n.profile-name[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n.profile-role[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-primary);\n}\n.profile-role[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.profile-fields[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 8px 24px 24px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.field[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.field[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--color-text-muted);\n  font-size: 0.9rem;\n}\n.field[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--color-text-muted);\n}\n.field[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  color: var(--color-text);\n}\n@media (max-width: 560px) {\n  .profile-header[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .edit-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=profile-detail.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileDetail, [{
    type: Component,
    args: [{ selector: "app-profile-detail", imports: [
      RouterLink,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatDividerModule,
      MatProgressBarModule
    ], template: `<div class="centered-page">
<div class="page-head">
  <h1 class="page-title">Mi perfil</h1>
  <p class="page-subtitle">Tu informaci\xF3n personal en Pagoya.</p>
</div>

@if (loading()) {
  <mat-progress-bar mode="indeterminate"></mat-progress-bar>
}

@if (errorMessage()) {
  <div class="form-mensaje form-mensaje--error">{{ errorMessage() }}</div>
}

@if (customer(); as customer) {
<mat-card appearance="outlined" class="profile-card">
  <div class="profile-header">
    <span class="profile-avatar">{{ initials() }}</span>
    <div class="profile-id">
      <span class="profile-name">{{ customer.fullName }}</span>
      <span class="profile-role">
        <mat-icon>verified_user</mat-icon> {{ role }}
      </span>
    </div>
    <a mat-stroked-button routerLink="/app/profile/edit" class="edit-btn">
      <mat-icon>edit</mat-icon>
      Editar
    </a>
  </div>

  <mat-divider></mat-divider>

  <dl class="profile-fields">
    <div class="field">
      <dt><mat-icon>mail</mat-icon> Correo</dt>
      <dd>{{ email }}</dd>
    </div>
    <div class="field">
      <dt><mat-icon>badge</mat-icon> DNI</dt>
      <dd>{{ customer.dni }}</dd>
    </div>
    <div class="field">
      <dt><mat-icon>call</mat-icon> Tel\xE9fono</dt>
      <dd>{{ customer.phone ?? 'No registrado' }}</dd>
    </div>
  </dl>
</mat-card>
}
</div>
`, styles: ["/* src/app/features/profile/detail/profile-detail.css */\n.profile-card {\n  padding: 0;\n  border-radius: var(--radius);\n  overflow: hidden;\n}\n.profile-header {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 24px;\n}\n.profile-avatar {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: var(--color-primary-light);\n  color: var(--color-primary);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 1.2rem;\n  flex-shrink: 0;\n}\n.profile-id {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-right: auto;\n}\n.profile-name {\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n.profile-role {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-primary);\n}\n.profile-role mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.profile-fields {\n  margin: 0;\n  padding: 8px 24px 24px;\n}\n.field {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.field:last-child {\n  border-bottom: none;\n}\n.field dt {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--color-text-muted);\n  font-size: 0.9rem;\n}\n.field dt mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--color-text-muted);\n}\n.field dd {\n  margin: 0;\n  font-weight: 600;\n  color: var(--color-text);\n}\n@media (max-width: 560px) {\n  .profile-header {\n    flex-wrap: wrap;\n  }\n  .edit-btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=profile-detail.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileDetail, { className: "ProfileDetail", filePath: "src/app/features/profile/detail/profile-detail.ts", lineNumber: 26 });
})();

// src/app/features/profile/edit/profile-edit.ts
function ProfileEdit_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 4);
  }
}
function ProfileEdit_Conditional_9_Template(rf, ctx) {
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
function ProfileEdit_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "El nombre es obligatorio");
    \u0275\u0275elementEnd();
  }
}
function ProfileEdit_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Debe tener 9 d\xEDgitos");
    \u0275\u0275elementEnd();
  }
}
function ProfileEdit_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 16);
  }
}
function ProfileEdit_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Guardar cambios ");
  }
}
var ProfileEdit = class _ProfileEdit {
  fb = inject(FormBuilder);
  customerService = inject(CustomerService);
  router = inject(Router);
  snack = inject(MatSnackBar);
  dni = signal("", ...ngDevMode ? [{ debugName: "dni" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : (
    /* istanbul ignore next */
    []
  ));
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  form = this.fb.group({
    fullName: ["", [Validators.required, Validators.maxLength(100)]],
    phone: ["", [phoneValidator()]]
  });
  constructor() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.errorMessage.set("");
    this.customerService.findMe().subscribe({
      next: (customer) => {
        this.dni.set(customer.dni);
        this.form.patchValue({
          fullName: customer.fullName,
          phone: customer.phone ?? ""
        });
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        this.errorMessage.set(apiErrorMessage(err, "No se pudo cargar tu perfil."));
      }
    });
  }
  submit() {
    this.errorMessage.set("");
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { fullName, phone } = this.form.getRawValue();
    this.saving.set(true);
    this.customerService.updateMe({ fullName, phone: phone || void 0 }).subscribe({
      next: () => {
        this.snack.open("Perfil actualizado con \xE9xito.", "OK", { duration: 3e3 });
        this.router.navigateByUrl("/app/profile");
      },
      error: (err) => {
        this.saving.set(false);
        this.errorMessage.set(apiErrorMessage(err, "No se pudo actualizar tu perfil."));
      }
    });
  }
  static \u0275fac = function ProfileEdit_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileEdit)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileEdit, selectors: [["app-profile-edit"]], decls: 38, vars: 8, consts: [[1, "centered-page"], [1, "page-head"], [1, "page-title"], [1, "page-subtitle"], ["mode", "indeterminate"], ["appearance", "outlined", 1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-mensaje", "form-mensaje--error"], ["appearance", "outline", 1, "field-full"], ["matInput", "", "formControlName", "fullName", "autocomplete", "name"], ["matPrefix", ""], ["matInput", "", "formControlName", "phone", "maxlength", "9", "inputmode", "numeric"], ["matInput", "", "disabled", "", 3, "value"], [1, "form-card-actions"], ["mat-stroked-button", "", "routerLink", "/app/profile"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["diameter", "20"]], template: function ProfileEdit_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Editar perfil");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Actualiza tu nombre y tel\xE9fono.");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, ProfileEdit_Conditional_6_Template, 1, 0, "mat-progress-bar", 4);
      \u0275\u0275elementStart(7, "mat-card", 5)(8, "form", 6);
      \u0275\u0275listener("ngSubmit", function ProfileEdit_Template_form_ngSubmit_8_listener() {
        return ctx.submit();
      });
      \u0275\u0275conditionalCreate(9, ProfileEdit_Conditional_9_Template, 2, 1, "div", 7);
      \u0275\u0275elementStart(10, "mat-form-field", 8)(11, "mat-label");
      \u0275\u0275text(12, "Nombre completo");
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "input", 9);
      \u0275\u0275elementStart(14, "mat-icon", 10);
      \u0275\u0275text(15, "person");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(16, ProfileEdit_Conditional_16_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "mat-form-field", 8)(18, "mat-label");
      \u0275\u0275text(19, "Tel\xE9fono");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "input", 11);
      \u0275\u0275elementStart(21, "mat-icon", 10);
      \u0275\u0275text(22, "call");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(23, ProfileEdit_Conditional_23_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "mat-form-field", 8)(25, "mat-label");
      \u0275\u0275text(26, "DNI");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "input", 12);
      \u0275\u0275elementStart(28, "mat-icon", 10);
      \u0275\u0275text(29, "badge");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "mat-hint");
      \u0275\u0275text(31, "El DNI no se puede modificar.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 13)(33, "a", 14);
      \u0275\u0275text(34, "Cancelar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "button", 15);
      \u0275\u0275conditionalCreate(36, ProfileEdit_Conditional_36_Template, 1, 0, "mat-spinner", 16)(37, ProfileEdit_Conditional_37_Template, 1, 0);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loading() ? 6 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMessage() ? 9 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.form.controls.fullName.hasError("required") ? 16 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.form.controls.phone.hasError("phone") ? 23 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.dni());
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", ctx.saving() || ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.saving() ? 36 : 37);
    }
  }, dependencies: [
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    MaxLengthValidator,
    FormGroupDirective,
    FormControlName,
    RouterLink,
    MatCardModule,
    MatCard,
    MatButtonModule,
    MatButton,
    MatIconModule,
    MatIcon,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatHint,
    MatError,
    MatPrefix,
    MatInputModule,
    MatInput,
    MatProgressBarModule,
    MatProgressBar,
    MatProgressSpinnerModule,
    MatProgressSpinner
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileEdit, [{
    type: Component,
    args: [{ selector: "app-profile-edit", imports: [
      ReactiveFormsModule,
      RouterLink,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      MatProgressBarModule,
      MatProgressSpinnerModule
    ], template: `<div class="centered-page">
<div class="page-head">
  <h1 class="page-title">Editar perfil</h1>
  <p class="page-subtitle">Actualiza tu nombre y tel\xE9fono.</p>
</div>

@if (loading()) {
  <mat-progress-bar mode="indeterminate"></mat-progress-bar>
}

<mat-card appearance="outlined" class="form-card">
  <form [formGroup]="form" (ngSubmit)="submit()">

    @if (errorMessage()) {
      <div class="form-mensaje form-mensaje--error">{{ errorMessage() }}</div>
    }

    <mat-form-field appearance="outline" class="field-full">
      <mat-label>Nombre completo</mat-label>
      <input matInput formControlName="fullName" autocomplete="name" />
      <mat-icon matPrefix>person</mat-icon>
      @if (form.controls.fullName.hasError('required')) {
        <mat-error>El nombre es obligatorio</mat-error>
      }
    </mat-form-field>

    <mat-form-field appearance="outline" class="field-full">
      <mat-label>Tel\xE9fono</mat-label>
      <input matInput formControlName="phone" maxlength="9" inputmode="numeric" />
      <mat-icon matPrefix>call</mat-icon>
      @if (form.controls.phone.hasError('phone')) {
        <mat-error>Debe tener 9 d\xEDgitos</mat-error>
      }
    </mat-form-field>

    <mat-form-field appearance="outline" class="field-full">
      <mat-label>DNI</mat-label>
      <input matInput [value]="dni()" disabled />
      <mat-icon matPrefix>badge</mat-icon>
      <mat-hint>El DNI no se puede modificar.</mat-hint>
    </mat-form-field>

    <div class="form-card-actions">
      <a mat-stroked-button routerLink="/app/profile">Cancelar</a>
      <button mat-flat-button color="primary" type="submit" [disabled]="saving() || loading()">
        @if (saving()) {
          <mat-spinner diameter="20"></mat-spinner>
        } @else {
          Guardar cambios
        }
      </button>
    </div>
  </form>
</mat-card>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileEdit, { className: "ProfileEdit", filePath: "src/app/features/profile/edit/profile-edit.ts", lineNumber: 32 });
})();

// src/app/features/profile/profile.routes.ts
var PROFILE_ROUTES = [
  { path: "", component: ProfileDetail },
  { path: "edit", component: ProfileEdit }
];
export {
  PROFILE_ROUTES
};
//# sourceMappingURL=chunk-YG6ZYXQF.js.map
