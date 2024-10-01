import React from "react";
import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";
import { MdOutlineAdd } from "react-icons/md";
import BackDrop from "../POPUP/BackDrop";
import AddForm from "../client/AddForm";

const Bio = () => {
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
      name: "csc 111",
      dept: "100L-400L",
      url: "add",
    },
    {
      id: 2,
      name: "csc 112",
      dept: "100L-400L",
    },
    { id: 3, name: "csc 104", dept: "100L-400L" },
    {
      id: 4,
      name: "csc 132",
      dept: "100L-400L",
    },
    {
      id: 5,
      name: "csc 201",
      dept: "100L-400L",
    },
    {
      id: 6,
      name: "csc 222",
      dept: "100L-400L",
    },
  ];

  const [noteUpload, setnoteUpload] = useState(null);
  const [noteName, setnoteName] = useState(""); // State to store the image name
  const [noteUrl, setnoteUrl] = useState([]);
  const notesListRef = ref(storage, "computer-sci-notes/");

  // Function to upload the file
  const uploadFile = async () => {
    if (noteUpload == null || noteName.trim() === "") return; // Ensure both file and name are provided

    try {
      // Use the image name provided by the user along with a unique ID to avoid conflicts
      const imageRef = ref(
        storage,
        `computer-sci-notes/${noteName + "_" + v4()}`
      );

      const snapshot = await uploadBytes(imageRef, noteUpload);
      const url = await getDownloadURL(snapshot.ref);

      // Store the image name and URL in the state
      setnoteUrl((prev) => [...prev, { name: noteName, url }]);
    } catch (error) {
      console.error("Error uploading file: ", error);
    }
  };

  useEffect(() => {
    listAll(notesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          // Add URLs with placeholder names (since they're already uploaded)
          setnoteUrl((prev) => [...prev, { name: item.name, url }]);
        });
      });
    });
  }, []);

  return (
    <div className="py-5 px-5">
      <div className="flex justify-between">
        <div className=" w-[350px] items-center my-5  justify-center bg-gray-400 px-5 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <input
            type="file"
            onChange={(event) => {
              setnoteUpload(event.target.files[0]);
            }}
          />
          <input
            type="text"
            placeholder="Enter file name"
            value={noteName}
            onChange={(e) => setnoteName(e.target.value)} // Set the image name entered by the user
            className="m-2 p-2 border text-black"
          />
          <button
            onClick={uploadFile}
            className="inline-flex text-black cursor-pointer items-center gap-1 rounded border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
          >
            Upload
          </button>
        </div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          class="input rounded-full px-8 py-3 h-10 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
          placeholder="Search..."
          required=""
          type="text"
        />
      </div>
      <main className="p-10">
        <div>
          <div className="grid gap-10 grid-cols-3 z-6  grid-rows-2 max-[800px]:grid-cols-2 max-[1100px]:grid-cols-3    ">
            {noteUrl
              .filter((items) => {
                return search.toLowerCase() === ""
                  ? items
                  : items.name.toLowerCase().includes(search);
              })
              .map((items) => (
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
                      href={items.url}
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
      {showPopup && (
        <AddForm
          onCancel={close}
          set={setnoteUpload}
          set2={setnoteName}
          uploade={uploadFile}
        />
      )}
    </div>
  );
};

export default Bio;
