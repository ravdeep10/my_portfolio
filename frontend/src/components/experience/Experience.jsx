import { useEffect, useState } from 'react';
import { fetchExperience } from '../../services/experience.service';
import Loader from '../common/Laoder';
import ErrorMessage from '../common/ErrorMessage';
import './experience.css';

const ExperienceSection = () => {
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadExperience = async () => {
      try {
        const data = await fetchExperience();
        setExperience(data);
      } catch {
        setError('Failed to load experience');
      } finally {
        setLoading(false);
      }
    };

    loadExperience();
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section className="experience">
      <h2>Experience</h2>

      {experience.map(item => (
        <div key={item._id} className="experience-item">
          <h3 className="experience-title">
            {item.role} — {item.company}
          </h3>

          <p className="experience-date">
            {new Date(item.startDate).toLocaleDateString()} –{' '}
            {item.endDate
              ? new Date(item.endDate).toLocaleDateString()
              : 'Present'}
          </p>

          <div className="experience-block">
            <h4>Responsibilities</h4>
            {item.responsibilities.map((r, idx) => (
              <p key={idx}>{r}</p>
            ))}
          </div>

          <div className="experience-block">
            <h4>Achievements</h4>
            {item.achievements.map((a, idx) => (
              <p key={idx}>{a}</p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ExperienceSection;
