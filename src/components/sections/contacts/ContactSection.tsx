const ContactSection = () => {
  return (
    <div className="lg:max-w-4xl xl:max-w-[1031px] mx-auto px-4 lg:px-0 py-32">
      <div className="mb-6">
        <h1 className="text-3xl font-medium text-white">
          <span className="text-primary-purple">/</span>
          Contact
        </h1>
        <p className="pt-3">Who am i?</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-24">
        <div className="md:col-span-6 text-primary-gray text-base font-normal">
          <p>
            Hey there! If you're on the lookout for a web development wizard, your search ends here. I'm all about
            turning your digital dreams into reality. Whether you need a mind-blowing web app, want to spice up your
            online presence, or dive into the latest tech trends, count me in!
          </p>
          <p className="pt-8">
            I thrive on collaboration, and your feedback is my secret sauce for creating stellar solutions. Imagine not
            just a website but a digital masterpiece that wows users. If you're ready for a tech journey filled with
            creativity and impact, let's chat! Your ideas, my skills—let's make some web magic together! 🚀
          </p>
        </div>
        <div className="md:col-span-6">
          <div className="border border-primary-gray mt-8 md:mt-0 py-4 px-4 md:w-[60%] md:ml-auto">
            <h2 className="text-base font-medium text-white">Message me here</h2>
            <div>
              <p className="text-primary-gray text-base font-normal">alexotieno900@gmail.com</p>
              <p className="text-primary-gray text-base font-normal">+254 748815593</p>
              <p className="text-primary-gray text-base font-normal">@Alex-Otieno</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
