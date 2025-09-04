// Simplified API service without authentication
const api = {
  async getBlogs() {
    // Mock data for demonstration
    return [
      {
        blogId: "1",
        title: "Getting Started with PANDA",
        description: "Learn the basics of knowledge transformation",
        content: "Welcome to PANDA..."
      },
      {
        blogId: "2", 
        title: "Advanced AI Features",
        description: "Explore powerful AI capabilities",
        content: "Discover how to..."
      }
    ];
  },

  async ingestAudio(sessionId: string, userId: string, blogId: string, file: File) {
    // Simulate audio processing
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: "Audio processed successfully (demo mode)" });
      }, 2000);
    });
  },

  async ingestBlog(blogData: any) {
    // Simulate blog ingestion
    return { message: "Blog ingested successfully (demo mode)" };
  },

  async chat(endpoint: string, data: any) {
    // Simulate chat response
    return { 
      answer: `This is a demo response for your question: "${data.question}". In a real implementation, this would connect to your AI backend.`
    };
  }
};

export default api;