const Header = () => {
  return (
    <header className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Build Something Amazing
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Create modern and responsive websites using React.js
          and Tailwind CSS.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
          <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-200 transition">
            Learn More
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;