import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Form from "./components/Form";
import ImageContextProvider from "./context/ImageContext";
import Gallery from "./components/Gallery";
const App = () => {
  return (
    <ImageContextProvider>
      <main>
        <Hero />
        <Form />
        <Gallery />
      </main>
    </ImageContextProvider>
  );
};

export default App;
