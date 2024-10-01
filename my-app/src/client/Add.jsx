import React from "react";
import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";


const Add = () => {
 
  const [imageUpload, setImageUpload] = useState(null);
  const [imageName, setImageName] = useState(""); // State to store the image name
  const [imageUrls, setImageUrls] = useState([]);
  const imagesListRef = ref(storage, "images/");

  // Function to upload the file
  const uploadFile = async () => {
    if (imageUpload == null || imageName.trim() === "") return; // Ensure both file and name are provided

    try {
      // Use the image name provided by the user along with a unique ID to avoid conflicts
      const imageRef = ref(storage, `images/${imageName + "_" + v4()}`);

      const snapshot = await uploadBytes(imageRef, imageUpload);
      const url = await getDownloadURL(snapshot.ref);

      // Store the image name and URL in the state
      setImageUrls((prev) => [...prev, { name: imageName, url }]);
    } catch (error) {
      console.error("Error uploading file: ", error);
    }
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          // Add URLs with placeholder names (since they're already uploaded)
          setImageUrls((prev) => [...prev, { name: item.name, url }]);
        });
      });
    });
  }, []);

  return (
    <>
      <div className="py-5 px-5">
        <div className=" w-[600px] items-center my-10 ml-10 justify-center bg-gray-400 px-5 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <input
            type="file"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
          <input
            type="text"
            placeholder="Enter file name"
            value={imageName}
            onChange={(e) => setImageName(e.target.value)} // Set the image name entered by the user
            className="m-2 p-2 border text-black"
          />
          <button
            onClick={uploadFile}
            className="inline-flex text-black cursor-pointer items-center gap-1 rounded border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
          >
            Upload
          </button>
        </div>
        <div className="grid gap-10 grid-cols-3 z-6  grid-rows-2 max-[800px]:grid-cols-2 max-[1100px]:grid-cols-3 py-5 px-10 ">
          {imageUrls.map((item) => {
            return (
              <div
                key={item.url}
                className="w-64 z-10 bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-5 space-y-3 relative overflow-hidden"
              >
                <div>
                  <h2 className="font-bold text-xl">
                    {item.name}
                  </h2>
                </div>

                <div className="flex px-6 pb-8 sm:px-8">
                  <a
                    aria-describedby="tier-company"
                    className="flex items-center justify-center w-full px-6  text-center  duration-200  border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black"
                    href={item.url}
                  >
                    View
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </>
  );
};

export default Add;

