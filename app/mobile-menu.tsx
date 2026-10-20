"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const links = [
  ["Myself", "#about"],
  ["Works", "#projects"],
  ["Interest", "#playground"],
  ["Journey", "#journey"],
  ["Contact", "#contact"],
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    if (!header) return;

    let lastY = window.scrollY;
    let frame = 0;
    const previousOverflow = document.body.style.overflow;

    if (isOpen) {
      header.classList.remove("nav-hidden");
      document.body.style.overflow = "hidden";
      document.querySelector<HTMLElement>("#mobile-navigation a")?.focus();
    }

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

    const onKeyDown = (event: KeyboardEvent) => {
      if (isOpen && event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      } else if (isOpen && event.key === "Tab") {
        const focusable = document.querySelectorAll<HTMLElement>(
          ".mobile-menu-modal a[href], .mobile-menu-modal button:not([disabled])",
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    const onResize = () => {
      if (!window.matchMedia("(max-width: 780px)").matches) setIsOpen(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      if (frame) window.cancelAnimationFrame(frame);
      if (isOpen) document.body.style.overflow = previousOverflow;
      header.classList.remove("nav-hidden");
    };
  }, [isOpen]);

  return (
    <>
      <div className="mobile-nav">
        <button
          ref={toggleRef}
          className="mobile-menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label="Open navigation menu"
          onClick={() => setIsOpen(true)}
        >
          <span>Menu</span>
          <i aria-hidden="true" />
        </button>
      </div>
      {isOpen && typeof document !== "undefined" && createPortal(
        <div className="mobile-menu-modal" role="dialog" aria-modal="true" aria-label="Site navigation">
          <div className="mobile-menu-top">
            <a className="mobile-menu-wordmark" href="#top" onClick={() => setIsOpen(false)}>
              Mushfique Hussain<span className="wordmark-mark">.</span>
            </a>
            <button
              className="mobile-menu-toggle is-open"
              type="button"
              aria-expanded="true"
              aria-controls="mobile-navigation"
              aria-label="Close navigation menu"
              onClick={() => {
                setIsOpen(false);
                toggleRef.current?.focus();
              }}
            >
              <span>Close</span>
              <i aria-hidden="true" />
            </button>
          </div>
          <nav id="mobile-navigation" className="mobile-menu-links" aria-label="Mobile navigation">
            {links.map(([label, href], index) => (
              <a href={href} key={href} onClick={() => setIsOpen(false)}>
                {label}<span>{String(index + 1).padStart(2, "0")}</span>
              </a>
            ))}
          </nav>
        </div>,
        document.body,
      )}
    </>
  );
}
