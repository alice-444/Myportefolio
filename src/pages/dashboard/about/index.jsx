import axios from "axios";
import Link from "next/link";
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
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            {datas.length === 0 ? (
              <p className="w-full text-center">No data</p>
            ) : (
              <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-md border rounded">
                <thead>
                  <th className="px-4 py-2 font-medium text-gray-900">Index</th>
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
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700 truncate max-w-md">
                        {data.short_bio}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {data.age}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 gap-4 flex">
                        <Link
                          href={"/dashboard/about/edit/" + data._id}
                          className="inline-block rounded bg-green-500 px-4 py-2 text-xs font-medium text-white hover:bg-green-700"
                        >
                          Edit
                        </Link>
                        <Link
                          href={"/dashboard/about/delete/" + data._id}
                          className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                        >
                          Delete
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
    </div>
  );
};

export default AboutPage;
