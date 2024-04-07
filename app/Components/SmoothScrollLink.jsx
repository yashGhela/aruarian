'use client'

import { Link, Element, scroller } from 'react-scroll';




export function SmoothScrollLink({ to, children }) {
    const handleClick = () => {
      scroller.scrollTo(to, {
        duration: 800,  // Adjust the duration as needed
        smooth: 'easeInOut',
      });

      window.location.hash=to
    };
  
    return (
      <Link to={to} onClick={handleClick}  className={` mt-12 p-4 sm:invisible invisible md:visible ml-8 cursor-pointer`}>
        {children}
      </Link>
    );
  }