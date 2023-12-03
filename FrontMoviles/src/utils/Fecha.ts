export function formatFecha(fecha: string) {
  const fechaOriginal = new Date(fecha);
  const fechaFormateada = fechaOriginal.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return fechaFormateada;
}
