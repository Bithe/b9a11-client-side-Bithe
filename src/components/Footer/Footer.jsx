import fb from "../../assets/images/fb.png";
import lk from "../../assets/images/lk.png";
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <div className="flex items-center">
            <img
              src="logo.jpg"
              alt="Company Logo"
              className="h-8 w-auto mr-2"
            />
            <p className="text-sm">ProdSwap</p>
          </div>
          <p className="mt-4 text-gray-300">
          Welcome to Alternative Product Information System (APIS), your one-stop solution for accessing information about alternative products and services.
          </p>
        </div>
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-1 flex flex-col justify-between items-center">
          <div className="space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <img src={fb} alt="Facebook" className="h-8 w-auto" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <img src={lk} alt="LinkedIn" className="h-8 w-auto" />
            </a>
          </div>

          <div className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-sm">
        &copy; 2024 ProdSwap Hub. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
