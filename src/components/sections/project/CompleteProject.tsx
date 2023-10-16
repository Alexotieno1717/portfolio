import { Link } from 'react-router-dom';
import { IProjectPage } from '../../../../types';

interface completeProjectProps {
  data: IProjectPage;
}

function CompleteProject({ data }: completeProjectProps) {
  return (
    <div className="lg:max-w-4xl xl:max-w-[1031px] mx-auto px-4 lg:px-0 mt-24 lg:mt-0  lg:py-20">
      <div className="mb-6">
        <h1 className="text-3xl font-medium text-white">
          <span className="text-primary-purple">/</span>
          {data.header}
        </h1>
        <p className="pt-2">{data.descrption}</p>
      </div>
      <div className="py-12">
        <h1 className="text-3xl font-medium text-white">
          <span className="text-primary-purple">#</span>
          complete-apps
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.Projects.items.map((item, index) => (
          <div className="border border-primary-gray" key={index}>
            <div>
              <img src={item.img} alt={item.title} className="w-full" />
            </div>
            <div className="border-b border-b-primary-gray px-2 py-2">
              <p className="text-sm font-normal text-primary-gray">{item.languages}</p>
            </div>
            <div className="py-4 px-4">
              <h2 className="text-2xl font-medium">{item.title}</h2>
              <p className="text-primary-gray text-sm font-normal pt-4 pb-4">{item.description}</p>
              <Link
                to={item.buttonLink}
                target="_blank"
                className="inline-flex items-center whitespace-nowrap btn-shadow border border-primary-purple hover:bg-primary-purple hover:bg-opacity-80 text-white px-6 py-1 text-base font-normal transition-all ease-in-out delay-150"
              >
                {item.buttonLable}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompleteProject;
