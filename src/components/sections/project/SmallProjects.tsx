import { Link } from 'react-router-dom';
import { IProjectPage } from '../../../../types';

interface smallProjectProps {
  data: IProjectPage;
}

const SmallProjects = ({ data }: smallProjectProps) => {
  return (
    <div className="lg:max-w-4xl xl:max-w-[1031px] mx-auto px-4 lg:px-0 mb-8">
      <div className="py-12">
        <h1 className="text-3xl font-medium text-white">
          <span className="text-primary-purple">#</span>
          {data.smallProject.title}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.smallProject.items.map((item, index) => (
          <div className="border border-primary-gray" key={index}>
            <div className="border-b border-b-primary-gray px-2 py-2">
              <p className="text-sm font-normal text-primary-gray">{item.language}</p>
            </div>
            <div className="py-4 px-4">
              <h2 className="text-2xl font-medium">{item.title}</h2>
              <p className="text-sm font-normal text-primary-gray pt-4 pb-4">{item.description}</p>
              <Link
                to={item.buttonLink}
                target="_blank"
                className="inline-flex items-center whitespace-nowrap btn-shadow border border-primary-purple hover:bg-primary-purple hover:bg-opacity-80 text-white px-6 py-1 text-base font-medium"
              >
                {item.buttonLable} {'<~>'}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallProjects;
