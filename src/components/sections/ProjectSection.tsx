import { Link } from 'react-router-dom';

const ProjectSection = () => {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <span>HTML</span>
      </div>
      <div>
        <h2>Project XYZ</h2>
        <p>Get answers to your kahoot quiz</p>
        <Link
          to="/"
          className="inline-flex items-center whitespace-nowrap btn-shadow border border-primary-purple hover:bg-primary-purple hover:bg-opacity-80 text-white px-6 py-1 text-base font-normal"
        >
          Live
        </Link>
      </div>
    </div>
  );
};

export default ProjectSection;
