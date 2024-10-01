import React from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";


const AddForm = () => {

  

  return (
    <div>
      <IoCloseCircleSharp />
      <div
        className="flex flex-col items-center justify-center  -ml-48 z-11 fixed top-16 left-1/2 -ml-48 z-10 bg-white shadow-md rounded-lg p-8 w-96 h-[400px]
"
      >
        <div className="w-full max-w-md bg-gray-200 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-200 mb-4">
            Upload lecture File
          </h2>

          <form className="flex flex-col">
            <input
            //  onChange={(event) => {
            //   setnoteUpload(event.target.files[0]);
            // }}
              placeholder="File Name"
              className="bg-gray-300 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
            />
            <input
              // value={noteName}
              // onChange={(e) => setnoteName(e.target.value)}
              placeholder="Resume"
              className="bg-gray-300 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="file"
            />

            <button
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              type="submit"
              // onClick={uploadFile}
            >
              Upload
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
