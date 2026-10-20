"use client";

import Image from "next/image";
import { useState, type KeyboardEvent } from "react";

type CardName = "portrait" | "signal";

export default function HeroCardStack() {
  const [topCard, setTopCard] = useState<CardName>("portrait");

  function handleCardKeyDown(event: KeyboardEvent<HTMLElement>, card: CardName) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setTopCard(card);
    }
  }

  const portraitIsTop = topCard === "portrait";
  const signalIsTop = topCard === "signal";

  return (
    <div className="hero-card-stack" role="group" aria-label="Portrait and field note cards">
      <figure
        className={`portrait-card ${portraitIsTop ? "is-top" : "is-bottom"}`}
        role={portraitIsTop ? undefined : "button"}
        tabIndex={portraitIsTop ? undefined : 0}
        aria-label={portraitIsTop ? undefined : "Bring the portrait card to the front"}
        onClick={portraitIsTop ? undefined : () => setTopCard("portrait")}
        onKeyDown={portraitIsTop ? undefined : (event) => handleCardKeyDown(event, "portrait")}
      >
        <div className="portrait-card-meta mono">
          <span>MH / PORTRAIT STUDY</span>
          <span>01 — 2026</span>
        </div>
        <Image
          src="/images/hero-portrait.png"
          alt="Illustrated portrait of Mushfique Hussain"
          width={1254}
          height={1254}
          priority
          className="portrait-image"
        />
        <figcaption className="portrait-card-caption mono">
          <span>DESIGN × ENGINEERING</span>
          <span>DHAKA, BANGLADESH</span>
        </figcaption>
      </figure>

      <figure
        className={`signal-figure ${signalIsTop ? "is-top" : "is-bottom"}`}
        role={signalIsTop ? undefined : "button"}
        tabIndex={signalIsTop ? undefined : 0}
        aria-label={signalIsTop ? undefined : "Bring the field note card to the front"}
        onClick={signalIsTop ? undefined : () => setTopCard("signal")}
        onKeyDown={signalIsTop ? undefined : (event) => handleCardKeyDown(event, "signal")}
      >
        <div className="signal-top mono">
          <span>FIELD NOTE / 001</span>
          <span>OBSERVE → MAKE</span>
        </div>
        <svg className="signal-drawing" viewBox="0 0 400 300" fill="none" aria-hidden="true">
          <path d="M16 276H384" stroke="currentColor" strokeOpacity=".16" />
          <path d="M16 176H384" stroke="currentColor" strokeOpacity=".12" strokeDasharray="3 7" />
          <path d="M16 76H384" stroke="currentColor" strokeOpacity=".12" strokeDasharray="3 7" />
          <path d="M35 105C58 105 73 118 92 144C112 171 119 224 145 234C165 243 177 207 197 199C216 192 229 231 249 218C272 203 276 142 298 125C316 111 325 162 343 150C361 139 362 72 382 48" stroke="currentColor" strokeWidth="1.5" />
          <path d="M145 234C165 243 177 207 197 199C216 192 229 231 249 218C272 203 276 142 298 125C316 111 325 162 343 150C361 139 362 72 382 48" stroke="var(--blue)" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="35" cy="105" r="4" fill="var(--paper)" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="145" cy="234" r="5" fill="var(--tomato)" />
          <circle cx="197" cy="199" r="4" fill="var(--paper)" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="249" cy="218" r="4" fill="var(--paper)" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="298" cy="125" r="4" fill="var(--paper)" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="343" cy="150" r="4" fill="var(--paper)" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="382" cy="48" r="8" fill="var(--blue)" />
        </svg>
        <p className="signal-note">The details<br />are the direction.</p>
        <div className="signal-caption mono">
          <span>01 / THE FALL</span>
          <span>02 / THE TURN</span>
          <span>03 / THE IMPACT</span>
        </div>
      </figure>
    </div>
  );
}
