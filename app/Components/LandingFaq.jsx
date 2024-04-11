'use client'

import { useState } from "react";

export default function LandingFaq(){

    const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    'What can it do? ',
    'Why should I care? ',
    'Why is it paid?',
    'Besides save me time, what can it do for me? ',
    
  ];

  const answers = [
    'Aruarian can schedule tasks for you and remind you when things are coming up without you having to do anything, you can just speak to it normally ',
    'Aruarian can save you  time and help you live a more prioritized, zen lifestyle , and if you join us now you can help me grow it and make it better!',
    'OpenAI API costs a lot ',
    'Aruarian can help you figure out which tasks to prioritize first and how to schedule them out in a mindful way, in the future I hope to add more in depth conversations with Aruarian ',

  ];

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

    return(
        <div className="mt-[10%] flex-col md:w-1/2 px-10  md:mx-[25%]">
            <div>
            
            <p className="font-bold text-3xl text-left mt-10  py-3 ">Frequently Asked Questions</p>

            </div>
            <div className="w-full mt-[20%] mx-auto">
      {questions.map((question, index) => (
        <div
          key={index}
          className="mb-4  rounded-2xl bg-white/40 "
        >
          <div
            className="flex justify-between p-4 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="text-lg text-left font-semibold ">{question}</h3>
            <svg
              className={`${
                activeIndex === index
                  ? 'transform rotate-180'
                  : 'transform rotate-0'
              } w-6 h-6 transition-transform duration-300`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {activeIndex === index && (
            <div className="p-4 text-left">
              <p>{answers[index]}</p>
            </div>
          )}
        </div>
      ))}
    </div>

        </div>
    )
}