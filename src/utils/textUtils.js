/**
 * Utility function to format text
 * @param {string} text - Text to format
 * @returns {string} Formatted text
 */
export const formatText = (text) => {
  return text.trim();
};

/**
 * Utility function to capitalize first letter
 * @param {string} text - Text to capitalize
 * @returns {string} Capitalized text
 */
export const capitalizeFirstLetter = (text) => {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
};
