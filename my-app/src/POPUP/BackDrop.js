import React from "react";


const BcakDrop = (props) => {
  return <div className="fixed inset-0 z-10 bg-gray-700 bg-opacity-75 h-screen w-full" onClick={props.onCancel}>  </div>;
};

export default BcakDrop;
