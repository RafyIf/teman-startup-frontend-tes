import React from 'react';
import { FlowbiteCarousel } from './Carousel';

export default function HeroComponent() {
  return (
    <div>
      <h1 className="text-5xl font-bold text-custom-blue-200 font-oswald uppercase">
        Dive deeper inside the mind of top-notch brands
      </h1>
      <p className="text-base mt-4 text-custom-blue-100 font-inter">
        Experience a new way of learning. Be inspired for your entrepreneurship journey, and befriend with the brand.
      </p>
      <button
        type="button"
        className="inline-flex font-inter font-bold text-custom-blue-100 justify-center rounded-xl border border-transparent bg-custom-blue-300 px-4 py-2 my-6 text-sm uppercase hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        LET’S GET STARTED
      </button>

      <FlowbiteCarousel />
    </div>
  );
}
