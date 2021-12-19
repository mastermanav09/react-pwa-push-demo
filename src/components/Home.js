import React from "react";
import { subscribe } from "../swDev";

const Home = () => {
  return (
    <div>
      Home Page
      <button onClick={subscribe}>Subscribe</button>
    </div>
  );
};

export default Home;
