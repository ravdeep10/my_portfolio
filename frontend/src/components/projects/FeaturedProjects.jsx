import { useEffect, useState } from 'react';
import { fetchFeaturedProjects } from '../../services/project.service';
import Loader from '../common/Laoder';
import ErrorMessage from '../common/ErrorMessage';
import ProjectCard from './ProjectCard';

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFeatured = async () => {
      try {
        const data = await fetchFeaturedProjects();
        setProjects(data);
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError('Unable to load featured projects');
      } finally {
        setLoading(false);
      }
    };

    loadFeatured();
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h2>Featured Projects</h2>
      {projects.map(project => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </section>
  );
};

export default FeaturedProjects;
