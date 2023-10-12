function FanFacts() {
  return (
    <div className="lg:max-w-4xl xl:max-w-[1031px] mx-auto px-4 lg:px-0 mt-10 lg:mt-0 lg:pb-20">
      <div className="mb-6">
        <h1 className="text-3xl font-medium text-white">
          <span className="text-primary-purple">#</span>
          my-fun-facts
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-8">
          <div className="grid grid-cols-2 gap-2">
            <div className="text-primary-gray text-base font-normal border">
              <h1 className="text-white font-semibold py-2 px-2">I like winter more than summer</h1>
            </div>
            <div className="text-primary-gray text-base font-normal border">
              <h1 className="text-white font-semibold py-2 px-2">I often bike with my friends</h1>
            </div>
            <div className="text-primary-gray text-base font-normal border">
              <h1 className="text-white font-semibold py-2 px-2">I like pizza and pasta</h1>
            </div>
          </div>
        </div>
        <div className="col-span-4">djdjdj</div>
      </div>
    </div>
  );
}

export default FanFacts;
