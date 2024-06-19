import React from 'react';
// import Carousel from '../Carousel';
import { Carousel, initTE } from "tw-elements";

initTE({ Carousel })

function HomePage() {
  return (
    <div>
      <Carousel />
      <div>Welcome to our company website!</div>
    </div>
  );
}

export default HomePage;
