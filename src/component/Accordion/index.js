import React, { useState } from 'react';
import AccordionLayout from './Layout';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <>
      <h3 className="text-custom-blue-100 text-heading xl:leading-10 text-xl font-bold font-oswald">
        FREQUENTLY ASKED QUESTIONS
      </h3>
      <div className="flex flex-col justify-center items-center">
        <AccordionLayout
          title="I’m interested. How do I get the products?"
          index={1}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          className="font-normal"
        >
          <ol className="list-decimal">
            <li className="font-normal text-sm text-custom-blue-100">
              First, you need to register and make an account.
            </li>
            <li className="font-normal text-sm text-custom-blue-100">Log in to your new account</li>
            <li className="font-normal text-sm text-custom-blue-100">Choose the products you interested in</li>
            <li className="font-normal text-sm text-custom-blue-100">Follow the payment instructions</li>
            <li className="font-normal text-sm text-custom-blue-100">Voila, it's yours now</li>
          </ol>
        </AccordionLayout>
        <AccordionLayout
          title="When will I receive my order?"
          index={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          className="font-normal"
        >
          <ol className="list-decimal">
            <li className="font-normal text-sm text-custom-blue-100">Follow the payment instructions</li>
            <li className="font-normal text-sm text-custom-blue-100">Voila, it's yours now</li>
          </ol>
        </AccordionLayout>

        <AccordionLayout
          title="How about physical products?"
          index={3}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          className="font-normal"
        >
          <ol className="list-decimal">
            <li className="font-normal text-sm text-custom-blue-100">Follow the payment instructions</li>
          </ol>
        </AccordionLayout>
        <AccordionLayout
          title="I can't find my purchased products, where to find them?"
          index={4}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          className="font-normal"
        >
          <ol className="list-decimal">
            <li className="font-normal text-sm text-custom-blue-100">Log in to your new account</li>
            <li className="font-normal text-sm text-custom-blue-100">
              First, you need to register and make an account.
            </li>
          </ol>
        </AccordionLayout>
      </div>
    </>
  );
};

export default Accordion;
