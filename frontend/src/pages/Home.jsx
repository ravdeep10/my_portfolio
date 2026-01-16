import Hero from '../components/hero/Hero';
import Summary from '../components/summary/Summary';
import FeaturedProjects from '../components/projects/FeaturedProjects';
import ExperienceSection from '../components/experience/Experience';
import ContactForm from '../components/contact/Contact';

const Home = ()=>{
    return (
        <main className='page'>
            <Hero />
            <Summary />
            <FeaturedProjects />
            <ExperienceSection />
            <ContactForm/>
        </main>
    )
}

export default Home;