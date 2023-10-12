function AboutSkills() {
  return (
    <div className="lg:max-w-4xl xl:max-w-[1031px] mx-auto px-4 lg:px-0 mt-10 lg:mt-0 lg:pb-20">
      <div className="mb-6">
        <h1 className="text-3xl font-medium text-white">
          <span className="text-primary-purple">#</span>
          Skills
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
        <div className="text-primary-gray text-base font-normal border">
          <h1 className="text-white font-semibold border-b py-2 px-2">Language</h1>
          <p className="py-2 px-2">TypeScript JavaScript Python PHP</p>
        </div>
        <div className="text-primary-gray text-base font-normal border">
          <h1 className="text-white font-semibold border-b py-2 px-2">Database</h1>
          <p className="py-2 px-2">MySQL SQLite PostgreSQL</p>
        </div>
        <div className="text-primary-gray text-base font-normal border">
          <h1 className="text-white font-semibold border-b py-2 px-2">Tools</h1>
          <p className="py-2 px-2">VSCode vim Linux Figma Git Vercel</p>
        </div>
        <div className="text-primary-gray text-base font-normal border">
          <h1 className="text-white font-semibold border-b py-2 px-2">Frameworks</h1>
          <p className="py-2 px-2">React Django Laravel React Native</p>
        </div>
        <div className="text-primary-gray text-base font-normal border">
          <h1 className="text-white font-semibold border-b py-2 px-2">Others</h1>
          <p className="py-2 px-2">HTML CSS REST SCSS Bootstrap Tailwind</p>
        </div>
      </div>
    </div>
  );
}

export default AboutSkills;
