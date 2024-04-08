import Data from "@/components/dashboard/Data.jsx";
import Navbar from "@/components/dashboard/Navbar.jsx";

const NewData = () => {
  return (
    <div>
      <Navbar />
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="text-center sm:text-left">
          <h1 className="text-xl font-semibold text-gray-900 sm:text-3xl">
            Let's create a new data !
          </h1>

          <p className="mt-1.5 text-md text-gray-500">
            Let's write a new data ! 🎉
          </p>
        </div>
      </div>
      <hr className="my-8 h-px border-0 bg-gray-300" />
      <div className="my-10">
        <Data />
      </div>
    </div>
  );
};

export default NewData;
