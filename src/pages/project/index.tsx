import Footer from '../../components/navigation/Footer';
import Header from '../../components/navigation/Header';
import CompleteProject from '../../components/sections/project/CompleteProject';
import SmallProjects from '../../components/sections/project/SmallProjects';
import { projectPageData } from '../../mock';

const Project = () => {
  return (
    <div>
      <Header />
      <CompleteProject data={projectPageData} />
      <SmallProjects data={projectPageData} />
      <Footer />
    </div>
  );
};

export default Project;
