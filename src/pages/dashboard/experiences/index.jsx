import Link from "next/link";
import { MdAddCircleOutline } from "react-icons/md";
import Navbar from "@/components/dashboard/Navbar.jsx";

const Experience = () => {
  return (
    <div>
      <Navbar />
      <header>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-xl font-semibold text-gray-900 sm:text-3xl">
                All data about my experiences !
              </h1>

              <p className="mt-1.5 text-md text-gray-500">
                Let's write our experience ! 🎉
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <Link
                className="block rounded-lg border-blue-ribbon-600 px-5 py-3 text-sm font-medium text-blue-ribbon-600 transition hover:bg-blue-ribbon-600 hover:text-white focus:outline-none focus:ring"
                href={"/dashboard/experiences/newExp"}
              >
                Create Exp
                <MdAddCircleOutline className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <hr className="my-8 h-px border-0 bg-gray-300" />
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            No data
          </div>
        </div>
      </header>
    </div>
  );
};

export default Experience;
