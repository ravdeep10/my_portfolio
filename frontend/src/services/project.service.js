import apiClient from "./apiClient";

export const fetchProjects = async ()=>{
    const response = await apiClient.get('/public/projects');
    return response.data.data;
}

export const fetchFeaturedProjects = async ()=>{
    const response = await apiClient.get('/public/projects/featured');
    return response.data.data;
}

export const fetchProjectBySlug = async (slug) => {
  const response = await apiClient.get(`/public/projects/${slug}`);
  return response.data.data;
};