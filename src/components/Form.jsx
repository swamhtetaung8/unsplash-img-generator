import React, { useState } from "react";
import { useCustomImage } from "../context/ImageContext";
import { getImages } from "../services/fetchImages";

const Form = () => {
  const { setImages, setImgLoading } = useCustomImage();

  const [input, setInput] = useState();

  const handleSubmit = (e) => {
    setImgLoading(true);
    e.preventDefault();
    getImages(input).then((images) => {
      setImages(images.results);
      setImgLoading(false);
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      name="searchForm"
      className="relative w-1/2 mx-auto my-3 border rounded-md">
      <label htmlFor="Search" className="sr-only">
        {" "}
        Search{" "}
      </label>
      <input
        type="text"
        id="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Mountains"
        className="w-full rounded-md border-gray-200 py-2.5 px-5 outline-none shadow-sm sm:text-sm"
        required
      />

      <span className="absolute inset-y-0 grid w-10 end-0 place-content-center">
        <button type="submit" className="text-gray-600 hover:text-gray-700">
          <span className="sr-only">Search</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4">
            <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
      </span>
    </form>
  );
};

export default Form;
