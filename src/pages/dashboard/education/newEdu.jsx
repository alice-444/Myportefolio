import Navbar from "@/components/dashboard/Navbar.jsx";
import Education from "@/components/dashboard/Education.jsx";

const NewEdu = () => {
  return (
    <div>
      <Navbar />
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="text-center sm:text-left">
          <h1 className="text-xl font-semibold text-gray-900 sm:text-3xl">
            Let's create data about education !
          </h1>

          <p className="mt-1.5 text-md text-gray-500">
            Let's write a data about education ! 🎉
          </p>
        </div>
      </div>
      <hr className="my-8 h-px border-0 bg-gray-300" />
      <div className="my-10">
        <Education />
      </div>
    </div>
  );
};

export default NewEdu;
