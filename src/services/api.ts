import axios from "axios";

const API_BASE_URL = "https://bpmiwebsitebackend.watchdoglogisticsng.com/api/member";

export const eventsApi = {
  getUpcomingEvents: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/upcoming-events/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching upcoming events:", error);
      throw error;
    }
  },

  getAllEvents: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/events/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching all events:", error);
      throw error;
    }
  },

  submitMembership: async (formData: FormData) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/become-member/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error submitting membership form:", error);
      throw error;
    }
  },
};
