/**
 * Utility function to validate email
 * @param {string} email - Email to validate
 * @returns {boolean} Is email valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
