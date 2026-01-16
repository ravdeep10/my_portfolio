import { Link } from "react-router-dom";
import './project.css';
const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>
        <Link to={`/projects/${project.slug}`}>{project.title}</Link>
      </h3>

      <p className="project-desc">{project.shortDescription}</p>

      <ul className="tech-list">
        {project.techStack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
