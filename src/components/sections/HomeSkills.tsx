import { IHomePage } from '../../../types';

interface homeSkillsProps {
  data: IHomePage;
}

const HomeSkills = ({ data }: homeSkillsProps) => {
  return (
    <div className="lg:max-w-4xl xl:max-w-[1031px] mx-auto px-4 lg:px-0 mt-10 lg:mt-0 lg:py-20">
      <div className="flex mb-6">
        <h1 className="text-3xl font-medium text-white">
          <span className="text-primary-purple">#</span>
          {data.skills.title}
        </h1>
        <div className="hidden md:block mt-4 ml-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="511" height="2" viewBox="0 0 511 2" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M511 1.5H0V0.5H511V1.5Z" fill="#C778DD" />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {data.skills.skill.map((item, index) => (
          <div className="border border-primary-gray" key={index}>
            <h1 className="text-white text-base font-semibold border-b border-b-primary-gray py-2 px-2">
              {item.title}
            </h1>
            <p className="text-primary-gray text-base font-normal py-2 px-2">{item.languages}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSkills;
