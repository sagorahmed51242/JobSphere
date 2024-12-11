import { FaFacebookF, FaTwitter, FaLinkedinIn, FaApple, FaGooglePlay } from 'react-icons/fa';
import logo1 from './../../assets/Images/logo1.png';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-5 gap-8 text-gray-700">
        {/* Logo and description */}
        <div>
          <h2 className="text-xl font-bold text-blue-600">
            <img className="w-[150px]" src={logo1} alt="JobSphere Logo" />
          </h2>
          <p className="mt-4 text-[12px] text-[#66789C]">
            JobSphere is the heart of the design community and the best resource to discover and connect with designers and jobs worldwide.
          </p>
          <div className="flex items-center space-x-4 mt-4">
            <a href="#" className="bg-blue-600 text-white flex items-center justify-center p-2 w-8 h-8 rounded-full ">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="bg-blue-600 text-white flex items-center justify-center p-2 w-8 h-8 rounded-full ">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="bg-blue-600 text-white flex items-center justify-center p-2 w-8 h-8 rounded-full ">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-base font-bold text-gray-900 mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-[#66789C]">
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Our Team</a></li>
            <li><a href="#" className="hover:underline">Products</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="text-base font-bold text-gray-900 mb-4">Community</h3>
          <ul className="space-y-2 text-sm text-[#66789C]">
            <li><a href="#" className="hover:underline">Feature</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Credit</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-base font-bold text-gray-900 mb-4">Quick links</h3>
          <ul className="space-y-2 text-sm text-[#66789C]">
            <li><a href="#" className="hover:underline">iOS</a></li>
            <li><a href="#" className="hover:underline">Android</a></li>
            <li><a href="#" className="hover:underline">Microsoft</a></li>
            <li><a href="#" className="hover:underline">Desktop</a></li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h3 className="text-base font-bold text-gray-900 mb-4">Download App</h3>
          <p className="text-[12px] mb-4 text-[#66789C]">Download our Apps and get extra 15% Discount on your first Order...!</p>
          <div className="flex gap-4">
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold flex items-center space-x-2 hover:bg-blue-700" >
              <FaApple />
              <span className='text-[12px]'>App Store</span>
            </a>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold flex items-center space-x-2 hover:bg-blue-700">
              <FaGooglePlay />
              <span className='text-[12px]'>Google Play</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="py-4 mt-8">
      <hr className='mb-7' />
        <div className="container mx-auto px-4  flex flex-col md:flex-row items-center justify-between text-[12px] text-gray-500">
          <p>Copyright © 2022. JobSphere all right reserved</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
