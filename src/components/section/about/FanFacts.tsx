const FanFacts = () => {
  return (
    <div className="lg:max-w-4xl xl:max-w-[1031px] mx-auto px-4 lg:px-0 mt-10 lg:mt-0 lg:pb-20">
      <div className="mb-6">
        <h1 className="text-3xl font-medium text-white">
          <span className="text-primary-purple">#</span>
          my-fun-facts
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-2 mb-8 md:mb-0">
        <div className="col-span-12 md:col-span-9">
          <div className="grid md:grid-cols-2 gap-2">
            <div className="text-primary-gray text-base font-normal border">
              <h1 className="text-white font-semibold py-2 px-2">
                Dev with a passion for code and creativity
              </h1>
            </div>
            <div className="text-primary-gray text-base font-normal border">
              <h1 className="text-white font-semibold py-2 px-2">
                I like summer ☀️ more than winter ❄️{" "}
              </h1>
            </div>
            <div className="text-primary-gray text-base font-normal border">
              <h1 className="text-white font-semibold py-2 px-2">
                Football fanatic when not coding ⚽️
              </h1>
            </div>
            <div className="text-primary-gray text-base font-normal border">
              <h1 className="text-white font-semibold py-2 px-2">
                I like pizza and pasta 🍕🍝
              </h1>
            </div>
          </div>
        </div>
        <div className="hidden md:block col-span-3">
          <img src="/assets/dots.png" alt="dots" className="ml-14" />
          <img src="/assets/log.png" alt="logs" className="float-right mr-8" />
        </div>
      </div>
    </div>
  );
};

export default FanFacts;
