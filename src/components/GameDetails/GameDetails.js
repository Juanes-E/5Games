/**
 * Sanitiza texto para evitar inyecciones o errores de HTML malicioso
 * @param {string} input
 * @returns {string}
 */
export function sanitizeText(input) {
    return input
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
  
  /**
   * Valida que un video de YouTube tenga el formato adecuado
   * @param {string} url
   * @returns {boolean}
   */
  export function isValidYouTubeEmbed(url) {
    const ytPattern = /^https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]+$/;
    return ytPattern.test(url);
  }
  
  /**
   * Retorna una versión acortada del tamaño del juego (por si queremos usarlo en resumen)
   * @param {string} size
   * @returns {string}
   */
  export function getShortSize(size) {
    return size.replace('GB', '').trim() + ' GB';
  }
  