export const getImages = async(query)=>{
    const res = await fetch(`https://api.unsplash.com/search/photos?client_id=zEGmjIPJql4N_0HxuR69H8SNAEcLUnXO9pdfJW-WTyI&query=${query}`);
    const data = res.json();
    return data;
}