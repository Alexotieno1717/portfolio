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
      <div className="grid grid-cols-12 gap-8 md:gap-14">
        <div className="col-span-12 md:col-span-8">
          <p>{data.contacts.description}</p>
        </div>
        <div className="col-span-12 md:col-span-4 border py-2 px-2">
          <h2 className="text-base font-semibold pb-2">{data.contacts.contacts.title}</h2>
          {data.contacts.contacts.contact.map((item, index) => (
            <div className="flex mb-2" key={index}>
              <img className="w-6" src={item.img} alt={item.id} />
              <p className="text-sm font-normal text-primary-gray pt-1  pl-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
