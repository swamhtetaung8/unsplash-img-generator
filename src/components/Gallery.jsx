import React, { useEffect, useState } from "react";
import { getImages } from "../services/fetchImages";
import { useCustomImage } from "../context/ImageContext";
import { CgSpinner } from "react-icons/cg";
const Gallery = () => {
  const { images, setImages, imgLoading, setImgLoading } = useCustomImage();

  useEffect(() => {
    setImgLoading(true);
    getImages("mountains").then((images) => {
      console.log(images);
      setImages(images.results);
      setImgLoading(false);
    });
  }, []);
  if (imgLoading) {
    return (
      <div className="flex justify-center min-h-screen mt-20">
        <CgSpinner className="text-6xl animate-spin" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-10 m-10 lg:grid-cols-3 md:grid-cols-2">
      {images.map((image) => (
        <article key={image.id} className="group">
          <img
            alt="Lava"
            src={image.urls.small}
            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
          />

          <div className="p-4">
            <h3 className="font-medium text-gray-900 truncate text-md first-letter:uppercase">
              {image.alt_description}
            </h3>
            <div className="flex items-center justify-between mt-3">
              <p className="text-sm text-black/50 md:text-md">
                By {image.user.name}
              </p>

              <a
                className="inline-block px-5 py-2 text-sm font-medium text-indigo-600 border border-indigo-600 rounded md:px-10 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                href={image.urls.full}
                target="blank">
                View
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Gallery;
