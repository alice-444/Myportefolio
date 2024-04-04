import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";

const Data = ({
  _id,
  username: existingUsername,
  age: existingAge,
  location: existingLocation,
  email: existingEmail,
  phone: existingPhone,
  short_bio: existingShortBio,
  profile_picture: existingProfilePicture,
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
  const [profile_picture, setProfilePicture] = useState(
    existingProfilePicture || []
  );
  const [website, setWebsite] = useState(existingWebsite || "");
  const [social_media, setSocialMedia] = useState(existingSocialMedia || {});
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
      profile_picture,
      website,
      social_media,
    };
    if (_id) {
      await axios.put("/api/dashboard/about", { ...data, _id });
      toast.success("Data updated!!");
    } else {
      await axios.post("/api/dashboard/about", data);
      toast.success("Data created!!");
    }

    setRedirect(true);
  }

  async function uploadImages(ev) {
    const files = ev.target?.files;
    if (files?.length > 0) {
      setIsUploading(true);

      for (const file of files) {
        const data = new FormData();
        data.append("file", file);

        uploadImagesQueue.push(
          axios.post("/api/upload", data).then((res) => {
            setProfilePicture((oldImages) => [...oldImages, ...res.data.links]);
          })
        );
      }

      await Promise.all(uploadImagesQueue);

      setIsUploading(false);
      toast.success("Image uploaded");
    } else {
      toast.error("An error occurred!");
    }
  }

  if (redirect) {
    router.push("/about");
    return null;
  }

  function updateImagesOrder(profile_picture) {
    setProfilePicture(profile_picture)
  }

  function handleDeleteImage(index) {
    const updatedImages = [...profile_picture];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
    toast.success('image deleted successfully!!')
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
                onChange={ev => setUsername(ev.target.value)}
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
                onChange={ev => setAge(ev.target.value)}
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
                onChange={ev => setLocation(ev.target.value)}
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
                onChange={ev => setEmail(ev.target.value)}
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
                onChange={ev => setPhone(ev.target.value)}
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
                onChange={ev => setShortBio(ev.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <label className="text-lg font-medium text-gray-700 mr-2">Images</label>
            <div className="flex items-center justify-center rounded-lg">
              <label htmlFor="fileInput" className="flex items-center gap-1.5 px-3 py-2 text-center text-sm font-medium text-gray-500 border cursor-pointer hover:border-primary-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                  <path d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z" />
                  <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                </svg>
                Upload
              </label>
              <input id="fileInput" type="file" className="hidden" accept="image/*" multiple onChange={uploadImages} />
            </div>
          </div>

          {/* Spinner during upload */}
          <div className="grid grid-cols-2 items-center rounded">
            {isUploading && (
              <Spinner className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            )}
          </div>

          {/* Display uploaded images */}
          {!isUploading && (
            <div className=" grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-2">
              <ReactSortable list={profile_picture} setList={updateImagesOrder} className="w-[350px] h-auto  gap-2 flex  justify-between align-items-center">
                {profile_picture?.map((link, index) => (
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
          )}

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
                onChange={ev => setWebsite(ev.target.value)}
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
                onChange={ev => setSocialMedia(ev.target.value)}
            />
          </div>
        </div>

        <div className="items-center my-4">
          <div className="col-span-2 col-start-2">
            <button
              type="submit"
              className="rounded-lg border border-blue-ribbon-500 bg-blue-ribbon-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-ribbon-400 hover:bg-blue-ribbon-400 focus:ring focus:ring-blue-ribbon-200 disabled:cursor-not-allowed disabled:border-blue-ribbon-300 disabled:bg-blue-ribbon-300"
            >
              Save the data
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Data;
