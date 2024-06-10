import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { ReactSortable } from "react-sortablejs";

const Data = ({
  _id,
  username: existingUsername,
  age: existingAge,
  location: existingLocation,
  email: existingEmail,
  phone: existingPhone,
  short_bio: existingShortBio,
  website: existingWebsite,
  social_media: existingSocialMedia,
}) => {
  const router = useRouter();
  const [redirect, setRedirect] = useState(false);

  const [username, setUsername] = useState(existingUsername || "");
  const [age, setAge] = useState(existingAge || "");
  const [location, setLocation] = useState(existingLocation || "");
  const [email, setEmail] = useState(existingEmail || "");
  const [phone, setPhone] = useState(existingPhone || "");
  const [short_bio, setShortBio] = useState(existingShortBio || "");
  const [website, setWebsite] = useState(existingWebsite || "");
  const [social_media, setSocialMedia] = useState(existingSocialMedia || "");
  const [isUploading, setIsUploading] = useState(false);
  const uploadImagesQueue = [];

  async function createData(ev) {
    ev.preventDefault();

    if (isUploading) {
      await Promise.all(uploadImagesQueue);
    }

    const data = {
      username,
      age,
      location,
      email,
      phone,
      short_bio,
      website,
      social_media,
    };
    if (_id) {
      await axios.put("/api/about", { ...data, _id });
      toast.success("Data updated!!");
    } else {
      await axios.post("/api/about", data);
      toast.success("Data created!!");
    }

    setRedirect(true);
  }

  if (redirect) {
    router.push("/dashboard/about");
    return null;
  }

  if (redirect) {
    router.push("/about");
    return null;
  }

  return (
    <div className="mx-auto max-w-2xl">
      <form onSubmit={createData} className="space-y-5">
        <div className="grid grid-cols-2 items-center my-4">
          <label className="col-span-1 block text-lg font-medium text-gray-700 mb-3">
            Username
          </label>
          <div className="col-span-2">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 border p-3"
              placeholder="Username"
              required
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 items-center my-4">
          <label className="col-span-1 block text-lg font-medium text-gray-700 mb-3">
            Age
          </label>
          <div className="col-span-2">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 border p-3"
              placeholder="Username"
              required
              value={age}
              onChange={(ev) => setAge(ev.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 items-center my-4">
          <label className="col-span-1 block text-lg font-medium text-gray-700 mb-3">
            Location
          </label>
          <div className="col-span-2">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 border p-3"
              placeholder="Status"
              required
              value={location}
              onChange={(ev) => setLocation(ev.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 items-center my-4">
          <label className="col-span-1 block text-lg font-medium text-gray-700 mb-3">
            Email
          </label>
          <div className="col-span-2">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 border p-3"
              placeholder="Email"
              required
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 items-center my-4">
          <label className="col-span-1 block text-lg font-medium text-gray-700 mb-3">
            Phone
          </label>
          <div className="col-span-2">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 border p-3"
              placeholder="Phone"
              required
              value={phone}
              onChange={(ev) => setPhone(ev.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 items-center my-4">
          <label className="col-span-1 block text-lg font-medium text-gray-700 mb-3">
            Short Bio
          </label>
          <div className="col-span-2">
            <textarea
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 border p-3"
              placeholder="Short bio about me"
              rows={6}
              value={short_bio}
              onChange={(ev) => setShortBio(ev.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 items-center my-4">
          <label className="col-span-1 block text-lg font-medium text-gray-700 mb-3">
            Website
          </label>
          <div className="col-span-2">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 border p-3"
              placeholder="Website"
              required
              value={website}
              onChange={(ev) => setWebsite(ev.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 items-center my-4">
          <label className="col-span-1 block text-lg font-medium text-gray-700 mb-3">
            Social Media
          </label>
          <div className="col-span-2">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 border p-3"
              placeholder="Social Media"
              required
              value={social_media}
              onChange={(ev) => setSocialMedia(ev.target.value)}
            />
          </div>
        </div>

        <div className="items-center my-4">
          <div className="col-span-2 col-start-2">
            <button
              type="submit"
              className="rounded-lg border border-blue-ribbon-500 bg-blue-ribbon-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-ribbon-400 hover:bg-blue-ribbon-400 focus:ring focus:ring-blue-ribbon-200 disabled:cursor-not-allowed disabled:border-blue-ribbon-300 disabled:bg-blue-ribbon-300"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Data;
