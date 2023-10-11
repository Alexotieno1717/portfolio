import { Link } from 'react-router-dom';
import img from '../../assets/Rectangle.jpg';

const ProjectSection = () => {
  return (
    <section className="lg:max-w-4xl xl:max-w-[1031px] mx-auto px-4 lg:px-0 lg:py-20">
      <div className="grid grid-cols-2 gap-52 mb-12">
        <div className="flex">
          <h1 className="text-3xl font-medium text-white">
            <span className="text-primary-purple">#</span>
            Projects
          </h1>
          <div className="hidden md:block mt-4 ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="511" height="2" viewBox="0 0 511 2" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M511 1.5H0V0.5H511V1.5Z" fill="#C778DD" />
            </svg>
          </div>
        </div>
        <div className="hidden md:block">
          <p className="text-right">View all ~~&gt;</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border">
          <div>
            <img src={img} alt="" className="w-full" />
          </div>
          <div className="border px-2 py-2">
            <span>HTML CSS Tailwind JS</span>
          </div>
          <div className="py-4 px-4">
            <h2>Project XYZ</h2>
            <p className="pt-4 pb-4">Get answers to your kahoot quiz</p>
            <Link
              to="/"
              className="inline-flex items-center whitespace-nowrap btn-shadow border border-primary-purple hover:bg-primary-purple hover:bg-opacity-80 text-white px-6 py-1 text-base font-normal"
            >
              Live
            </Link>
          </div>
        </div>

        <div className="border">
          <div>
            <img src={img} alt="" />
          </div>
          <div className="border px-2 py-2">
            <span>HTML CSS Tailwind JS</span>
          </div>
          <div className="py-4 px-4">
            <h2>Project XYZ</h2>
            <p className="pt-4 pb-4">Get answers to your kahoot quiz</p>
            <Link
              to="/"
              className="inline-flex items-center whitespace-nowrap btn-shadow border border-primary-purple hover:bg-primary-purple hover:bg-opacity-80 text-white px-6 py-1 text-base font-normal"
            >
              Live
            </Link>
          </div>
        </div>

        <div className="border">
          <div>
            <img src={img} alt="" />
          </div>
          <div className="border px-2 py-2">
            <span>HTML CSS Tailwind JS</span>
          </div>
          <div className="py-4 px-4">
            <h2>Project XYZ</h2>
            <p className="pt-4 pb-4">Get answers to your kahoot quiz</p>
            <Link
              to="/"
              className="inline-flex items-center whitespace-nowrap btn-shadow border border-primary-purple hover:bg-primary-purple hover:bg-opacity-80 text-white px-6 py-1 text-base font-normal"
            >
              Live
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
