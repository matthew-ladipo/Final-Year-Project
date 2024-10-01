import React from "react";
import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../firebase";
import { MdOutlineAdd } from "react-icons/md";
import BackDrop from "../POPUP/BackDrop";
import AddForm from "../client/AddForm";
const Bio = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageName, setImageName] = useState(""); // State to store the image name
  const [imageUrls, setImageUrls] = useState([]);
  const imagesListRef = ref(storage, "CSC-NOTES/");
  const [showPopup, setShowpopup] = useState(false);
  const [search, setSearch] = useState("");

  function show() {
    setShowpopup(true);
  }
  function close() {
    setShowpopup(false);
  }

  const Departments = [
    {
      id: 1,
      name: "aLecture Note",
      dept: "100L-400L",
      url: "add",
    },
    {
      id: 2,
      name: "bLecture Note",
      dept: "100L-400L",
    },
    { id: 3, name: "cLecture Note", dept: "100L-400L" },
    {
      id: 4,
      name: "dLecture Note",
      dept: "100L-400L",
    },
    {
      id: 5,
      name: "eLecture Note",
      dept: "100L-400L",
    },
    {
      id: 6,
      name: "fLecture Note",
      dept: "100L-400L",
    },
  ];

  return (
    <div className="py-5 px-5">
      <div className="flex justify-between ">
        <button
          onClick={show}
          className="flex w-100 items-center   justify-center bg-purple-600 px-5 py-1.5 text-sm font-semibold text-white hover:bg-indigo-500 "
        >
          <h5 style={{ textDecoration: "none" }}>Add Notes</h5>{" "}
          <div>
            <MdOutlineAdd />
          </div>
        </button>
        <h1 className="text-[28px] pt-2 font-[800] tracking-wide text-purple-800">
          Maths Lecture Notes
        </h1>
        <input
          onChange={(e) => setSearch(e.target.value)}
          class="input rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
          placeholder="Search..."
          required=""
          type="text"
        />
      </div>
      <main className="p-10">
        <div>
          <div className="grid gap-10 grid-cols-3 z-6  grid-rows-2 max-[800px]:grid-cols-2 max-[1100px]:grid-cols-3    ">
            {Departments.filter((items) => {
              return search.toLowerCase() === ""
                ? items
                : items.name.toLowerCase().includes(search);
            }).map((items) => (
              <div className="w-64 z-10 bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-5 space-y-3 relative overflow-hidden">
                <div className="fill-violet-500 w-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                  >
                    <path d="m24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z"></path>
                  </svg>
                </div>
                <h1 className="font-bold text-xl">{items.name}</h1>
                <div className="flex px-6  sm:px-8 cursor-pointer flex">
                  <a
                    aria-describedby="tier-company"
                    className=" items-center justify-center w-full px-6  text-center text-gray-500  duration-200  border-2 border-purple-700 rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black"
                  >
                    View
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      {showPopup && <BackDrop onCancel={close} />}
      {showPopup && <AddForm onCancel={close} />}
    </div>
  );
};

export default Bio;
