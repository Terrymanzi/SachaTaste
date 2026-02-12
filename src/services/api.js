/**
 * API service for handling HTTP requests
 * Configure your API endpoints and methods here
 */

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

/**
 * Generic fetch wrapper
 * @param {string} endpoint - API endpoint
 * @param {object} options - Fetch options
 * @returns {Promise} Response data
 */
const fetchAPI = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

/**
 * Example API methods
 */
export const api = {
  // Menu items
  getMenuItems: () => fetchAPI("/menu"),

  // Team members
  getTeamMembers: () => fetchAPI("/team"),

  // Contact form
  submitContact: (data) =>
    fetchAPI("/contact", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};
