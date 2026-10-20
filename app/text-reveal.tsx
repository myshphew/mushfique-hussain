"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const revealTargets = [
  "#main-content :is(h1, h2, h3, p, blockquote, .mono, a:not(.project-visual))",
  "#main-content .project-tags li",
  ".site-footer :is(p, a, .footer-bottom span)",
].join(", ");

export default function TextReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scope = document.querySelector("main");
    if (!scope) return;

    const context = gsap.context(() => {
      const hero = scope.querySelector<HTMLElement>(".hero");
      if (hero) {
        const heroTimeline = gsap.timeline();

        if (window.matchMedia("(max-width: 780px)").matches) {
          heroTimeline
            .fromTo(
              hero.querySelectorAll(".hero-meta > span"),
              { autoAlpha: 0, y: 8 },
              { autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.08, ease: "power3.out" },
              0,
            )
            .fromTo(
              hero.querySelectorAll(".hero h1 > span"),
              { autoAlpha: 0, y: 10 },
              { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out" },
              0.08,
            )
            .fromTo(
              hero.querySelectorAll(".hero-details"),
              { autoAlpha: 0, y: 8 },
              { autoAlpha: 1, y: 0, duration: 0.65, ease: "power3.out" },
              ">-0.15",
            )
            .fromTo(
              hero.querySelectorAll(".hero-foot > *"),
              { autoAlpha: 0, y: 8 },
              { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power3.out" },
              ">-0.2",
            );
        } else {
          heroTimeline
            .fromTo(
              hero.querySelectorAll(".hero h1 > span"),
              { autoAlpha: 0, y: 24 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 1,
                stagger: 0.16,
                ease: "power3.out",
              },
              0,
            )
            .fromTo(
              hero.querySelectorAll(".hero-details"),
              { autoAlpha: 0, y: () => window.innerHeight * 0.55 },
              { autoAlpha: 1, y: 0, duration: 1.2, ease: "power3.out" },
              ">",
            )
            .fromTo(
              hero.querySelectorAll(".hero-meta > span"),
              { autoAlpha: 0, y: () => -window.innerHeight * 0.28 },
              { autoAlpha: 1, y: 0, duration: 1.2, ease: "power3.out" },
              "<",
            )
            .fromTo(
              hero.querySelectorAll(".hero-foot > *"),
              { autoAlpha: 0, y: 10 },
              { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.08, ease: "power3.out" },
              ">-0.12",
            );
        }
      }

      Array.from(scope.querySelectorAll<HTMLElement>(revealTargets))
        .filter((element) => !element.closest(".hero"))
        .forEach((element, index) => {
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 12 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              delay: (index % 4) * 0.035,
              ease: "power2.out",
              overwrite: "auto",
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true,
              },
            },
          );
        });
    }, scope);

    return () => context.revert();
  }, []);

  return null;
}
