import React from "react";
import deapool from "/deadpool.jpeg";
import deapool2 from "/deapool2.jpeg";
import GOW from "/God.jpeg";
import Button from "./Button";
const Card = ({ title, desc }) => {
  return (
    <div className="bg-stone-500 rounded-lg w-72 flex flex-col items-center justify-center p-2">
      <img
        src={deapool}
        alt=""
        className="w-72 object-cover h-[40vh] rounded-lg "
      />
      <div className="px-4">
        <h1 className="text-white font-semibold text-3xl py-4">
          {title ? title : "Deapool"}
        </h1>
        <p className="text-white text-sm py-2 text-ellipsis overflow-x-hidden">
          {desc
            ? desc
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae mollitia iste nemo molestias. Enim quae perferendis amet similique"}
        </p>

        <Button
          text={"watch now"}
          className={"hover:bg-stone-300 transition-all duration-500 "}
        />
      </div>
    </div>
  );
};

export default Card;
