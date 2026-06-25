/** Petición de chat hacia el módulo de IA. */
export interface ChatRequest {
  message: string;
}

/** Respuesta del asistente de Tool Calling (POST /ai/transfer). */
export interface ChatResponse {
  reply: string;
}

/** Respuesta del soporte con RAG (POST /ai/support/ask). */
export interface SupportAnswer {
  reply: string;
  answeredFromDocs: boolean;
  sources: string[];
}

/** Resultado de la ingesta de documentos (POST /ai/support/ingest, admin). */
export interface IngestResult {
  chunksIngested: number;
}

/** Modo del asistente: acciones (Tool Calling) o preguntas (RAG). */
export type AssistantMode = 'assistant' | 'support';
