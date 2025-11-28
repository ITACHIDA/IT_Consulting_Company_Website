"use client";

import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 240);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-400/30 transition hover:-translate-y-0.5 hover:shadow-cyan-300/50 ${
        visible ? "opacity-100 translate-y-0" : "pointer-events-none translate-y-3 opacity-0"
      } cursor-pointer`}
      aria-label="Scroll to top"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 5L5 12" />
        <path d="M12 5l7 7" />
        <path d="M12 5v14" />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
