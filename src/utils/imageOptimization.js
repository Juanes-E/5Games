/**
 * Devuelve los atributos recomendados para una imagen optimizada.
 *
 * @param {string} src - Ruta base de la imagen (sin el path completo).
 * @param {string} alt - Texto alternativo para accesibilidad.
 * @param {object} [options] - Opciones adicionales.
 * @param {boolean} [options.lazy=true] - Si debe usar carga diferida.
 * @param {string} [options.className=""] - Clases CSS adicionales.
 * @returns {object} - Atributos HTML para aplicar a una <img />
 */
export function getImageAttributes(src, alt, options = {}) {
    return {
      src, // Usa la ruta tal cual está en games.js (ya es absoluta)
      alt,
      ...options
    };
  }
  
  