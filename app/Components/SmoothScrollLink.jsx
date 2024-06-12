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
      <Link to={to} onClick={handleClick}  className={` text-neutral-700/40  mt-12 p-4 pl-0  cursor-pointer`}>
        {children}
      </Link>
    );
  }