function TitleUppercase({ color, text }) {
  return (
    <div className="flex items-center justify-between -mt-2 pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
      <h3 className={`${color} text-heading font-oswald text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold`}>
        {text}
      </h3>
      <a
        className="text-xs font-inter lg:text-sm xl:text-base text-heading mt-0.5 lg:mt-1"
        href="/"
        onClick={(e) => e.preventDefault()}
      >
        SEE MORE
      </a>
    </div>
  );
}

export default TitleUppercase;
