import { useState, useEffect } from "react";
import { fetchProjects } from "../services/project.service";
import Loader from "../components/common/Laoder";
import ErrorMessage from "../components/common/ErrorMessage";
import ProjectCard from "../components/projects/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError("Failed to fetch projects",err)
      }finally{
        setLoading(false)
      }
    };
    loadProjects();
  },[]);

  if(loading) return <Loader />;
  if(error) return <ErrorMessage />;

  return (
    <div>
        <h1>Projects</h1>
        {projects.map(project =>(
            <ProjectCard key = {project.id} project = {project} />
        ))}
    </div>
  )
};
 
export default Projects;