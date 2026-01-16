import apiClient from "./apiClient";

export const submitContact = async (payload) => {
  const response = await apiClient.post("/public/contact", payload);
  return response.data;
};
