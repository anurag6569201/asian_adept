import React, { useEffect } from "react";
import './pages/home/css/cursor.css'

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const cursor2 = document.getElementById("cursor2");
    const cursor3 = document.getElementById("cursor3");

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      cursor2.style.left = `${e.clientX}px`;
      cursor2.style.top = `${e.clientY}px`;

      cursor3.style.left = `${e.clientX}px`;
      cursor3.style.top = `${e.clientY}px`;
    };

    const addHoverEffect = () => {
      cursor2.classList.add("hover");
      cursor3.classList.add("hover");
    };

    const removeHoverEffect = () => {
      cursor2.classList.remove("hover");
      cursor3.classList.remove("hover");
    };

    document.addEventListener("mousemove", moveCursor);

    const hoverTargets = document.querySelectorAll(".hover-target");
    hoverTargets.forEach((target) => {
      target.addEventListener("mouseover", addHoverEffect);
      target.addEventListener("mouseout", removeHoverEffect);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      hoverTargets.forEach((target) => {
        target.removeEventListener("mouseover", addHoverEffect);
        target.removeEventListener("mouseout", removeHoverEffect);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor2" id="cursor2"></div>
      <div className="cursor3" id="cursor3"></div>
    </>
  );
};

export default Cursor;
