import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProjectBySlug } from "../services/project.service";
import Loader from "../components/common/Laoder";
import ErrorMessage from "../components/common/ErrorMessage";

const ProjectDetail = () => {
  const { slug } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProject = async () => {
      try {
        const data = await fetchProjectBySlug(slug);
        setProject(data);
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError("Project not found");
      } finally {
        setLoading(false);
      }
    };
    loadProject();
  },[slug]);

  if(loading) return <Loader />;
  if(error) return <ErrorMessage message={error}/>

  return (
    <article>
        <h1>{project.title}</h1>
         <p>{project.shortDescription}</p>

          <section>
        <h3>Problem</h3>
        <p>{project.problem}</p>
      </section>

      <section>
        <h3>Solution</h3>
        <p>{project.solution}</p>
      </section>

      <section>
        <h3>Impact</h3>
        <p>{project.impact}</p>
      </section>

      <section>
        <h3>Tech Stack</h3>
        <ul>
            {project.techStack.map(tech => (
                <li key={tech}>{tech}</li>
            ))}
        </ul>
        </section>

        {
            project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer">Github Repository</a>
            )
        }
    </article>
  )

};

export default ProjectDetail;
