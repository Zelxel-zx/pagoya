import {
  TokenService
} from "./chunk-4G4H7P6W.js";
import {
  MatSnackBar
} from "./chunk-2OVKITJA.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-UZK4RUW7.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel
} from "./chunk-AHMCEEYF.js";
import {
  MatButtonToggle,
  MatButtonToggleGroup,
  MatButtonToggleModule
} from "./chunk-Y5ZZLN5Y.js";
import "./chunk-X6Y4PJVM.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
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
  HttpClient,
  MatButton,
  MatButtonModule,
  MatFabButton,
  environment
} from "./chunk-FDUTTXTA.js";
import {
  Component,
  Injectable,
  ViewChild,
  computed,
  inject,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-CAYUHUBX.js";
import "./chunk-GOMI4DH3.js";

// src/app/core/services/ai.service.ts
var AiService = class _AiService {
  http = inject(HttpClient);
  base = environment.aiUrl;
  /** Tool Calling: el asistente consulta cuentas y ejecuta transferencias. */
  transfer(message) {
    const body = { message };
    return this.http.post(`${this.base}/transfer`, body);
  }
  /** RAG: responde preguntas de soporte usando los documentos (FAQ). */
  supportAsk(message) {
    const body = { message };
    return this.http.post(`${this.base}/support/ask`, body);
  }
  /** RAG (solo ADMIN): ingesta los PDF de docs/ al vector store. */
  ingest() {
    return this.http.post(`${this.base}/support/ingest`, {});
  }
  static \u0275fac = function AiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AiService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AiService, factory: _AiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AiService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/assistant/assistant.ts
var _c0 = ["chatBody"];
function Assistant_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Tool Calling \u2014 consulta saldos y realiza transferencias. ");
  }
}
function Assistant_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " RAG \u2014 responde con la base de conocimiento (FAQ). ");
  }
}
function Assistant_Conditional_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 21);
  }
}
function Assistant_Conditional_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "upload_file");
    \u0275\u0275elementEnd();
  }
}
function Assistant_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function Assistant_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.ingest());
    });
    \u0275\u0275conditionalCreate(1, Assistant_Conditional_19_Conditional_1_Template, 1, 0, "mat-spinner", 21)(2, Assistant_Conditional_19_Conditional_2_Template, 2, 0, "mat-icon");
    \u0275\u0275text(3, " Cargar documentos ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r2.ingesting());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.ingesting() ? 1 : 2);
  }
}
function Assistant_For_23_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22)(1, "mat-icon");
    \u0275\u0275text(2, "smart_toy");
    \u0275\u0275elementEnd()();
  }
}
function Assistant_For_23_Conditional_5_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r4);
  }
}
function Assistant_For_23_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "mat-icon", 26);
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, Assistant_For_23_Conditional_5_For_4_Template, 2, 1, "span", 27, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275repeater(m_r5.sources);
  }
}
function Assistant_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275conditionalCreate(1, Assistant_For_23_Conditional_1_Template, 3, 0, "span", 22);
    \u0275\u0275elementStart(2, "div", 23)(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, Assistant_For_23_Conditional_5_Template, 5, 0, "div", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r5 = ctx.$implicit;
    \u0275\u0275classProp("msg-user", m_r5.from === "user");
    \u0275\u0275advance();
    \u0275\u0275conditional(m_r5.from === "bot" ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bubble-error", m_r5.error);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r5.text);
    \u0275\u0275advance();
    \u0275\u0275conditional((m_r5.sources == null ? null : m_r5.sources.length) ? 5 : -1);
  }
}
function Assistant_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 22)(2, "mat-icon");
    \u0275\u0275text(3, "smart_toy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 28);
    \u0275\u0275element(5, "span")(6, "span")(7, "span");
    \u0275\u0275elementEnd()();
  }
}
function Assistant_For_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function Assistant_For_27_Template_button_click_0_listener() {
      const s_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.send(s_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r2.sending());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r7, " ");
  }
}
var GREETING = {
  assistant: "\xA1Hola! Soy tu asistente de PagoYa. Puedo consultar tus cuentas y hacer transferencias por ti. \xBFQu\xE9 necesitas?",
  support: "Modo soporte: respondo tus dudas usando la base de conocimiento de PagoYa (preguntas frecuentes). \xBFEn qu\xE9 te ayudo?"
};
var Assistant = class _Assistant {
  ai = inject(AiService);
  tokens = inject(TokenService);
  snack = inject(MatSnackBar);
  bodyRef = viewChild("chatBody", ...ngDevMode ? [{ debugName: "bodyRef" }] : (
    /* istanbul ignore next */
    []
  ));
  isAdmin = this.tokens.role === "ADMIN";
  draft = "";
  mode = signal("assistant", ...ngDevMode ? [{ debugName: "mode" }] : (
    /* istanbul ignore next */
    []
  ));
  sending = signal(false, ...ngDevMode ? [{ debugName: "sending" }] : (
    /* istanbul ignore next */
    []
  ));
  ingesting = signal(false, ...ngDevMode ? [{ debugName: "ingesting" }] : (
    /* istanbul ignore next */
    []
  ));
  messages = signal([{ from: "bot", text: GREETING.assistant }], ...ngDevMode ? [{ debugName: "messages" }] : (
    /* istanbul ignore next */
    []
  ));
  suggestions = computed(() => this.mode() === "assistant" ? ["\xBFCu\xE1nto tengo en mis cuentas?", "Env\xEDa 50 soles a 987654321"] : ["\xBFC\xF3mo abro una cuenta?", "\xBFQu\xE9 comisiones tiene una transferencia?"], ...ngDevMode ? [{ debugName: "suggestions" }] : (
    /* istanbul ignore next */
    []
  ));
  setMode(mode) {
    if (mode === this.mode())
      return;
    this.mode.set(mode);
    this.messages.set([{ from: "bot", text: GREETING[mode] }]);
    this.draft = "";
  }
  send(text = this.draft) {
    const value = text.trim();
    if (!value || this.sending())
      return;
    this.push({ from: "user", text: value });
    this.draft = "";
    this.sending.set(true);
    if (this.mode() === "assistant") {
      this.ai.transfer(value).subscribe({
        next: (res) => {
          this.push({ from: "bot", text: res.reply });
          this.sending.set(false);
        },
        error: (err) => this.fail(err)
      });
    } else {
      this.ai.supportAsk(value).subscribe({
        next: (res) => {
          this.push({ from: "bot", text: res.reply, sources: res.sources });
          this.sending.set(false);
        },
        error: (err) => this.fail(err)
      });
    }
  }
  ingest() {
    if (this.ingesting())
      return;
    this.ingesting.set(true);
    this.ai.ingest().subscribe({
      next: (res) => {
        this.ingesting.set(false);
        this.snack.open(`Documentos cargados: ${res.chunksIngested} fragmentos.`, "OK", { duration: 4e3 });
      },
      error: (err) => {
        this.ingesting.set(false);
        this.snack.open(apiErrorMessage(err, "No se pudo ingestar."), "OK", {
          duration: 4e3
        });
      }
    });
  }
  fail(err) {
    this.push({
      from: "bot",
      text: apiErrorMessage(err, "No pude procesar tu solicitud. Intenta de nuevo."),
      error: true
    });
    this.sending.set(false);
  }
  push(msg) {
    this.messages.update((list) => [...list, msg]);
    this.scrollToBottom();
  }
  scrollToBottom() {
    setTimeout(() => {
      const el = this.bodyRef()?.nativeElement;
      if (el)
        el.scrollTop = el.scrollHeight;
    });
  }
  static \u0275fac = function Assistant_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Assistant)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Assistant, selectors: [["app-assistant"]], viewQuery: function Assistant_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.bodyRef, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, decls: 36, vars: 7, consts: [["chatBody", ""], [1, "page-head"], [1, "page-title"], [1, "page-subtitle"], ["appearance", "outlined", 1, "chat"], [1, "mode-bar"], ["hideSingleSelectionIndicator", "", "aria-label", "Modo del asistente", 3, "change", "value"], ["value", "assistant"], ["value", "support"], [1, "mode-hint"], ["mat-stroked-button", "", "type", "button", 1, "ingest-btn", 3, "disabled"], [1, "chat-body"], [1, "msg", 3, "msg-user"], [1, "msg"], [1, "suggestions"], ["mat-stroked-button", "", "type", "button", 3, "disabled"], [1, "chat-input", 3, "ngSubmit"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "field-full"], ["matInput", "", "name", "draft", "autocomplete", "off", 3, "ngModelChange", "ngModel", "disabled"], ["mat-fab", "", "color", "primary", "type", "submit", "aria-label", "Enviar", 3, "disabled"], ["mat-stroked-button", "", "type", "button", 1, "ingest-btn", 3, "click", "disabled"], ["diameter", "16"], [1, "msg-avatar"], [1, "bubble-wrap"], [1, "bubble"], [1, "msg-sources"], [1, "src-ico"], [1, "src-chip"], [1, "bubble", "typing"], ["mat-stroked-button", "", "type", "button", 3, "click", "disabled"]], template: function Assistant_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "h1", 2);
      \u0275\u0275text(2, "Asistente IA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 3);
      \u0275\u0275text(4, "Habla en lenguaje natural: el asistente puede actuar y responder con tus documentos.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "mat-card", 4)(6, "div", 5)(7, "mat-button-toggle-group", 6);
      \u0275\u0275listener("change", function Assistant_Template_mat_button_toggle_group_change_7_listener($event) {
        return ctx.setMode($event.value);
      });
      \u0275\u0275elementStart(8, "mat-button-toggle", 7)(9, "mat-icon");
      \u0275\u0275text(10, "bolt");
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " Asistente ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "mat-button-toggle", 8)(13, "mat-icon");
      \u0275\u0275text(14, "menu_book");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " Soporte ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "span", 9);
      \u0275\u0275conditionalCreate(17, Assistant_Conditional_17_Template, 1, 0)(18, Assistant_Conditional_18_Template, 1, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(19, Assistant_Conditional_19_Template, 4, 2, "button", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 11, 0);
      \u0275\u0275repeaterCreate(22, Assistant_For_23_Template, 6, 7, "div", 12, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275conditionalCreate(24, Assistant_Conditional_24_Template, 8, 0, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 14);
      \u0275\u0275repeaterCreate(26, Assistant_For_27_Template, 2, 2, "button", 15, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "form", 16);
      \u0275\u0275listener("ngSubmit", function Assistant_Template_form_ngSubmit_28_listener() {
        return ctx.send();
      });
      \u0275\u0275elementStart(29, "mat-form-field", 17)(30, "mat-label");
      \u0275\u0275text(31, "Escribe tu mensaje");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function Assistant_Template_input_ngModelChange_32_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.draft, $event) || (ctx.draft = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "button", 19)(34, "mat-icon");
      \u0275\u0275text(35, "send");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("value", ctx.mode());
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.mode() === "assistant" ? 17 : 18);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.mode() === "support" && ctx.isAdmin ? 19 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.messages());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.sending() ? 24 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.suggestions());
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.draft);
      \u0275\u0275property("disabled", ctx.sending());
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.sending() || !ctx.draft.trim());
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatCardModule, MatCard, MatIconModule, MatIcon, MatButtonModule, MatButton, MatFabButton, MatButtonToggleModule, MatButtonToggleGroup, MatButtonToggle, MatFormFieldModule, MatFormField, MatLabel, MatInputModule, MatInput, MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n.chat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 220px);\n  min-height: 420px;\n  padding: 0;\n  border-radius: var(--radius);\n  overflow: hidden;\n}\n.chat-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.msg[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n  max-width: 75%;\n}\n.msg-user[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  flex-direction: row-reverse;\n}\n.msg-avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: var(--color-primary-light);\n  color: var(--color-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.msg-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.bubble[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-radius: 14px;\n  background: var(--color-surface-alt);\n  color: var(--color-text);\n  line-height: 1.4;\n}\n.msg-user[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: #fff;\n}\n.suggestions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  padding: 12px 20px 0;\n}\n.chat-input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-top: 1px solid var(--color-border);\n}\n.mode-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  padding: 14px 20px;\n  border-bottom: 1px solid var(--color-border);\n}\n.mode-bar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  margin-right: 4px;\n}\n.mode-hint[_ngcontent-%COMP%] {\n  color: var(--color-text-muted, #6b7280);\n  font-size: 0.85rem;\n}\n.ingest-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.ingest-btn[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 6px;\n}\n.bubble-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n}\n.bubble-error[_ngcontent-%COMP%] {\n  background: #fdecea !important;\n  color: #b71c1c !important;\n}\n.msg-sources[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.src-ico[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: var(--color-text-muted, #6b7280);\n}\n.src-chip[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  padding: 2px 8px;\n  border-radius: 999px;\n  background: var(--color-surface-alt);\n  color: var(--color-text-muted, #6b7280);\n  border: 1px solid var(--color-border);\n}\n.bubble.typing[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 4px;\n  align-items: center;\n}\n.bubble.typing[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--color-text-muted, #9aa0a6);\n  animation: _ngcontent-%COMP%_typing 1s infinite ease-in-out;\n}\n.bubble.typing[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.15s;\n}\n.bubble.typing[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.3s;\n}\n@keyframes _ngcontent-%COMP%_typing {\n  0%, 60%, 100% {\n    transform: translateY(0);\n    opacity: 0.4;\n  }\n  30% {\n    transform: translateY(-4px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=assistant.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Assistant, [{
    type: Component,
    args: [{ selector: "app-assistant", imports: [
      FormsModule,
      MatCardModule,
      MatIconModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatFormFieldModule,
      MatInputModule,
      MatProgressSpinnerModule
    ], template: `<div class="page-head">
  <h1 class="page-title">Asistente IA</h1>
  <p class="page-subtitle">Habla en lenguaje natural: el asistente puede actuar y responder con tus documentos.</p>
</div>

<mat-card appearance="outlined" class="chat">
  <div class="mode-bar">
    <mat-button-toggle-group
      [value]="mode()"
      (change)="setMode($event.value)"
      hideSingleSelectionIndicator
      aria-label="Modo del asistente">
      <mat-button-toggle value="assistant">
        <mat-icon>bolt</mat-icon> Asistente
      </mat-button-toggle>
      <mat-button-toggle value="support">
        <mat-icon>menu_book</mat-icon> Soporte
      </mat-button-toggle>
    </mat-button-toggle-group>

    <span class="mode-hint">
      @if (mode() === 'assistant') {
        Tool Calling \u2014 consulta saldos y realiza transferencias.
      } @else {
        RAG \u2014 responde con la base de conocimiento (FAQ).
      }
    </span>

    @if (mode() === 'support' && isAdmin) {
      <button
        mat-stroked-button
        type="button"
        class="ingest-btn"
        [disabled]="ingesting()"
        (click)="ingest()">
        @if (ingesting()) {
          <mat-spinner diameter="16"></mat-spinner>
        } @else {
          <mat-icon>upload_file</mat-icon>
        }
        Cargar documentos
      </button>
    }
  </div>

  <div class="chat-body" #chatBody>
    @for (m of messages(); track $index) {
      <div class="msg" [class.msg-user]="m.from === 'user'">
        @if (m.from === 'bot') {
          <span class="msg-avatar"><mat-icon>smart_toy</mat-icon></span>
        }
        <div class="bubble-wrap">
          <span class="bubble" [class.bubble-error]="m.error">{{ m.text }}</span>
          @if (m.sources?.length) {
            <div class="msg-sources">
              <mat-icon class="src-ico">description</mat-icon>
              @for (s of m.sources; track s) {
                <span class="src-chip">{{ s }}</span>
              }
            </div>
          }
        </div>
      </div>
    }

    @if (sending()) {
      <div class="msg">
        <span class="msg-avatar"><mat-icon>smart_toy</mat-icon></span>
        <span class="bubble typing"><span></span><span></span><span></span></span>
      </div>
    }
  </div>

  <div class="suggestions">
    @for (s of suggestions(); track s) {
      <button mat-stroked-button type="button" [disabled]="sending()" (click)="send(s)">
        {{ s }}
      </button>
    }
  </div>

  <form class="chat-input" (ngSubmit)="send()">
    <mat-form-field appearance="outline" class="field-full" subscriptSizing="dynamic">
      <mat-label>Escribe tu mensaje</mat-label>
      <input matInput [(ngModel)]="draft" name="draft" autocomplete="off" [disabled]="sending()" />
    </mat-form-field>
    <button mat-fab color="primary" type="submit" aria-label="Enviar" [disabled]="sending() || !draft.trim()">
      <mat-icon>send</mat-icon>
    </button>
  </form>
</mat-card>
`, styles: ["/* src/app/features/assistant/assistant.css */\n.chat {\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 220px);\n  min-height: 420px;\n  padding: 0;\n  border-radius: var(--radius);\n  overflow: hidden;\n}\n.chat-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.msg {\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n  max-width: 75%;\n}\n.msg-user {\n  align-self: flex-end;\n  flex-direction: row-reverse;\n}\n.msg-avatar {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: var(--color-primary-light);\n  color: var(--color-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.msg-avatar mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.bubble {\n  padding: 10px 14px;\n  border-radius: 14px;\n  background: var(--color-surface-alt);\n  color: var(--color-text);\n  line-height: 1.4;\n}\n.msg-user .bubble {\n  background: var(--color-primary);\n  color: #fff;\n}\n.suggestions {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  padding: 12px 20px 0;\n}\n.chat-input {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-top: 1px solid var(--color-border);\n}\n.mode-bar {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  padding: 14px 20px;\n  border-bottom: 1px solid var(--color-border);\n}\n.mode-bar mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  margin-right: 4px;\n}\n.mode-hint {\n  color: var(--color-text-muted, #6b7280);\n  font-size: 0.85rem;\n}\n.ingest-btn {\n  margin-left: auto;\n}\n.ingest-btn mat-spinner {\n  display: inline-block;\n  margin-right: 6px;\n}\n.bubble-wrap {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n}\n.bubble-error {\n  background: #fdecea !important;\n  color: #b71c1c !important;\n}\n.msg-sources {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.src-ico {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: var(--color-text-muted, #6b7280);\n}\n.src-chip {\n  font-size: 0.72rem;\n  padding: 2px 8px;\n  border-radius: 999px;\n  background: var(--color-surface-alt);\n  color: var(--color-text-muted, #6b7280);\n  border: 1px solid var(--color-border);\n}\n.bubble.typing {\n  display: inline-flex;\n  gap: 4px;\n  align-items: center;\n}\n.bubble.typing span {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--color-text-muted, #9aa0a6);\n  animation: typing 1s infinite ease-in-out;\n}\n.bubble.typing span:nth-child(2) {\n  animation-delay: 0.15s;\n}\n.bubble.typing span:nth-child(3) {\n  animation-delay: 0.3s;\n}\n@keyframes typing {\n  0%, 60%, 100% {\n    transform: translateY(0);\n    opacity: 0.4;\n  }\n  30% {\n    transform: translateY(-4px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=assistant.css.map */\n"] }]
  }], null, { bodyRef: [{ type: ViewChild, args: ["chatBody", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Assistant, { className: "Assistant", filePath: "src/app/features/assistant/assistant.ts", lineNumber: 48 });
})();
export {
  Assistant
};
//# sourceMappingURL=chunk-FZM3IXCR.js.map
