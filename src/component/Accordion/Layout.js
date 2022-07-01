import React from 'react';

// import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs';

const AccordionLayout = ({ title, children, index, activeIndex, setActiveIndex }) => {
  const handleSetIndex = (index) => activeIndex !== index && setActiveIndex(index);

  return (
    <>
      <div onClick={() => handleSetIndex(index)} className="flex w-full justify-between mt-3">
        <div className="flex">
          <div className="text-custom-blue-100 font-bold text-base cursor-pointer">{title}</div>
        </div>
      </div>

      {activeIndex === index && <div className="shadow-3xl text-left rounded-2xl shadow-cyan-500/50 p-4 pl-6 mb-6 w-full">{children}</div>}
    </>
  );
};

export default AccordionLayout;
