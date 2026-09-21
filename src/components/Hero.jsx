const Hero = () => {
  return (
    <section className="bg-gray-950 text-white min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-400 font-semibold text-lg mb-4">
              Welcome to My Website
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Build Modern
              <span className="text-blue-500"> Websites </span>
              With React
            </h1>
            <p className="mt-6 text-gray-400 text-lg leading-8 max-w-xl">
              I create fast, modern and responsive websites using
              React.js, Tailwind CSS and modern web technologies.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-lg font-semibold transition">
                Get Started
              </button>
              <button className="border border-gray-600 hover:bg-gray-800 px-7 py-3 rounded-lg font-semibold transition">
                View Projects
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96 bg-blue-600/20 border border-blue-500/30 rounded-3xl flex items-center justify-center">

              <div className="text-center">
                <div className="text-7xl font-bold text-blue-500">
                  \
                </div>
                <p className="mt-4 text-gray-400 text-lg">
                  React Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;