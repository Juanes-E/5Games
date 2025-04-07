/**
 * Devuelve el título SEO para una página específica.
 * @param {string} baseTitle - Título base del sitio
 * @param {string} [pageTitle] - Título específico de la página (opcional)
 * @returns {string}
 */
export function generateTitle(baseTitle, pageTitle = "") {
    return pageTitle ? `${pageTitle} | ${baseTitle}` : baseTitle;
  }
  
  /**
   * Devuelve la descripción SEO truncada a 160 caracteres
   * @param {string} description
   * @returns {string}
   */
  export function generateMetaDescription(description) {
    if (!description) return "Encuentra los mejores juegos en 5Games.";
    return description.length > 160
      ? description.slice(0, 157).trim() + "..."
      : description;
  }
  
  /**
   * Genera etiquetas meta comunes para el SEO (puede extenderse con Open Graph, Twitter Cards, etc.)
   * @param {Object} options
   * @param {string} options.title
   * @param {string} options.description
   * @returns {Array<{ name: string, content: string }>}
   */
  export function getMetaTags({ title, description }) {
    return [
      { name: "title", content: title },
      { name: "description", content: generateMetaDescription(description) },
    ];
  }
  