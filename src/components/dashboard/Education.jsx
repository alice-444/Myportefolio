import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Education = ({
  _id,
  formation: existingFormation,
  institution: existingInstitution,
  field_of_study: existingFieldOfStudy,
  degree: existingDegree,
  start_date: existingStartDate,
  end_date: existingEndDate,
  description: existingDescription,
}) => {
  const router = useRouter();
  const [redirect, setRedirect] = useState(false);

  const [formation, setFormation] = useState(existingFormation || "");
  const [institution, setInstitution] = useState(existingInstitution || "");
  const [field_of_study, setFieldOfStudy] = useState(
    existingFieldOfStudy || ""
  );
  const [degree, setDegree] = useState(existingDegree || "");
  const [start_date, setStartDate] = useState(existingStartDate || "");
  const [end_date, setEndDate] = useState(existingEndDate || "");
  const [description, setDescription] = useState(existingDescription || "");

  async function createEducation(ev) {
    ev.preventDefault();

    const data = {
      formation,
      institution,
      field_of_study,
      degree,
      start_date,
      end_date,
      description,
    };
    if (_id) {
      await axios.put("/api/education", { ...data, _id });
      toast.success("Education updated!!");
    } else {
      await axios.post("/api/education", data);
      toast.success("Education created!");
    }

    setRedirect(true);
  }

  if (redirect) {
    router.push("/dashboard/education");
    return null;
  }

  return (
    <div className="mx-auto max-w-2xl">
      <form onSubmit={createEducation} className="space-y-5">
        <div className="grid grid-cols-2 items-center my-4">
          <label className="col-span-1 block text-lg font-medium text-gray-700 mb-3">
            Formation
          </label>
          <div className="col-span-2">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 border p-3"
              placeholder="Formation"
              required
              value={formation}
              onChange={(ev) => setFormation(ev.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 items-center my-4">
          <label className="col-span-1 block text-lg font-medium text-gray-700 mb-3">
            Field of study
          </label>
          <div className="col-span-2">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 border p-3"
              placeholder="Formation"
              required
              value={field_of_study}
              onChange={(ev) => setFieldOfStudy(ev.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 items-center my-4">
          <label className="col-span-1 block text-lg font-medium text-gray-700 mb-3">
            Institution
          </label>
          <div className="col-span-2">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 border p-3"
              placeholder="Institution"
              required
              value={institution}
              onChange={(ev) => setInstitution(ev.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 items-center my-4">
          <label className="col-span-1 block text-lg font-medium text-gray-700 mb-3">
            Degree
          </label>
          <div className="col-span-2">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 border p-3"
              placeholder="Degree"
              required
              value={degree}
              onChange={(ev) => setDegree(ev.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 items-center my-4">
          <label className="col-span-1 block text-lg font-medium text-gray-700 mb-3">
            Start date
          </label>
          <div className="col-span-2">
            <input
              type="date"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 border p-3"
              placeholder="Start Date"
              required
              value={start_date}
              onChange={(ev) => setStartDate(ev.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 items-center my-4">
          <label className="col-span-1 block text-lg font-medium text-gray-700 mb-3">
            End date
          </label>
          <div className="col-span-2">
            <input
              type="date"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 border p-3"
              placeholder="End Date"
              required
              value={end_date}
              onChange={(ev) => setEndDate(ev.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 items-center my-4">
          <label className="col-span-1 block text-lg font-medium text-gray-700 mb-3">
            Description
          </label>
          <div className="col-span-2">
            <textarea
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 border p-3"
              placeholder="Short bio about institution"
              rows={6}
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
            />
          </div>
        </div>

        <div className="items-center my-4">
          <div className="col-span-2 col-start-2">
            <button
              type="submit"
              className="rounded-lg border border-blue-ribbon-500 bg-blue-ribbon-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-ribbon-400 hover:bg-blue-ribbon-400 focus:ring focus:ring-blue-ribbon-200 disabled:cursor-not-allowed disabled:border-blue-ribbon-300 disabled:bg-blue-ribbon-300"
            >
              Save Education
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Education;
