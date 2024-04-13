import axios from "axios";
import Link from "next/link";
import { FiEdit3 } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
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
          <h1 className="text-3xl font-semibold text-blue-ribbon-500">About me</h1>
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
                  Username
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Age
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Location
                </th>

                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Phone
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Short Bio
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Website
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
                  <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                    <div class="text-sm">
                      <div class="font-medium text-gray-700">
                        {data.username}
                      </div>
                      <div class="text-gray-400">{data.email}</div>
                    </div>
                  </th>
                  <td class="px-6 py-4">{data.age}</td>
                  <td class="px-6 py-4">{data.location}</td>
                  <td class="px-6 py-4">{data.phone}</td>
                  <td class="px-6 py-4">{data.short_bio}</td>
                  <td class="px-6 py-4">{data.website}</td>
                  <td class="px-6 py-4">
                    <div class="flex justify-end gap-4">
                      <a x-data="{ tooltip: 'Delete' }" href="#">
                        <GoTrash className="w-6 h-6" />
                      </a>
                      <a x-data="{ tooltip: 'Edit' }" href="#">
                        <FiEdit3 className="w-6 h-6" />
                      </a>
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

export default AboutPage;
