import React from 'react';
function CustomCarousel({ images = [] }) {
  const [currentImage, setCurrentImage] = React.useState(0);

  const refs = images.reduce((acc, val, i) => {
    acc[i] = React.createRef();
    return acc;
  }, {});

  const scrollToImage = (i) => {
    setCurrentImage(i);
    refs[i].current.scrollIntoView({
      //     Defines the transition animation.
      behavior: 'smooth',
      //      Defines vertical alignment.
      block: 'nearest',
      //      Defines horizontal alignment.
      inline: 'start',
    });
  };

  const totalImages = images.length;

  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  const sliderControls = (isLeft) => (
    <button
      type="button"
      className={`px-4 cursor-pointer group focus:outline-none ${isLeft ? 'left-2' : 'right-2'}`}
      onClick={isLeft ? previousImage : nextImage}
    >
      {isLeft ? (
        <span
          className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-custom-blue-200 dark:bg-gray-800/30 group-hover:bg-blue-700/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          role="img"
          aria-label="Arrow left"
        >
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
      ) : (
        <span
          className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-custom-blue-200 dark:bg-gray-800/30 group-hover:bg-blue-700/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          role="img"
          aria-label="Arrow right"
        >
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
      )}
    </button>
  );

  return (
    <div className="flex justify-center items-center border">
      <div className="relative w-full">
        <div className="carousel">
          {images.map((img, i) => (
            <div className="w-full flex-shrink-0" key={img} ref={refs[i]}>
              <img src={img} className="w-full object-contain" alt="" />
            </div>
          ))}
        </div>
        {sliderControls(true)}
        {sliderControls()}
      </div>
      <style>
        {`
          .carousel {
            display: inline-flex;
            overflow-x: hidden;
            /*  scroll snap is a great feature which will center the image on snap on touch screen devices  */
            scroll-snap-type: x mandatory;
            /* all below will hide the scrollbar on all browsers.    */
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none; /* For Firefox */
            -ms-overflow-style: none; /* For Internet Explorer and Edge */
          }
        `}
      </style>
    </div>
  );
}

export default CustomCarousel;
