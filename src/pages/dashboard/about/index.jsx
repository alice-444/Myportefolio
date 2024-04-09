import axios from "axios";
import Link from "next/link";
import { FiEdit3 } from "react-icons/fi";
import { TbTrashX } from "react-icons/tb";
import { useEffect, useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import Navbar from "@/components/dashboard/Navbar.jsx";

const AboutPage = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);

  useEffect(() => {
    axios
      .get("/api/about")
      .then((response) => {
        setDatas(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const datasToDisplay = datas.slice(startIndex, endIndex);

  return (
    <div>
      <Navbar />
      <header>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-xl font-semibold text-gray-900 sm:text-3xl">
                All data general about me !
              </h1>

              <p className="mt-1.5 text-md text-gray-500">
                Let's write our portefolio ! 🎉
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <Link
                className="block rounded-lg border-blue-ribbon-600 px-5 py-3 text-sm font-medium text-blue-ribbon-600 transition hover:bg-blue-ribbon-600 hover:text-white focus:outline-none focus:ring"
                href={"/dashboard/about/newData"}
              >
                Create Data
                <MdAddCircleOutline className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <hr className="my-8 h-px border-0 bg-gray-300" />
          <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md">
            {datas.length === 0 ? (
              <p className="w-full text-center">No data</p>
            ) : (
              <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead>
                  <th className="px-4 py-2 font-medium text-gray-900">
                    Username
                  </th>
                  <th className="px-4 py-2 font-medium text-gray-900">Age</th>
                  <th className="px-4 py-2 font-medium text-gray-900">
                    Location
                  </th>
                  <th className="px-4 py-2 font-medium text-gray-900">Email</th>
                  <th className="px-4 py-2 font-medium text-gray-900">Phone</th>
                  <th className="px-4 py-2 font-medium text-gray-900">
                    Short Bio
                  </th>
                  <th className="px-4 py-2 font-medium text-gray-900">
                    Website
                  </th>
                </thead>
                {datasToDisplay.map((data, index) => (
                  <tbody className="divide-y divide-gray-200" key={data._id}>
                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {data.username}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {data.age}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {data.location}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {data.email}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {data.phone}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700 truncate max-w-md">
                        {data.short_bio}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700 truncate max-w-md">
                        {data.website}
                      </td>
                      <td class="px-6 py-4">
                        <Link
                          href={"/dashboard/about/delete/" + data._id}
                          className="inline-block rounded bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                        >
                          Delete
                          <TbTrashX className="h-8 w-8 ml-2" />
                        </Link>
                        <Link
                          href={"/dashboard/about/edit/" + data._id}
                          className="inline-block rounded bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                        >
                          Edit
                          <FiEdit3 className="h-8 w-8 ml-2" />
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            )}
          </div>
        </div>
      </header>
      <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md">
        <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Name
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                State
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Role
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Team
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900"></th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 border-t border-gray-100">
            <tr class="hover:bg-gray-50">
              <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div class="relative h-10 w-10">
                  <img
                    class="h-full w-full rounded-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                </div>
                <div class="text-sm">
                  <div class="font-medium text-gray-700">Steven Jobs</div>
                  <div class="text-gray-400">jobs@sailboatui.com</div>
                </div>
              </th>
              <td class="px-6 py-4">
                <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                  <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Active
                </span>
              </td>
              <td class="px-6 py-4">Product Designer</td>
              <td class="px-6 py-4">
                <div class="flex gap-2">
                  <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                    {" "}
                    Design{" "}
                  </span>
                  <span class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                    {" "}
                    Product{" "}
                  </span>
                  <span class="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600">
                    {" "}
                    Develop{" "}
                  </span>
                </div>
              </td>
              <td class="px-6 py-4">
                <div class="flex justify-end gap-4">
                  <a x-data="{ tooltip: 'Delete' }" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-6 w-6"
                      x-tooltip="tooltip"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </a>
                  <a x-data="{ tooltip: 'Edite' }" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-6 w-6"
                      x-tooltip="tooltip"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      />
                    </svg>
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      ;
    </div>
  );
};

export default AboutPage;
