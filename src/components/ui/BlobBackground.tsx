import React from "react";

const BlobBackground = () => {
  return (
    <div className="h-[70vh] w-full overflow-hidden -z-10 absolute top-0 left-0">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[0%] w-[40rem] h-[40rem] rounded-full opacity-50 mix-blend-multiply blur-3xl animate-[blob-1_14s_ease-in-out_infinite]" />
        <div className="absolute top-[0%] right-[-10%] w-[38rem] h-[38rem] rounded-full opacity-40 mix-blend-multiply blur-3xl animate-[blob-2_16s_ease-in-out_infinite]" />
        <div className="absolute top-[5%] left-[30%] w-[32rem] h-[32rem] rounded-full opacity-35 mix-blend-multiply blur-2xl animate-[blob-3_18s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-10%] right-[20%] w-[35rem] h-[35rem] rounded-full opacity-30 mix-blend-multiply blur-3xl animate-[blob-2_15s_ease-in-out_infinite]" />
        <div
          className="absolute bottom-[50%] left-[20%] w-[14rem] h-[14rem] rounded-full opacity-10 mix-blend-screen blur-2xl animate-[ice-blob_20s_ease-in-out_infinite]"
          style={{ backgroundColor: "#B6CBE1" }}
        />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-black" />
      </div>
    </div>
  );
};

export default BlobBackground;
