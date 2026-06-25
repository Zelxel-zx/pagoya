import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  ChatRequest,
  ChatResponse,
  IngestResult,
  SupportAnswer,
} from '../../shared/models/ai.model';

@Injectable({ providedIn: 'root' })
export class AiService {
  private http = inject(HttpClient);
  private base = environment.aiUrl;

  /** Tool Calling: el asistente consulta cuentas y ejecuta transferencias. */
  transfer(message: string): Observable<ChatResponse> {
    const body: ChatRequest = { message };
    return this.http.post<ChatResponse>(`${this.base}/transfer`, body);
  }

  /** RAG: responde preguntas de soporte usando los documentos (FAQ). */
  supportAsk(message: string): Observable<SupportAnswer> {
    const body: ChatRequest = { message };
    return this.http.post<SupportAnswer>(`${this.base}/support/ask`, body);
  }

  /** RAG (solo ADMIN): ingesta los PDF de docs/ al vector store. */
  ingest(): Observable<IngestResult> {
    return this.http.post<IngestResult>(`${this.base}/support/ingest`, {});
  }
}
