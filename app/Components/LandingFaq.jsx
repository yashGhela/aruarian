'use client'

import { useState } from "react";

export default function LandingFaq(){

    const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    'Question 1',
    'Question 2',
    'Question 3',
    'Question 4',
    'Question 5',
    'Question 6',
  ];

  const answers = [
    'Answer 1',
    'Answer 2',
    'Answer 3',
    'Answer 4',
    'Answer 5',
    'Answer 6',
  ];

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

    return(
        <div className="mt-[10%] flex-col md:grid md:grid-cols-2 text-gray-500 md:mx-20">
            <div>
            <p className="font-lighter text-gray-400 py-3 ">FAQ</p>
            <p className="font-bold text-3xl text-left mt-10 text-blue-300 py-3 ">Frequently Asked Questions</p>

            </div>
            <div className="w-full mt-[20%] mx-auto">
      {questions.map((question, index) => (
        <div
          key={index}
          className="mb-4 bg-gray-100 rounded-lg "
        >
          <div
            className="flex justify-between p-4 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="text-lg font-semibold ">{question}</h3>
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
            <div className="p-4">
              <p>{answers[index]}</p>
            </div>
          )}
        </div>
      ))}
    </div>

        </div>
    )
}