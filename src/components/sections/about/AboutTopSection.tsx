import { Link } from 'react-router-dom';
import img from '../../../assets/Home_art 1.svg';

function AboutTopSection() {
  return (
    <div className="lg:max-w-4xl xl:max-w-[1031px] mx-auto px-4 lg:px-0 mt-10 lg:py-20">
      <div className="mb-6">
        <h1 className="text-3xl font-medium text-white">
          <span className="text-primary-purple">/</span>
          About-me
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-40">
        <div className="text-primary-gray text-base font-normal">
          <p className="pb-14">Hello I am Alex</p>
          <p className="pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, unde. Error earum, maiores veritatis
            commodi doloribus placeat architecto eaque aliquam facilis rerum quos, sed expedita rem praesentium, quia
            maxime voluptatum dolorum vitae fugiat et repellendus? Vero explicabo culpa nihil molestiae quis tempore,
            mollitia, nostrum ullam iure ipsa omnis exercitationem! Nobis? Lorem ipsum dolor sit amet consectetur
          </p>

          <Link
            to="/"
            className="inline-flex items-center whitespace-nowrap btn-shadow border border-primary-purple hover:bg-primary-purple hover:bg-opacity-80 text-white px-6 py-1 text-base font-normal"
          >
            Read More -&gt;
          </Link>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutTopSection;
