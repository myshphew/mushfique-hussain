"use client";

import { useEffect, useState } from "react";

const links = [
  ["Myself", "#about"],
  ["Works", "#projects"],
  ["Interest", "#playground"],
  ["Journey", "#journey"],
  ["Contact", "#contact"],
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    if (!header) return;

    let lastY = window.scrollY;
    let frame = 0;

    if (isOpen) header.classList.remove("nav-hidden");

    const onScroll = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const currentY = window.scrollY;

        if (currentY < 80 || isOpen || header.contains(document.activeElement)) {
          header.classList.remove("nav-hidden");
          lastY = currentY;
        } else if (currentY - lastY >= 8) {
          header.classList.add("nav-hidden");
          lastY = currentY;
        } else if (lastY - currentY >= 8) {
          header.classList.remove("nav-hidden");
          lastY = currentY;
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      header.classList.remove("nav-hidden");
    };
  }, [isOpen]);

  return (
    <div className={`mobile-nav${isOpen ? " is-open" : ""}`}>
      <button
        className="mobile-menu-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>{isOpen ? "Close" : "Menu"}</span>
        <i aria-hidden="true" />
      </button>
      {isOpen && (
        <nav id="mobile-navigation" className="mobile-menu-links" aria-label="Mobile navigation">
          {links.map(([label, href], index) => (
            <a href={href} key={href} onClick={() => setIsOpen(false)}>
              {label}<span>{String(index + 1).padStart(2, "0")}</span>
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
