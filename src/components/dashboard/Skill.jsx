import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Skill = ({
  _id,
  skill_name: existingSkillName,
  skill_level: existingSkillLevel,
  description: existingDescription,
}) => {
  const router = useRouter();
  const [redirect, setRedirect] = useState(false);

  const [skill_name, setSkillName] = useState(existingSkillName || "");
  const [skill_level, setSkillLevel] = useState(existingSkillLevel || "");
  const [description, setDescription] = useState(existingDescription || "");

  async function createSkill(ev) {
    ev.preventDefault();

    const data = { skill_name, skill_level, description };
    if (_id) {
      await axios.put("/api/dashboard/skill", { ...data, _id });
      toast.success("Skill updated!!");
    } else {
      await axios.post("/api/dashboard/skill", data);
      toast.success("Skill created!!");
    }

    setRedirect(true);
  }

  if (redirect) {
    router.push("/about");
    return null;
  }

  return (
    <div className="mx-auto max-w-2xl">
      <form onSubmit={createSkill} className="space-y-5">
        <div className="grid grid-cols-2 items-center my-4">
          <label className="col-span-1 block text-lg font-medium text-gray-700 mb-3">
            Name
          </label>
          <div className="col-span-2">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 border p-3"
              placeholder="Name"
              required
              value={skill_name}
              onChange={(ev) => setSkillName(ev.target.value)}
            />
          </div>
        </div>

        {/* Images upload */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <label className="text-lg font-medium text-gray-700 mr-2">
              Images
            </label>
            <div className="flex items-center justify-center rounded-lg">
              <label
                htmlFor="fileInput"
                className="flex items-center gap-1.5 px-3 py-2 text-center text-sm font-medium text-gray-500 border cursor-pointer hover:border-primary-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z" />
                  <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                </svg>
                Upload
              </label>
              <input
                id="fileInput"
                type="file"
                className="hidden"
                accept="image/*"
                multiple
              />
              {/* <input id="fileInput" type="file" className="hidden" accept="image/*" multiple onChange={uploadImages} /> */}
            </div>
          </div>

          {/* Spinner during upload */}
          {/* <div className="grid grid-cols-2 items-center rounded">
            {isUploading && (
              <Spinner className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            )}
          </div> */}

          {/* Display uploaded images */}
          {/* {!isUploading && (
            <div className=" grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-2">
              <ReactSortable list={images} setList={updateImagesOrder} className="w-[350px] h-auto  gap-2 flex  justify-between align-items-center">
                {images?.map((link, index) => (
                  <div key={link} className="relative group">
                    <img src={link} alt="image" className="object-cover h-32 w-44 rounded-md border p-2 cursor-pointer transition-transform transform-gpu group-hover:scale-105" />
                    <div className="absolute top-2 right-2 cursor-pointer opacity-0 group-hover:opacity-100">
                      <button onClick={() => handleDeleteImage(index)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-orange-600 bg-white rounded-full">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}

              </ReactSortable>
            </div>
          )} */}
        </div>

        <div className="grid grid-cols-2 items-center my-4">
          <label className="col-span-1 block text-lg font-medium text-gray-700 mb-3">
            Level
          </label>
          <div className="col-span-2">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 border p-3"
              placeholder="Level"
              required
              value={skill_level}
              onChange={(ev) => setSkillLevel(ev.target.value)}
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
              placeholder="Short bio about me"
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
              Save Skill
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Skill;
