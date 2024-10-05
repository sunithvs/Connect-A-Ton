import axios from "axios";

export const fetchUserDetails = async () => {
  const token = localStorage.getItem("authToken");

  if (!token) {
    throw new Error("No token found. Please log in.");
  }

  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/authentication/profile/`,
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  }
};
