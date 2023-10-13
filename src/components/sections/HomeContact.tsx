import { IHomePage } from '../../../types';

interface homeContactProps {
  data: IHomePage;
}

const HomeContact = ({ data }: homeContactProps) => {
  return (
    <div className="lg:max-w-4xl xl:max-w-[1031px] mx-auto px-4 lg:px-0 mt-10 mb-8 lg:mb-0 lg:mt-0 lg:pb-20">
      <div className="flex mb-6">
        <h1 className="text-3xl font-medium text-white">
          <span className="text-primary-purple">#</span>
          {data.contacts.title}
        </h1>
        <div className="hidden md:block mt-4 ml-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="511" height="2" viewBox="0 0 511 2" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M511 1.5H0V0.5H511V1.5Z" fill="#C778DD" />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-14">
        <div className="col-span-12 md:col-span-8">
          <p>{data.contacts.description}</p>
        </div>
        <div className="col-span-12 md:col-span-4">
          <h2 className="text-base font-semibold">{data.contacts.subTitle}</h2>
          <div className="flex mt-2">
            <img src={data.contacts.img} alt={data.contacts.title} className="" />
            <p className="text-primary-gray text-base font-normal pt-1 pl-2">{data.contacts.imgText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
