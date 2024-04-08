import Link from "next/link";
import { MdWork } from "react-icons/md";
import { GoProject } from "react-icons/go";
import { FaUserGraduate } from "react-icons/fa6";
import { GiProcessor, GiSkills } from "react-icons/gi";

const Intro = () => {
  return (
    <header>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Welcome Back, Me!
            </h1>

            <p className="mt-1.5 text-md text-gray-500">
              Let's write our portefolio ! 🎉
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <Link
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-blue-ribbon-400 hover:border-blue-ribbon-400 focus:outline-none focus:ring shadow-lg"
              href={"/"}
            >
              <span className="text-lg font-medium"> View Portefolio </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>

            <Link
              className="block rounded-lg bg-blue-ribbon-400 px-5 py-3 text-lg font-medium text-white transition hover:bg-red-300 focus:outline-none focus:ring shadow-xl"
              href={"/dashboard/about/"}
            >
              <span className="flex items-center">
                Create Data
                <GiProcessor className="w-8 h-8 ml-2" />
              </span>
            </Link>

            <Link
              className="block rounded-lg bg-blue-ribbon-400 px-5 py-3 text-lg font-medium text-white transition hover:bg-red-300 focus:outline-none focus:ring shadow-xl"
              href={"/dashboard/education/"}
            >
              <span className="flex items-center">
                Create Education
                <FaUserGraduate className="h-8 w-8 ml-2" />
              </span>
            </Link>

            <Link
              className="block rounded-lg bg-blue-ribbon-400 px-5 py-3 text-lg font-medium text-white transition hover:bg-red-300 focus:outline-none focus:ring shadow-xl"
              href={"/dashboard/skills/"}
            >
              <span className="flex items-center">
                Create Skill(s)
                <GiSkills className="h-8 w-8 ml-2" />
              </span>
            </Link>

            <Link
              className="block rounded-lg bg-blue-ribbon-400 px-5 py-3 text-lg font-medium text-white transition hover:bg-red-300 focus:outline-none focus:ring shadow-xl"
              href={"/dashboard/experiences/"}
            >
              <span className="flex items-center">
                Create Experience(s)
                <MdWork className="h-8 w-8 ml-2" />
              </span>
            </Link>

            <Link
              className="block rounded-lg bg-blue-ribbon-400 px-5 py-3 text-lg font-medium text-white transition hover:bg-red-300 focus:outline-none focus:ring shadow-xl"
              href={"/dashboard/projects/"}
            >
              <span className="flex items-center">
                Create Project(s)
                <GoProject className="h-8 w-8 ml-2" />
              </span>
            </Link>
          </div>
        </div>
        <hr className="my-8 h-px border-0 bg-gray-300" />
      </div>
    </header>
  );
};

export default Intro;
