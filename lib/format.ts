/** Formata data ISO em pt-BR ("30 de junho de 2026"). T12:00:00 evita shift de fuso. */
export const formatarData = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
