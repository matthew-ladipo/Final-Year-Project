import React from "react";

const User = ({ logout }) => {
  return (
    <div>
      <div class="flex  items-center justify-center flex  z-11 fixed top-[70px] right-[10px]  shadow-4xl">
        <div class="w-30 rounded-lg border-2 border-purple-300 bg-transparent p-4 text-center shadow-lg dark:bg-gray-300">
          <div class="flex items-center justify-center">
            <a
              onClick={logout}
              class="rounded-full bg-purple-600 px-4 py-2 text-white hover:bg-indigo-700 dark:bg-indigo-400 dark:hover:bg-indigo-500"
            >
              Log out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
