// hooks/useBodyScrollLock.js
import { useEffect } from "react";

export function useBodyScrollLock(locked) {
  useEffect(() => {
    if (!locked) return;

    const scrollY = window.scrollY;
    const original = {
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      overflowY: document.body.style.overflowY,
    };

    // lock the body without causing layout shift
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflowY = "scroll"; // keeps scrollbar to avoid shift

    return () => {
      document.body.style.position = original.position;
      document.body.style.top = original.top;
      document.body.style.width = original.width;
      document.body.style.overflowY = original.overflowY;
      // restore the previous scroll position
      window.scrollTo(0, scrollY);
    };
  }, [locked]);
}
