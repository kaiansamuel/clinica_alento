"use server";

/**
 * Server action do formulário de contato — PRD §3.
 * Simula o processamento (~1.2s) e retorna sucesso: o valor do form
 * é a animação de fluxo pós-envio (PRD §5.5), não um backend real.
 */

export type ContatoState = {
  ok: boolean;
  erro?: string;
};

export async function enviarContato(
  _prevState: ContatoState,
  formData: FormData,
): Promise<ContatoState> {
  const nome = String(formData.get("nome") ?? "").trim();
  const mensagem = String(formData.get("mensagem") ?? "").trim();

  if (!nome || !mensagem) {
    return { ok: false, erro: "Preencha seu nome e a mensagem antes de enviar." };
  }

  await new Promise((resolve) => setTimeout(resolve, 1200));

  return { ok: true };
}
