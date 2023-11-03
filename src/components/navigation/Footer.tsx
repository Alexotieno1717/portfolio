import Link from "next/link";

const Footer = () => {
  return (
    <section>
      <hr className="bg-primary-gray border-primary-gray" />
      <div className="lg:max-w-4xl xl:max-w-[1031px] mx-auto px-4 lg:px-0 mt-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="pb-8 md:pb-0">
            <img src="/logo.svg" alt="" className="w-48" />
            <p className="text-base pt-4">
              Web designer and Full-Stack developer
            </p>
            <p className="text-xs pt-2 text-primary-gray">
              Design Credit ~ Elias from Figma communities
            </p>
          </div>
          <div>
            <h1 className="text-left pb-3">Media</h1>
            <div className="flex gap-2">
              <Link href="https://github.com/Alexotieno1717" target="_blank">
                <img src="/project/Github.svg" alt="github" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/alex-otieno-66a049162/"
                target="_blank"
              >
                <img src="/project/Linkedin.svg" alt="linkedin" />
              </Link>
              <Link href="https://twitter.com/Bug_Killer01" target="_blank">
                <img src="/project/Twitter.svg" alt="twitter" />
              </Link>
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
