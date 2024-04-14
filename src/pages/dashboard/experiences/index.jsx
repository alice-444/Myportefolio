import axios from "axios";
import Link from "next/link";
import { FiEdit3 } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import { useEffect, useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import Navbar from "@/components/dashboard/Navbar.jsx";

const ExpPage = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);

  useEffect(() => {
    axios
      .get("/api/experience")
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
                All data about my experiences !
              </h1>
            </div>
            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <Link
                className="block rounded-lg border-blue-ribbon-600 px-5 py-3 text-sm font-medium text-blue-ribbon-600 transition hover:bg-blue-ribbon-600 hover:text-white focus:outline-none focus:ring"
                href={"/dashboard/experiences/newExp"}
              >
                Create Data
                <MdAddCircleOutline className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <hr className="my-8 h-px border-0 bg-gray-300" />
        </div>
      </header>
      <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md">
        {datas.length === 0 ? (
          <p className="w-full text-center">No data</p>
        ) : (
          <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Name
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Position
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Start Date
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  End Date
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Description
                </th>
                <th
                  scope="col"
                  class="px-6 py-4 font-medium text-gray-900"
                ></th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 border-t border-gray-100">
              {datasToDisplay.map((data, index) => (
                <tr class="hover:bg-gray-50" key={data._id}>
                  <td class="px-6 py-4">{data.company_name}</td>
                  <td class="px-6 py-4">{data.position}</td>
                  <td class="px-6 py-4">{data.start_date}</td>
                  <td class="px-6 py-4">{data.end_date}</td>
                  <td class="px-6 py-4">{data.description}</td>
                  <td class="px-6 py-4">
                    <div class="flex justify-end gap-4">
                    <Link href={"/experiences/delete/" + data._id}>
                        <GoTrash className="w-6 h-6" />
                      </Link>
                      <Link href={"/experiences/edit/" + data._id}>
                        <FiEdit3 className="w-6 h-6" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ExpPage;
