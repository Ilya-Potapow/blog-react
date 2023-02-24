import React from "react";
import { useScroll } from "../../../hooks/useVievport";
import "./ScrollTop.css";

const ScrollTop = () => {
  const { height } = useScroll();
  const breakpoint = 450;
  const scrollTo = () => {
    window.scrollTo({ top: 735, behavior: "smooth" });
  };
  if (height < breakpoint) return;
  return (
    <div
      title="Go to top"
      className="scrollTop_el"
      onClick={scrollTo}
    >
      Top
    </div>
  );
};

export default ScrollTop;
