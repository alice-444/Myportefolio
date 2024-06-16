import Navbar from "@/components/Navbar.jsx";
import { FaUser, FaEnvelope, FaTag, FaCommentDots } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen relative">
      <Navbar />
      <section className="py-12 px-4 md:px-16 relative">
        <h1 className="text-5xl font-bold text-center text-blue-600 mb-12">Contact Me</h1>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 opacity-20 pointer-events-none animate-pulse"></div>
          <form className="space-y-6 relative z-10">
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 flex items-center">
                <FaUser className="inline-block mr-2 text-blue-500" /> Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-6 py-3 bg-gray-100 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-transform duration-300 transform hover:scale-105"
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 flex items-center">
                <FaEnvelope className="inline-block mr-2 text-blue-500" /> Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-6 py-3 bg-gray-100 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-transform duration-300 transform hover:scale-105"
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 flex items-center">
                <FaTag className="inline-block mr-2 text-blue-500" /> Subject
              </label>
              <input
                type="text"
                id="subject"
                className="mt-1 block w-full px-6 py-3 bg-gray-100 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-transform duration-300 transform hover:scale-105"
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 flex items-center">
                <FaCommentDots className="inline-block mr-2 text-blue-500" /> Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full px-6 py-3 bg-gray-100 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-transform duration-300 transform hover:scale-105"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-block px-8 py-4 bg-blue-500 text-white font-medium text-sm leading-tight uppercase rounded-full shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-blue-700 active:shadow-lg transition-transform duration-300 transform hover:scale-110"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
      <style jsx>{`
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
