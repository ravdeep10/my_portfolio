import apiClient from "./apiClient";

export const fetchExperience = async () => {
  const response = await apiClient.get("/public/experience");
  return response.data.data;
};
