import img from '../../assets/logo.svg';
import twitter from '../../assets/Twitter.svg';
import linkedin from '../../assets/Linkedin.svg';
import github from '../../assets/github.svg';

const Footer = () => {
  return (
    <section>
      <hr className="bg-primary-gray border-primary-gray" />
      <div className="lg:max-w-4xl xl:max-w-[1031px] mx-auto px-4 lg:px-0 mt-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="pb-8 md:pb-0">
            <img src={img} alt="" className="w-48" />
            <p className="pt-4">Web designer and Full-Stack developer</p>
          </div>
          <div>
            <h1 className="text-left pb-3">Media</h1>
            <div className="flex gap-2">
              <img src={github} alt="" />
              <img src={linkedin} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>
        </div>
        <div className="text-primary-gray text-center pt-12 pb-8">
          <p>© Copyright 2023</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
