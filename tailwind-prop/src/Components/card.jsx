import React from "react";
function Card({ channel }) {
  console.log(channel);
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl my-5">
        hello world
      </h1>
      <div className="p-1 shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl ">
        <div className=" bg-black sm:p-10 p-6 rounded-xl">
          <div className="">
            <h5 className="text-xl font-bold text-gray-200">
              Science of Chemistry
            </h5>

            <p className="mt-2 text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              adipisci.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
