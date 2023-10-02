'use client'

import { useState, useEffect } from "react";
import MobileBar from "./MobileBar";
import DesktopBar from "./DesktopBar";


const NavBar = () => {
  const [isMobile, setIsMobile] = useState(true);


  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 960px)');

    const handleResize = (event: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(event.matches);
    };

    // Initial check on component mount
    handleResize(mediaQuery);

    // Listen for changes in the media query
    mediaQuery.addEventListener('change', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);


  return (
    <>
      {isMobile ? <MobileBar /> : <DesktopBar />}
    </>
  )
};

export default NavBar;