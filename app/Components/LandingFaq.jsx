'use client'

import { useState } from "react";

export default function LandingFaq(){

    const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    'What can it do? ',
    'Why should I care? ',
    'Why is it paid?',
    'Besides save me time, what can it do for me? ',
    'Why is this better than other tools?'
    
    
  ];

  const answers = [
    'Aruarian can schedule tasks and to-do lists for you, update your schedule on the fly and find you specifics  on your schedule on the fly , all in natural language ',
    'Aruarian can save you  time and help you live a more prioritized, zen lifestyle , and if you join us now you can help me grow it and make it better!',
    'Aruarian isn\'t a big team, its actually just one guy which is me, Yash! As such I can\'t continue development without some sort of financial support! Aruarian still has a free tier if you can\'t or don\'t feel like paying, you can help us out by spreading the word!   ',
    'Aruarian can help you figure out which tasks to prioritize first and how to schedule them out in a mindful way, in the future I hope to add more in depth conversations with Aruarian along with voice chat, dynamic lists and more! ',
    'This might not better than other tools for YOU. But, here\'s a few reasons: \n 1.Less Manual UI to work through \n 2. Easier organizing (aka u dont have to do anything) \n 3. A constantly adapting tool'

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