import Footer from '../../components/navigation/Footer';
import Header from '../../components/navigation/Header';
import BannerSection from '../../components/sections/BannerSection';
import HomeAbout from '../../components/sections/HomeAbout';
import HomeContact from '../../components/sections/HomeContact';
import HomeSkills from '../../components/sections/HomeSkills';
import ProjectSection from '../../components/sections/ProjectSection';
import { HomePageData } from '../../mock';

function HomePage() {
  return (
    <div>
      <Header />
      <BannerSection data={HomePageData} />
      <ProjectSection data={HomePageData} />
      <HomeAbout data={HomePageData} />
      <HomeSkills data={HomePageData} />
      <HomeContact data={HomePageData} />
      <Footer />
    </div>
  );
}

export default HomePage;
