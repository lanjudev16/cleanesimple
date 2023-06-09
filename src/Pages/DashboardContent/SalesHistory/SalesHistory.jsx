import React from "react";
import image1 from '../../../assets/image1.jpeg'
import image2 from '../../../assets/image2.jpeg'
import image3 from '../../../assets/image3.jpeg'

const SalesHistory = () => {
 

  return (
    <div className="flex flex-col gap-4 items-center mt-[24px] p-[20px] rounded  bg-[#2F3349]">
     <h1 className="text-[#A2A6C1] text-xl font-medium">Sales History</h1>
     <div className="grid lg:grid-cols-4 gap-5 items-center">
      <>
      <div className="col-span-1">
        <img src={image1} alt="" />
      </div>
      <div className="col-span-3 ">
        <h1 className="text-[#A2A6C1] text-base font-medium">Romber kings</h1>
      </div>
      </>
      <>
      <div className="col-span-1">
        <img src={image2} alt="" />
      </div>
      <div className="col-span-3 ">
        <h1 className="text-[#A2A6C1] text-base font-medium">Rafsan</h1>
      </div>
      </>
      <>
      <div className="col-span-1">
        <img src={image3} alt="" />
      </div>
      <div className="col-span-3 ">
        <h1 className="text-[#A2A6C1] text-base font-medium">Samim kaisar</h1>
      </div>
      </>
      <>
      <div className="col-span-1">
        <img src={image1} alt="" />
      </div>
      <div className="col-span-3 ">
        <h1 className="text-[#A2A6C1] text-base font-medium">Rakibul islam</h1>
      </div>
      </>
     </div>
    </div>
  );
};

export default SalesHistory;
