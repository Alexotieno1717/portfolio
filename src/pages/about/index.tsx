import Footer from '../../components/navigation/Footer';
import Header from '../../components/navigation/Header';
import AboutSkills from '../../components/sections/about/AboutSkills';
import AboutTopSection from '../../components/sections/about/AboutTopSection';
import FanFacts from '../../components/sections/about/FanFacts';
import { AboutPageData } from '../../mock';

const About = () => {
  return (
    <div>
      <Header />
      <AboutTopSection data={AboutPageData} />
      <AboutSkills data={AboutPageData} />
      <FanFacts />
      <Footer />
    </div>
  );
};

export default About;
