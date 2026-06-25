import { Component, ElementRef, computed, inject, signal, viewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AiService } from '../../core/services/ai.service';
import { TokenService } from '../../core/services/token.service';
import { apiErrorMessage } from '../../core/services/api-error';
import { AssistantMode } from '../../shared/models/ai.model';

interface Message {
  from: 'user' | 'bot';
  text: string;
  sources?: string[];
  error?: boolean;
}

const GREETING: Record<AssistantMode, string> = {
  assistant:
    '¡Hola! Soy tu asistente de PagoYa. Puedo consultar tus cuentas y hacer ' +
    'transferencias por ti. ¿Qué necesitas?',
  support:
    'Modo soporte: respondo tus dudas usando la base de conocimiento de PagoYa ' +
    '(preguntas frecuentes). ¿En qué te ayudo?',
};

@Component({
  selector: 'app-assistant',
  imports: [
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './assistant.html',
  styleUrl: './assistant.css',
})
export class Assistant {
  private ai = inject(AiService);
  private tokens = inject(TokenService);
  private snack = inject(MatSnackBar);

  private bodyRef = viewChild<ElementRef<HTMLElement>>('chatBody');

  isAdmin = this.tokens.role === 'ADMIN';

  draft = '';
  mode = signal<AssistantMode>('assistant');
  sending = signal(false);
  ingesting = signal(false);
  messages = signal<Message[]>([{ from: 'bot', text: GREETING.assistant }]);

  suggestions = computed(() =>
    this.mode() === 'assistant'
      ? ['¿Cuánto tengo en mis cuentas?', 'Envía 50 soles a 987654321']
      : ['¿Cómo abro una cuenta?', '¿Qué comisiones tiene una transferencia?'],
  );

  setMode(mode: AssistantMode): void {
    if (mode === this.mode()) return;
    this.mode.set(mode);
    this.messages.set([{ from: 'bot', text: GREETING[mode] }]);
    this.draft = '';
  }

  send(text: string = this.draft): void {
    const value = text.trim();
    if (!value || this.sending()) return;

    this.push({ from: 'user', text: value });
    this.draft = '';
    this.sending.set(true);

    if (this.mode() === 'assistant') {
      this.ai.transfer(value).subscribe({
        next: res => {
          this.push({ from: 'bot', text: res.reply });
          this.sending.set(false);
        },
        error: err => this.fail(err),
      });
    } else {
      this.ai.supportAsk(value).subscribe({
        next: res => {
          this.push({ from: 'bot', text: res.reply, sources: res.sources });
          this.sending.set(false);
        },
        error: err => this.fail(err),
      });
    }
  }

  ingest(): void {
    if (this.ingesting()) return;
    this.ingesting.set(true);
    this.ai.ingest().subscribe({
      next: res => {
        this.ingesting.set(false);
        this.snack.open(
          `Documentos cargados: ${res.chunksIngested} fragmentos.`,
          'OK',
          { duration: 4000 },
        );
      },
      error: err => {
        this.ingesting.set(false);
        this.snack.open(apiErrorMessage(err, 'No se pudo ingestar.'), 'OK', {
          duration: 4000,
        });
      },
    });
  }

  private fail(err: HttpErrorResponse): void {
    this.push({
      from: 'bot',
      text: apiErrorMessage(err, 'No pude procesar tu solicitud. Intenta de nuevo.'),
      error: true,
    });
    this.sending.set(false);
  }

  private push(msg: Message): void {
    this.messages.update(list => [...list, msg]);
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      const el = this.bodyRef()?.nativeElement;
      if (el) el.scrollTop = el.scrollHeight;
    });
  }
}
