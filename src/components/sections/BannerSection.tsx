import img from '../../assets/Home_art 1.svg';
import { ISectionBanner } from '../../../types';

interface BannerSectionProps {
  data: ISectionBanner;
}

const BannerSection = ({ data }: BannerSectionProps) => {
  return (
    <div className="lg:max-w-4xl xl:max-w-[1031px]  flex flex-wrap items-center justify-between mx-auto px-4 lg:px-0 py-20">
      <div className="grid grid-cols-2">
        <div>
          <p>
            {data.title} <span>{data.keyword}</span>
          </p>
        </div>
      </div>
      <div>
        <img src={img} alt="svg home art" className="w-96" />
      </div>
    </div>
  );
};

export default BannerSection;
