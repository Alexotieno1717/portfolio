import { IAboutPage } from '../../../../types';

interface aboutSkillsProps {
  data: IAboutPage;
}

function AboutSkills({ data }: aboutSkillsProps) {
  return (
    <div className="lg:max-w-4xl xl:max-w-[1031px] mx-auto px-4 lg:px-0 mt-10 lg:mt-0 lg:pb-20">
      <div className="mb-6">
        <h1 className="text-3xl font-medium text-white">
          <span className="text-primary-purple">#</span>
          Skills
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
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
}

export default AboutSkills;
