import {
  AuthService
} from "./chunk-AEKBUK66.js";
import "./chunk-4G4H7P6W.js";
import {
  dniValidator,
  phoneValidator
} from "./chunk-HCATZXIL.js";
import {
  Router,
  RouterLink
} from "./chunk-K7BMT7PF.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-UZK4RUW7.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-AHMCEEYF.js";
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
  MatIcon,
  MatIconModule,
  apiErrorMessage
} from "./chunk-J4RFI7W2.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-FDUTTXTA.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-CAYUHUBX.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/auth/login/login.ts
function Login_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function Login_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "El correo es obligatorio");
    \u0275\u0275elementEnd();
  }
}
function Login_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Correo inv\xE1lido");
    \u0275\u0275elementEnd();
  }
}
function Login_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "La contrase\xF1a es obligatoria");
    \u0275\u0275elementEnd();
  }
}
function Login_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 10);
  }
}
function Login_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Entrar ");
  }
}
var Login = class _Login {
  fb = inject(FormBuilder);
  auth = inject(AuthService);
  router = inject(Router);
  hidePassword = signal(true, ...ngDevMode ? [{ debugName: "hidePassword" }] : (
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
  form = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]]
  });
  togglePassword(event) {
    event.preventDefault();
    this.hidePassword.update((v) => !v);
  }
  submit() {
    this.errorMessage.set("");
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    const { email, password } = this.form.getRawValue();
    this.auth.login({ email, password }).subscribe({
      next: () => this.router.navigateByUrl("/app/dashboard"),
      error: (err) => {
        this.loading.set(false);
        this.errorMessage.set(apiErrorMessage(err, "No pudimos iniciar sesi\xF3n. Verifica tus datos."));
      }
    });
  }
  static \u0275fac = function Login_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Login)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Login, selectors: [["app-login"]], decls: 31, vars: 9, consts: [[1, "auth-form", 3, "ngSubmit", "formGroup"], [1, "auth-form-title"], [1, "auth-form-subtitle"], [1, "form-mensaje", "form-mensaje--error"], ["appearance", "outline", 1, "full"], ["matInput", "", "type", "email", "formControlName", "email", "placeholder", "tu@correo.com", "autocomplete", "email"], ["matPrefix", ""], ["matInput", "", "formControlName", "password", "autocomplete", "current-password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "auth-submit", 3, "disabled"], ["diameter", "20"], [1, "auth-form-foot"], ["routerLink", "/auth/register"]], template: function Login_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form", 0);
      \u0275\u0275listener("ngSubmit", function Login_Template_form_ngSubmit_0_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(1, "h2", 1);
      \u0275\u0275text(2, "Iniciar sesi\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, "Ingresa con tu correo y contrase\xF1a.");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, Login_Conditional_5_Template, 2, 1, "div", 3);
      \u0275\u0275elementStart(6, "mat-form-field", 4)(7, "mat-label");
      \u0275\u0275text(8, "Correo");
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "input", 5);
      \u0275\u0275elementStart(10, "mat-icon", 6);
      \u0275\u0275text(11, "mail");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(12, Login_Conditional_12_Template, 2, 0, "mat-error")(13, Login_Conditional_13_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "mat-form-field", 4)(15, "mat-label");
      \u0275\u0275text(16, "Contrase\xF1a");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "input", 7);
      \u0275\u0275elementStart(18, "mat-icon", 6);
      \u0275\u0275text(19, "lock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "button", 8);
      \u0275\u0275listener("click", function Login_Template_button_click_20_listener($event) {
        return ctx.togglePassword($event);
      });
      \u0275\u0275elementStart(21, "mat-icon");
      \u0275\u0275text(22);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(23, Login_Conditional_23_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 9);
      \u0275\u0275conditionalCreate(25, Login_Conditional_25_Template, 1, 0, "mat-spinner", 10)(26, Login_Conditional_26_Template, 1, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p", 11);
      \u0275\u0275text(28, " \xBFNo ten\xE9s cuenta? ");
      \u0275\u0275elementStart(29, "a", 12);
      \u0275\u0275text(30, "Crear cuenta");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.errorMessage() ? 5 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.form.controls.email.hasError("required") ? 12 : ctx.form.controls.email.hasError("email") ? 13 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275property("type", ctx.hidePassword() ? "password" : "text");
      \u0275\u0275advance(3);
      \u0275\u0275attribute("aria-label", ctx.hidePassword() ? "Mostrar contrase\xF1a" : "Ocultar contrase\xF1a");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.hidePassword() ? "visibility_off" : "visibility");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form.controls.password.hasError("required") ? 23 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 25 : 26);
    }
  }, dependencies: [
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    RouterLink,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatError,
    MatPrefix,
    MatSuffix,
    MatInputModule,
    MatInput,
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatIconModule,
    MatIcon,
    MatProgressSpinnerModule,
    MatProgressSpinner
  ], styles: ["\n.auth-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.auth-form-title[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.auth-form-subtitle[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: 0.9rem;\n  margin-bottom: 22px;\n}\n.full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.auth-submit[_ngcontent-%COMP%] {\n  height: 46px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  margin-top: 4px;\n}\n.auth-submit[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n.auth-submit[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  stroke: #fff;\n}\n.auth-form-foot[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 18px;\n  font-size: 0.9rem;\n  color: var(--color-text-muted);\n}\n.auth-form-foot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-weight: 600;\n}\n/*# sourceMappingURL=login.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Login, [{
    type: Component,
    args: [{ selector: "app-login", imports: [
      ReactiveFormsModule,
      RouterLink,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule
    ], template: `<form class="auth-form" [formGroup]="form" (ngSubmit)="submit()">
  <h2 class="auth-form-title">Iniciar sesi\xF3n</h2>
  <p class="auth-form-subtitle">Ingresa con tu correo y contrase\xF1a.</p>

  @if (errorMessage()) {
    <div class="form-mensaje form-mensaje--error">{{ errorMessage() }}</div>
  }

  <mat-form-field appearance="outline" class="full">
    <mat-label>Correo</mat-label>
    <input matInput type="email" formControlName="email" placeholder="tu@correo.com" autocomplete="email" />
    <mat-icon matPrefix>mail</mat-icon>
    @if (form.controls.email.hasError('required')) {
      <mat-error>El correo es obligatorio</mat-error>
    } @else if (form.controls.email.hasError('email')) {
      <mat-error>Correo inv\xE1lido</mat-error>
    }
  </mat-form-field>

  <mat-form-field appearance="outline" class="full">
    <mat-label>Contrase\xF1a</mat-label>
    <input
      matInput
      [type]="hidePassword() ? 'password' : 'text'"
      formControlName="password"
      autocomplete="current-password"
    />
    <mat-icon matPrefix>lock</mat-icon>
    <button
      mat-icon-button
      matSuffix
      type="button"
      (click)="togglePassword($event)"
      [attr.aria-label]="hidePassword() ? 'Mostrar contrase\xF1a' : 'Ocultar contrase\xF1a'"
    >
      <mat-icon>{{ hidePassword() ? 'visibility_off' : 'visibility' }}</mat-icon>
    </button>
    @if (form.controls.password.hasError('required')) {
      <mat-error>La contrase\xF1a es obligatoria</mat-error>
    }
  </mat-form-field>

  <button mat-flat-button color="primary" type="submit" class="auth-submit" [disabled]="loading()">
    @if (loading()) {
      <mat-spinner diameter="20"></mat-spinner>
    } @else {
      Entrar
    }
  </button>

  <p class="auth-form-foot">
    \xBFNo ten\xE9s cuenta? <a routerLink="/auth/register">Crear cuenta</a>
  </p>
</form>
`, styles: ["/* src/app/features/auth/login/login.css */\n.auth-form {\n  display: flex;\n  flex-direction: column;\n}\n.auth-form-title {\n  font-size: 1.4rem;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.auth-form-subtitle {\n  color: var(--color-text-muted);\n  font-size: 0.9rem;\n  margin-bottom: 22px;\n}\n.full {\n  width: 100%;\n}\n.auth-submit {\n  height: 46px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  margin-top: 4px;\n}\n.auth-submit mat-spinner {\n  margin: 0 auto;\n}\n.auth-submit mat-spinner circle {\n  stroke: #fff;\n}\n.auth-form-foot {\n  text-align: center;\n  margin-top: 18px;\n  font-size: 0.9rem;\n  color: var(--color-text-muted);\n}\n.auth-form-foot a {\n  color: var(--color-primary);\n  font-weight: 600;\n}\n/*# sourceMappingURL=login.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Login, { className: "Login", filePath: "src/app/features/auth/login/login.ts", lineNumber: 27 });
})();

// src/app/features/auth/register/register.ts
function Register_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function Register_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "El nombre es obligatorio");
    \u0275\u0275elementEnd();
  }
}
function Register_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "El correo es obligatorio");
    \u0275\u0275elementEnd();
  }
}
function Register_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Correo inv\xE1lido");
    \u0275\u0275elementEnd();
  }
}
function Register_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "El DNI es obligatorio");
    \u0275\u0275elementEnd();
  }
}
function Register_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Debe tener 8 d\xEDgitos");
    \u0275\u0275elementEnd();
  }
}
function Register_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Debe tener 9 d\xEDgitos");
    \u0275\u0275elementEnd();
  }
}
function Register_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "La contrase\xF1a es obligatoria");
    \u0275\u0275elementEnd();
  }
}
function Register_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "M\xEDnimo 8 caracteres");
    \u0275\u0275elementEnd();
  }
}
function Register_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 13);
  }
}
function Register_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Registrarme ");
  }
}
var Register = class _Register {
  fb = inject(FormBuilder);
  auth = inject(AuthService);
  router = inject(Router);
  hidePassword = signal(true, ...ngDevMode ? [{ debugName: "hidePassword" }] : (
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
  form = this.fb.group({
    fullName: ["", [Validators.required, Validators.maxLength(100)]],
    email: ["", [Validators.required, Validators.email]],
    dni: ["", [Validators.required, dniValidator()]],
    phone: ["", [phoneValidator()]],
    password: ["", [Validators.required, Validators.minLength(8)]]
  });
  togglePassword(event) {
    event.preventDefault();
    this.hidePassword.update((v) => !v);
  }
  submit() {
    this.errorMessage.set("");
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    const v = this.form.getRawValue();
    this.auth.register({
      fullName: v.fullName,
      email: v.email,
      dni: v.dni,
      password: v.password,
      phone: v.phone || void 0
    }).subscribe({
      next: () => this.router.navigateByUrl("/auth/login"),
      error: (err) => {
        this.loading.set(false);
        this.errorMessage.set(apiErrorMessage(err, "No pudimos crear tu cuenta. Intenta de nuevo."));
      }
    });
  }
  static \u0275fac = function Register_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Register)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Register, selectors: [["app-register"]], decls: 54, vars: 12, consts: [[1, "auth-form", 3, "ngSubmit", "formGroup"], [1, "auth-form-title"], [1, "auth-form-subtitle"], [1, "form-mensaje", "form-mensaje--error"], ["appearance", "outline", 1, "full"], ["matInput", "", "type", "text", "formControlName", "fullName", "placeholder", "Nombre y apellido", "autocomplete", "name"], ["matPrefix", ""], ["matInput", "", "type", "email", "formControlName", "email", "placeholder", "tu@correo.com", "autocomplete", "email"], ["matInput", "", "type", "text", "formControlName", "dni", "placeholder", "12345678", "maxlength", "8", "inputmode", "numeric"], ["matInput", "", "type", "tel", "formControlName", "phone", "placeholder", "987654321", "maxlength", "9", "inputmode", "numeric"], ["matInput", "", "formControlName", "password", "autocomplete", "new-password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "auth-submit", 3, "disabled"], ["diameter", "20"], [1, "auth-form-foot"], ["routerLink", "/auth/login"]], template: function Register_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form", 0);
      \u0275\u0275listener("ngSubmit", function Register_Template_form_ngSubmit_0_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(1, "h2", 1);
      \u0275\u0275text(2, "Crear cuenta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, "Completa tus datos para empezar.");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, Register_Conditional_5_Template, 2, 1, "div", 3);
      \u0275\u0275elementStart(6, "mat-form-field", 4)(7, "mat-label");
      \u0275\u0275text(8, "Nombre completo");
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "input", 5);
      \u0275\u0275elementStart(10, "mat-icon", 6);
      \u0275\u0275text(11, "person");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(12, Register_Conditional_12_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "mat-form-field", 4)(14, "mat-label");
      \u0275\u0275text(15, "Correo");
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "input", 7);
      \u0275\u0275elementStart(17, "mat-icon", 6);
      \u0275\u0275text(18, "mail");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(19, Register_Conditional_19_Template, 2, 0, "mat-error")(20, Register_Conditional_20_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "mat-form-field", 4)(22, "mat-label");
      \u0275\u0275text(23, "DNI");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "input", 8);
      \u0275\u0275elementStart(25, "mat-icon", 6);
      \u0275\u0275text(26, "badge");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(27, Register_Conditional_27_Template, 2, 0, "mat-error")(28, Register_Conditional_28_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "mat-form-field", 4)(30, "mat-label");
      \u0275\u0275text(31, "Tel\xE9fono (opcional)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(32, "input", 9);
      \u0275\u0275elementStart(33, "mat-icon", 6);
      \u0275\u0275text(34, "call");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(35, Register_Conditional_35_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "mat-form-field", 4)(37, "mat-label");
      \u0275\u0275text(38, "Contrase\xF1a");
      \u0275\u0275elementEnd();
      \u0275\u0275element(39, "input", 10);
      \u0275\u0275elementStart(40, "mat-icon", 6);
      \u0275\u0275text(41, "lock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "button", 11);
      \u0275\u0275listener("click", function Register_Template_button_click_42_listener($event) {
        return ctx.togglePassword($event);
      });
      \u0275\u0275elementStart(43, "mat-icon");
      \u0275\u0275text(44);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(45, Register_Conditional_45_Template, 2, 0, "mat-error")(46, Register_Conditional_46_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "button", 12);
      \u0275\u0275conditionalCreate(48, Register_Conditional_48_Template, 1, 0, "mat-spinner", 13)(49, Register_Conditional_49_Template, 1, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "p", 14);
      \u0275\u0275text(51, " \xBFYa ten\xE9s cuenta? ");
      \u0275\u0275elementStart(52, "a", 15);
      \u0275\u0275text(53, "Iniciar sesi\xF3n");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.errorMessage() ? 5 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.form.controls.fullName.hasError("required") ? 12 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.form.controls.email.hasError("required") ? 19 : ctx.form.controls.email.hasError("email") ? 20 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.form.controls.dni.hasError("required") ? 27 : ctx.form.controls.dni.hasError("dni") ? 28 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.form.controls.phone.hasError("phone") ? 35 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("type", ctx.hidePassword() ? "password" : "text");
      \u0275\u0275advance(3);
      \u0275\u0275attribute("aria-label", ctx.hidePassword() ? "Mostrar contrase\xF1a" : "Ocultar contrase\xF1a");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.hidePassword() ? "visibility_off" : "visibility");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form.controls.password.hasError("required") ? 45 : ctx.form.controls.password.hasError("minlength") ? 46 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 48 : 49);
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
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatError,
    MatPrefix,
    MatSuffix,
    MatInputModule,
    MatInput,
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatIconModule,
    MatIcon,
    MatProgressSpinnerModule,
    MatProgressSpinner
  ], styles: ["\n.auth-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.auth-form-title[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.auth-form-subtitle[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: 0.9rem;\n  margin-bottom: 22px;\n}\n.full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.auth-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.auth-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.auth-submit[_ngcontent-%COMP%] {\n  height: 46px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  margin-top: 4px;\n}\n.auth-submit[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n.auth-submit[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  stroke: #fff;\n}\n.auth-form-foot[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 18px;\n  font-size: 0.9rem;\n  color: var(--color-text-muted);\n}\n.auth-form-foot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-weight: 600;\n}\n@media (max-width: 480px) {\n  .auth-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0;\n  }\n}\n/*# sourceMappingURL=register.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Register, [{
    type: Component,
    args: [{ selector: "app-register", imports: [
      ReactiveFormsModule,
      RouterLink,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule
    ], template: `<form class="auth-form" [formGroup]="form" (ngSubmit)="submit()">
  <h2 class="auth-form-title">Crear cuenta</h2>
  <p class="auth-form-subtitle">Completa tus datos para empezar.</p>

  @if (errorMessage()) {
    <div class="form-mensaje form-mensaje--error">{{ errorMessage() }}</div>
  }

  <mat-form-field appearance="outline" class="full">
    <mat-label>Nombre completo</mat-label>
    <input matInput type="text" formControlName="fullName" placeholder="Nombre y apellido" autocomplete="name" />
    <mat-icon matPrefix>person</mat-icon>
    @if (form.controls.fullName.hasError('required')) {
      <mat-error>El nombre es obligatorio</mat-error>
    }
  </mat-form-field>

  <mat-form-field appearance="outline" class="full">
    <mat-label>Correo</mat-label>
    <input matInput type="email" formControlName="email" placeholder="tu@correo.com" autocomplete="email" />
    <mat-icon matPrefix>mail</mat-icon>
    @if (form.controls.email.hasError('required')) {
      <mat-error>El correo es obligatorio</mat-error>
    } @else if (form.controls.email.hasError('email')) {
      <mat-error>Correo inv\xE1lido</mat-error>
    }
  </mat-form-field>

  <mat-form-field appearance="outline" class="full">
    <mat-label>DNI</mat-label>
    <input matInput type="text" formControlName="dni" placeholder="12345678" maxlength="8" inputmode="numeric" />
    <mat-icon matPrefix>badge</mat-icon>
    @if (form.controls.dni.hasError('required')) {
      <mat-error>El DNI es obligatorio</mat-error>
    } @else if (form.controls.dni.hasError('dni')) {
      <mat-error>Debe tener 8 d\xEDgitos</mat-error>
    }
  </mat-form-field>

  <mat-form-field appearance="outline" class="full">
    <mat-label>Tel\xE9fono (opcional)</mat-label>
    <input matInput type="tel" formControlName="phone" placeholder="987654321" maxlength="9" inputmode="numeric" />
    <mat-icon matPrefix>call</mat-icon>
    @if (form.controls.phone.hasError('phone')) {
      <mat-error>Debe tener 9 d\xEDgitos</mat-error>
    }
  </mat-form-field>

  <mat-form-field appearance="outline" class="full">
    <mat-label>Contrase\xF1a</mat-label>
    <input
      matInput
      [type]="hidePassword() ? 'password' : 'text'"
      formControlName="password"
      autocomplete="new-password"
    />
    <mat-icon matPrefix>lock</mat-icon>
    <button
      mat-icon-button
      matSuffix
      type="button"
      (click)="togglePassword($event)"
      [attr.aria-label]="hidePassword() ? 'Mostrar contrase\xF1a' : 'Ocultar contrase\xF1a'"
    >
      <mat-icon>{{ hidePassword() ? 'visibility_off' : 'visibility' }}</mat-icon>
    </button>
    @if (form.controls.password.hasError('required')) {
      <mat-error>La contrase\xF1a es obligatoria</mat-error>
    } @else if (form.controls.password.hasError('minlength')) {
      <mat-error>M\xEDnimo 8 caracteres</mat-error>
    }
  </mat-form-field>

  <button mat-flat-button color="primary" type="submit" class="auth-submit" [disabled]="loading()">
    @if (loading()) {
      <mat-spinner diameter="20"></mat-spinner>
    } @else {
      Registrarme
    }
  </button>

  <p class="auth-form-foot">
    \xBFYa ten\xE9s cuenta? <a routerLink="/auth/login">Iniciar sesi\xF3n</a>
  </p>
</form>
`, styles: ["/* src/app/features/auth/register/register.css */\n.auth-form {\n  display: flex;\n  flex-direction: column;\n}\n.auth-form-title {\n  font-size: 1.4rem;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.auth-form-subtitle {\n  color: var(--color-text-muted);\n  font-size: 0.9rem;\n  margin-bottom: 22px;\n}\n.full {\n  width: 100%;\n}\n.auth-row {\n  display: flex;\n  gap: 12px;\n}\n.auth-row mat-form-field {\n  flex: 1;\n}\n.auth-submit {\n  height: 46px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  margin-top: 4px;\n}\n.auth-submit mat-spinner {\n  margin: 0 auto;\n}\n.auth-submit mat-spinner circle {\n  stroke: #fff;\n}\n.auth-form-foot {\n  text-align: center;\n  margin-top: 18px;\n  font-size: 0.9rem;\n  color: var(--color-text-muted);\n}\n.auth-form-foot a {\n  color: var(--color-primary);\n  font-weight: 600;\n}\n@media (max-width: 480px) {\n  .auth-row {\n    flex-direction: column;\n    gap: 0;\n  }\n}\n/*# sourceMappingURL=register.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Register, { className: "Register", filePath: "src/app/features/auth/register/register.ts", lineNumber: 28 });
})();

// src/app/features/auth/auth.routes.ts
var AUTH_ROUTES = [
  { path: "login", component: Login },
  { path: "register", component: Register },
  { path: "", redirectTo: "login", pathMatch: "full" }
];
export {
  AUTH_ROUTES
};
//# sourceMappingURL=chunk-FE4XDI55.js.map
