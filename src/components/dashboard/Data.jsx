import axios from "axios";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

const Data = () => {
  async function createProduct(ev) {
    ev.preventDefault();

    const data = { title, description, images };
    if (_id) {
      await axios.put("/api/dashboard", { ...data, _id });
      toast.success("Data updated!!");
    } else {
      await axios.post("/api/dashboard", data);
      toast.success("Data created!!");
    }

    // Redirect after saving
    setRedirect(true);
  }

  return (
    <div className="mx-auto max-w-2xl">
      <form onSubmit={createProduct} className="space-y-5">
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
              //   value={username}
              //   onChange={ev => setUsername(ev.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 items-center my-4">
          <label className="col-span-1 block text-lg font-medium text-gray-700 mb-3">
            Statut
          </label>
          <div className="col-span-2">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 border p-3"
              placeholder="Status"
              required
              //   value={status}
              //   onChange={ev => setStatus(ev.target.value)}
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
              placeholder="Description about me"
              rows={6}
              //   value={description}
              //   onChange={ev => setDescription(ev.target.value)}
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
              //   value={email}
              //   onChange={ev => setEmail(ev.target.value)}
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
              //   value={phone}
              //   onChange={ev => setPhone(ev.target.value)}
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
