// API Client (Future Integration Layer)
// Handles external API requests for market data, pricing, and automation.

class APIClient {
  constructor(baseURL, options = {}) {
    this.baseURL = baseURL;
    this.defaultHeaders = options.headers || {
      "Content-Type": "application/json"
    };
  }

  // 🔍 Generic request handler
  async request(endpoint, method = "GET", data = null, customHeaders = {}) {
    try {
      const config = {
        method,
        headers: {
          ...this.defaultHeaders,
          ...customHeaders
        }
      };

      if (data) {
        config.body = JSON.stringify(data);
      }

      const response = await fetch(`${this.baseURL}${endpoint}`, config);

      // Handle HTTP errors
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API Error ${response.status}: ${errorText}`);
      }

      // Parse JSON safely
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        return await response.json();
      }

      return await response.text();

    } catch (error) {
      console.error("API Request Failed:", error.message);
      throw error;
    }
  }

  // 📥 GET request
  async get(endpoint, headers = {}) {
    return this.request(endpoint, "GET", null, headers);
  }

  // 📤 POST request
  async post(endpoint, data, headers = {}) {
    return this.request(endpoint, "POST", data, headers);
  }

  // 📝 PUT request
  async put(endpoint, data, headers = {}) {
    return this.request(endpoint, "PUT", data, headers);
  }

  // ❌ DELETE request
  async delete(endpoint, headers = {}) {
    return this.request(endpoint, "DELETE", null, headers);
  }
}

export default APIClient;