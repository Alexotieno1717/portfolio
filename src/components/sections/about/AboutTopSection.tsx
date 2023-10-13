import { IAboutPage } from '../../../../types';

interface aboutTopSectionProps {
  data: IAboutPage;
}

function AboutTopSection({ data }: aboutTopSectionProps) {
  return (
    <div className="lg:max-w-4xl xl:max-w-[1031px] mx-auto px-4 lg:px-0 mt-10 lg:py-20">
      <div className="mb-6">
        <h1 className="text-3xl font-medium text-white">
          <span className="text-primary-purple">/</span>
          {data.title}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-40">
        <div className="text-primary-gray text-base font-normal">
          <p className="pt-3">Hello I am Alex</p>
          <p className="pt-28">{data.description}</p>
        </div>
        <div>
          <img src={data.img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutTopSection;
