import { Link } from 'react-router-dom';
import img from '../../../assets/Rectangle.jpg';

function CompleteProject() {
  return (
    <div className="lg:max-w-4xl xl:max-w-[1031px] mx-auto px-4 lg:px-0 mt-10 lg:py-20">
      <div className="mb-6">
        <h1 className="text-3xl font-medium text-white">
          <span className="text-primary-purple">/</span>
          Projects
        </h1>
        <p className="pt-2">List of my Projects</p>
      </div>
      <div className="py-12">
        <h1 className="text-3xl font-medium text-white">
          <span className="text-primary-purple">#</span>
          complete-apps
        </h1>
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
    </div>
  );
}

export default CompleteProject;