import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './vertical_overlay.css'; // Import the CSS file

const PageLoader = () => {
  const overlayRef = useRef(null);

  useEffect(() => {
    startLoader();
  }, []);

  const startLoader = () => {
    let currentValue = 0;

    const updateCounter = () => {
      if (currentValue === 100) {
        return;
      }

      currentValue += Math.floor(Math.random() * 20) + 1;

      if (currentValue > 100) {
        currentValue = 100;
      }
      let delay = Math.floor(Math.random() * 40) + 50;
      //updateCounter();
      setTimeout(updateCounter, delay);
    };

    updateCounter();
  };

  useEffect(() => {
    // gsap.to(counterRef.current, 0.25, {
    //     delay: 1.25,
    //     opacity: 0,
    //     zIndex:-3
    // });

    gsap.to(".bar", 1.25, {
        delay:0.5,
        height:0,
        stagger:{
            amount:0.25,
        },
        ease: "power4.inOut",
        zIndex:-2,
    });

    gsap.to(".overlay", 0.1, {
        delay: 1.5,
        zIndex: -3,
    })
  }, []);

  return (
    <div>
      {/* <h1 ref={counterRef} className="counter">0</h1> */}

      <div ref={overlayRef} className="overlay">
        <div className="bar">T</div>
        <div className="bar">Y</div>
        <div className="bar">P</div>
        <div className="bar">O</div>
        <div className="bar">G</div>
        <div className="bar">R</div>
        <div className="bar">A</div>
        <div className="bar">P</div>
        <div className="bar">H</div>
        <div className="bar">Y</div>
      </div>

      <div id="root"></div>
    </div>
  );
};

export default PageLoader;
