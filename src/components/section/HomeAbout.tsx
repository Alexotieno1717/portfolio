import Link from 'next/link';
import { IHomePage } from '../../../types';

interface homeAboutProps {
  data: IHomePage;
}

function HomeAbout({ data }: homeAboutProps) {
  return (
    <div className="lg:max-w-4xl xl:max-w-[1031px] mx-auto px-4 lg:px-0 mt-10 lg:mt-0">
      <div className="flex mb-6">
        <h1 className="text-3xl font-medium text-white">
          <span className="text-primary-purple">#</span>
          {data.aboutMe.title}
        </h1>
        <div className="hidden md:block mt-4 ml-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="511" height="2" viewBox="0 0 511 2" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M511 1.5H0V0.5H511V1.5Z" fill="#C778DD" />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-40">
        <div className="text-primary-gray text-base font-normal">
          <p className="pb-14">Hello I am Alex</p>
          <p className="pb-6">{data.aboutMe.descrption}</p>

          <Link
            href={data.aboutMe.buttonLink}
            className="inline-flex items-center whitespace-nowrap btn-shadow border border-primary-purple hover:bg-primary-purple hover:bg-opacity-80 text-white px-6 py-1 text-base font-normal"
          >
            {data.aboutMe.buttonLable} -&gt;
          </Link>
          <p>ddjjjdjndjdjdnj</p>
        </div>
        <div>
          <img src={data.aboutMe.img} alt={data.aboutMe.title} />
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
