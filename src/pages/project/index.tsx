import Footer from '../../components/navigation/Footer';
import Header from '../../components/navigation/Header';
import CompleteProject from '../../components/sections/project/CompleteProject';
import SmallProjects from '../../components/sections/project/SmallProjects';

const Project = () => {
  return (
    <div>
      <Header />
      <CompleteProject />
      <SmallProjects />
      <Footer />
    </div>
  );
};

export default Project;
