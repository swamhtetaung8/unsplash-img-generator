export const getImages = async (query) => {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?client_id=${
      import.meta.env.VITE_API_KEY
    }&query=${query}`
  );
  const data = res.json();
  return data;
};
