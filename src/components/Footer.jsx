const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white">
              MyWebsite
            </h2>
            <p className="mt-3 text-gray-400">
              Building modern websites with React and Tailwind CSS.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="hover:text-white">
                Home
              </a>
              <a href="#" className="hover:text-white">
                About
              </a>
              <a href="#" className="hover:text-white">
                Services
              </a>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">
              Contact
            </h3>
            <p>Email: example@gmail.com</p>
            <p className="mt-2">Pakistan</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>
            © 2026 MyWebsite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;