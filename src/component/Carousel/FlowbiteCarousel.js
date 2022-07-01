import { Carousel } from 'flowbite-react';

export default function FlowbiteCarousel() {
  return (
    <div className="pb-16">
      <div className="w-full h-96">
        <Carousel indicators={false} leftControl={<ButtonPrevious />} rightControl={<ButtonNext />}>
          <img
            src="https://res.cloudinary.com/rafydev/image/upload/v1656564765/Thumbnail_n2mnia.png"
            alt=""
            className="rounded-2xl h-80"
          />
          <img
            src="https://res.cloudinary.com/rafydev/image/upload/v1645406687/komunitas-slank.png"
            className="rounded-2xl h-80"
            alt=""
          />
        </Carousel>
      </div>
    </div>
  );
}

const ButtonPrevious = () => (
  <span
    className="flex absolute -bottom-8 left-52 z-30 px-4 cursor-pointer group focus:outline-none"
    data-carousel-prev
  >
    <span className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-custom-blue-200 dark:bg-gray-800/30 group-hover:bg-blue-700/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
      <svg
        className="w-6 h-6 text-white dark:text-gray-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
      </svg>
      <span className="hidden">Previous</span>
    </span>
  </span>
);

const ButtonNext = () => (
  <span
    className="flex absolute -bottom-8 right-0 z-30 px-4 cursor-pointer group focus:outline-none"
    data-carousel-next
  >
    <span className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-custom-blue-200 dark:bg-gray-800/30 group-hover:bg-blue-700/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
      <svg
        className="w-6 h-6 text-white dark:text-gray-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
      </svg>
      <span className="hidden">Next</span>
    </span>
  </span>
);
