const API_URL = "http://localhost:8000";

const getToken = () => localStorage.getItem("token");

const handleApiError = (error: any, operation: string) => {
  if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
    throw new Error(`Backend server not available. Please ensure the API server is running on ${API_URL}`);
  }
  throw error;
};

const api = {
  async registerUser(userData: any) {
    try {
      const response = await fetch(`${API_URL}/auth/registerUser`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      return response.json();
    } catch (error) {
      handleApiError(error, 'registerUser');
    }
  },

  async registerOrg(orgData: any) {
    try {
      const response = await fetch(`${API_URL}/auth/registerOrg`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orgData),
      });
      return response.json();
    } catch (error) {
      handleApiError(error, 'registerOrg');
    }
  },

  async login(credentials: any) {
    try {
      const form = new URLSearchParams();
      form.set("grant_type", "password");
      form.set("username", credentials.username);
      form.set("password", credentials.password);
      form.set("scope", "");

      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: form,
      });
      const data = await response.json();
      if (data.access_token) {
        localStorage.setItem("token", data.access_token);
      }
      return data;
    } catch (error) {
      handleApiError(error, 'login');
    }
  },

  async getBlogs() {
    try {
      const response = await fetch(`${API_URL}/blogs`);
      return response.json();
    } catch (error) {
      handleApiError(error, 'getBlogs');
    }
  },

  async ingestAudio(sessionId: string, userId: string, blogId: string, file: File) {
    try {
      const formData = new FormData();
      formData.append("session_id", sessionId);
      formData.append("user_id", userId);
      formData.append("blog_id", blogId);
      formData.append("file", file);

      const response = await fetch(`${API_URL}/ingest`, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Failed to ingest audio");
      }
      return response.json();
    } catch (error) {
      handleApiError(error, 'ingestAudio');
    }
  },

  async ingestBlog(blogData: any) {
    try {
      const formData = new FormData();
      formData.append("ownerType", blogData.ownerType);
      formData.append("ownerId", blogData.ownerId);
      formData.append("blogId", blogData.blogId);
      formData.append("title", blogData.title);
      formData.append("description", blogData.description);
      formData.append("content", blogData.content);

      const response = await fetch(`${API_URL}/blog/ingest`, {
        method: "POST",
        body: formData,
      });
      return response.json();
    } catch (error) {
      handleApiError(error, 'ingestBlog');
    }
  },

  async chat(endpoint: string, data: any) {
    try {
      const response = await fetch(`${API_URL}/chat/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Chat request failed");
      }
      return response.json();
    } catch (error) {
      handleApiError(error, 'chat');
    }
  }
};

export default api;
