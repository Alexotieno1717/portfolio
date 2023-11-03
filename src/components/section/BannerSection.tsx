import Link from "next/link";
import { IHomePage } from "../../../types";

interface BannerSectionProps {
  data: IHomePage;
}

const BannerSection = ({ data }: BannerSectionProps) => {
  return (
    <div className="lg:max-w-4xl xl:max-w-[1031px]  flex flex-wrap items-center justify-between mx-auto px-4 lg:px-0 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h1 className="text-xl md:text-3xl font-semibold text-white pt-6 md:pt-32">
            {data.landingHero.title}{" "}
            <span className="text-primary-purple">
              {data.landingHero.keyword}
            </span>{" "}
            and
            <span className="text-primary-purple">
              {" "}
              {data.landingHero.Keyword1}
            </span>
          </h1>
          <p className="text-primary-gray text-base font-normal pt-8 pb-6">
            {data.landingHero.description}
          </p>
          <Link
            href={data.landingHero.buttonLink}
            className="inline-flex items-center whitespace-nowrap btn-shadow border border-primary-purple hover:bg-primary-purple hover:bg-opacity-80 text-white px-6 py-1 text-base font-normal"
          >
            {data.landingHero.buttonLable}
          </Link>
        </div>
        <div className="hidden md:block">
          <img
            src={data.landingHero.img}
            alt="svg home art"
            className="w-[505px] h-[397px] pt-16"
          />
          <div className="flex gap-2 border border-primary-gray w-[80%] ml-14 py-2 px-2">
            <div className="bg-primary-purple w-4 h-4 mt-1 ml-"></div>
            <p className="text-primary-gray text-base font-semibold">
              Currently Working on{" "}
              <span className="text-white">Olive tree CMS</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
