import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import  './HorizontalScrolling.css'

const HorizontalScrolling = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {
      if (scrollContainerRef.current) {
        gsap.to(scrollContainerRef.current, {
          scrollLeft: scrollContainerRef.current.scrollLeft + event.deltaY,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    const container = scrollContainerRef.current;
    container.addEventListener("wheel", handleWheel);

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="flex overflow-x-auto whitespace-nowrap hide-scrollbar"
      style={{ height: "100vh" }}
    >
      <div className="flex-shrink-0 w-screen h-full">
        <Page1 />
      </div>
      <div className="flex-shrink-0 w-screen h-full">
        <Page2 />
      </div>
      <div className="flex-shrink-0 w-screen h-full">
        <Page3 />
      </div>
    </div>
  );
};

export default HorizontalScrolling;
