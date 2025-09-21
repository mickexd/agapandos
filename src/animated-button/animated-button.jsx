import "./animated-button.css";
import React, { useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import { IoMdArrowForward } from "react-icons/io";

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

const AnimatedButton = ({
  label,
  route,
  animate = false,
  animateOnScroll = true,
  delay = 0,
}) => {
  // Check if the preloader is visible and set the delay accordingly
  // If delay is not provided or is 0, check for the loading screen
  let actualDelay = delay;
  if (delay === 0) {
    actualDelay = typeof document !== 'undefined' && document.getElementById("loading-screen") !== null ? 10.3 : 1.15;
  }
  const buttonRef = useRef(null);
  const circleRef = useRef(null);
  const iconRef = useRef(null);
  const textRef = useRef(null);
  const splitRef = useRef(null);

  // Simple navigation function
  const navigate = (path) => {
    window.location.href = path;
  };

  const waitForFonts = async () => {
    try {
      await document.fonts.ready;
      const customFonts = ["Poppins"];
      const fontCheckPromises = customFonts.map((fontFamily) => {
        return document.fonts.check(`16px ${fontFamily}`);
      });
      await Promise.all(fontCheckPromises);
      await new Promise((resolve) => setTimeout(resolve, 100));
      return true;
    } catch (error) {
      await new Promise((resolve) => setTimeout(resolve, 200));
      return true;
    }
  };

  useEffect(() => {
    if (!buttonRef.current || !textRef.current) return;

    if (!animate) {
      gsap.set(buttonRef.current, { scale: 1 });
      gsap.set(circleRef.current, { scale: 1, opacity: 1 });
      gsap.set(iconRef.current, { opacity: 1, x: 0 });
      return;
    }

    let isMounted = true;
    let scrollTriggerInstance = null;

    const initializeAnimation = async () => {
      await waitForFonts();

      if (!isMounted || !buttonRef.current || !textRef.current) return;

      const split = SplitText.create(textRef.current, {
        type: "lines",
        mask: "lines",
        linesClass: "line++",
        lineThreshold: 0.1,
      });
      splitRef.current = split;

      gsap.set(buttonRef.current, { scale: 0, transformOrigin: "center" });
      gsap.set(circleRef.current, {
        scale: 0,
        transformOrigin: "center",
        opacity: 0,
      });
      gsap.set(iconRef.current, { opacity: 0, x: -20 });
      gsap.set(split.lines, { y: "100%", opacity: 0 });

      const tl = gsap.timeline({ delay: actualDelay });

      tl.to(buttonRef.current, {
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
      });

      tl.to(
        circleRef.current,
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        },
        "+0.25"
      );

      tl.to(
        iconRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "-0.25"
      );

      tl.to(
        split.lines,
        {
          y: "0%",
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power4.out",
        },
        "-=0.2"
      );

      if (animateOnScroll) {
        scrollTriggerInstance = ScrollTrigger.create({
          trigger: buttonRef.current,
          start: "top 90%",
          once: true,
          animation: tl,
        });
      }
    };

    initializeAnimation();

    return () => {
      isMounted = false;
      if (splitRef.current) {
        splitRef.current.revert();
      }
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
    };
  }, [animate, animateOnScroll, actualDelay]);

  const buttonContent = (
    <>
      <span className="circle" ref={circleRef} aria-hidden="true"></span>
      <div className="icon" ref={iconRef}>
        <IoMdArrowForward />
      </div>
      <span className="button-text" ref={textRef}>
        {label}
      </span>
    </>
  );

  if (route) {
    return (
      <a
        href={route}
        className="btn"
        ref={buttonRef}
        onClick={(e) => {
          e.preventDefault();
          navigate(route);
        }}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button className="btn" ref={buttonRef}>
      {buttonContent}
    </button>
  );
};

export default AnimatedButton;
