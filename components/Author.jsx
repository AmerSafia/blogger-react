import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
      <div className=" absolute left-0 right-0 -top-14">
        <Image
          unoptimized
          src={author.photo.url}
          alt={author.name}
          width="100px"
          height="100px"
          className=" align-middle rounded-3xl opacity-80"
        />
      </div>
      <h3 className=" text-white my-4 font-bold text-xl"> {author.name}</h3>
      <p className=" text-white text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
