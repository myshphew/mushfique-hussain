import Image from "next/image";
import HeroCardStack from "./hero-card-stack";
import MobileMenu from "./mobile-menu";
import TextReveal from "./text-reveal";

const projects = [
  {
    number: "01",
    name: "CineReel",
    type: "Film & television discovery",
    description:
      "A place to browse films and series, shaped around cinematic contrast and the small pleasure of finding what to watch next.",
    tags: ["React", "Vite", "TVMaze API"],
    image: "/projects/project01.avif",
    href: "https://cinereel-myshphew.vercel.app/",
    art: "cinereel",
    alt: "CineReel interface preview",
  },
  {
    number: "02",
    name: "FitLog",
    type: "Workout library",
    description:
      "A focused companion for discovering workouts, saving favourites, and planning the day’s training without the noise.",
    tags: ["Next.js", "TypeScript", "Context API"],
    image: "/projects/project02.avif",
    href: "https://fitlog-myshphew.vercel.app/",
    art: "fitlog",
    alt: "FitLog interface preview",
  },
  {
    number: "03",
    name: "DevStack",
    type: "Personal tool",
    description:
      "A small experiment in composing a development toolkit, and in making choices, state, and a responsive interface feel clear.",
    tags: ["React", "TypeScript", "Vite"],
    image: "/projects/project03.avif",
    href: "https://dev-stack-mu.vercel.app/",
    art: "devstack",
    alt: "A layered, colorful illustration from the DevStack project",
  },
];

const process = [
  ["01", "Ideate", "Start with a question, a problem, or a feeling worth exploring."],
  ["02", "Design", "Give the idea a shape. Think about its purpose, its people, and the details."],
  ["03", "Coffee", "Step back. Let the idea breathe. Return with a different perspective."],
  ["04", "Code", "Move beyond the canvas and work through what makes the experience function."],
  ["05", "Live", "Let the idea meet the world. Learn what works, then keep going."],
];

const interests = [
  ["01", "Photography", "Light, composition, and the moments that disappear before you can explain them."],
  ["02", "Poetry", "A reminder that sometimes the simplest words carry the most weight."],
  ["03", "Coffee", "A reason to pause, observe, and return to an idea with a little distance."],
  ["04", "Nature", "A quiet reminder that beauty doesn’t need to perform."],
];

export default function Home() {
  return (
    <main id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Mushfique Hussain, home">
          Mushfique Hussain<span className="wordmark-mark">.</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">Myself</a>
          <a href="#projects">Works</a>
          <a href="#playground">Interest</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="mailto:mushfique.ndc23@gmail.com">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
        <MobileMenu />
      </header>

      <div id="main-content">
        <TextReveal />
        <section className="hero section-pad" aria-labelledby="hero-title">
          <div className="hero-meta mono">
            <span>DESIGN, ENGINEERING & EVERYTHING IN BETWEEN</span>
            <span className="meta-location"><i /> DHAKA, BANGLADESH</span>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <h1 id="hero-title">
                <span>In a world</span>
                <span>full of noise, I let</span>
                <span>the <em>details</em> speak.</span>
              </h1>
              <div className="hero-details">
                <p className="hero-intro">
                  I&apos;m Mushfique — a designer learning to build with code, exploring how thoughtful design and technology can make digital experiences feel as good as they work.
                </p>
                <div className="hero-actions">
                  <a className="button button-dark" href="#projects">Explore my work <span aria-hidden="true">↗</span></a>
                  <a
                    className="text-link"
                    href="/mushfique-hussain-resume.pdf"
                    download="Mushfique-Hussain-Resume.pdf"
                    aria-label="Download résumé PDF"
                  >
                    Résumé
                    <svg className="download-icon" aria-hidden="true" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1.75v8.5m0 0 3-3m-3 3-3-3M2.5 10.25v3.25h11v-3.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <HeroCardStack />
          </div>

          <div className="hero-foot mono">
            <span>QUIET BY NATURE. CURIOUS BY DESIGN.</span>
            <a href="#about">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <section id="about" className="about-section section-pad" aria-labelledby="about-title">
          <div className="section-label mono"><span>01 — THE OBSERVER</span><span>A LITTLE ABOUT THE PERSON BEHIND THE PIXELS</span></div>
          <div className="about-grid">
            <h2 id="about-title">I notice things.<br /><em>Then I wonder</em><br />what I could make.</h2>
            <div className="about-copy">
              <p className="lede">The way light falls across a room. The rhythm of a well-written sentence. The small detail that makes an interface feel just right.</p>
              <p>My background in visual design and UX taught me to look beyond appearances and think about the people behind every experience. Studying computer science is teaching me how to turn those ideas into something tangible.</p>
              <p>Now, I&apos;m exploring the space where design meets engineering — where thoughtful ideas become meaningful, working experiences.</p>
              <a className="text-link" href="#journey">Follow the journey <span aria-hidden="true">→</span></a>
            </div>
          </div>

          <div className="craft-note">
            <p className="mono craft-note-label">A NOTE ON CRAFTSMANSHIP</p>
            <blockquote>The beauty lies in what you notice.<br /><em>The craft lies in what you make of it.</em></blockquote>
            <div className="craft-note-bottom"><p>Good work doesn&apos;t always need to announce itself.</p><span className="craft-mark" aria-hidden="true">✳</span></div>
          </div>
        </section>

        <section id="projects" className="projects-section" aria-labelledby="projects-title">
          <div className="section-pad projects-head">
            <div className="section-label mono"><span>02 — SELECTED WORK</span><span>A FEW THINGS I&apos;VE BEEN MAKING</span></div>
            <div className="projects-intro">
              <h2 id="projects-title">Ideas are interesting.<br /><em>Bringing them to life is the craft.</em></h2>
              <p>Each project begins somewhere different. Each one teaches me something new.</p>
            </div>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article
                className={`project${index % 2 === 1 ? " project-reversed" : ""} project-${project.art}`}
                key={project.name}
              >
                <a className="project-visual" href={project.href} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}>
                  <div className="project-image-frame">
                    <Image src={project.image} alt={project.alt} fill sizes="(max-width: 780px) 100vw, 67vw" className="project-image" />
                  </div>
                  <span className="project-open mono">OPEN PROJECT <i aria-hidden="true">↗</i></span>
                  <span className="project-visual-index mono">{project.number} / LIVE WORK</span>
                </a>
                <div className="project-copy">
                  <div className="project-title-row"><span className="mono project-number">{project.number}</span><p className="mono">{project.type}</p></div>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-tags" aria-label={`${project.name} tools`}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                  <a className="project-link" href={project.href} target="_blank" rel="noreferrer">Explore the project <span aria-hidden="true">↗</span></a>
                </div>
              </article>
            ))}
          </div>
          <div className="section-pad projects-foot">
            <span className="mono">MORE EXPERIMENTS ARE IN MOTION</span>
            <a className="text-link" href="https://github.com/myshphew" target="_blank" rel="noreferrer">Follow along on GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section id="playground" className="playground-section section-pad" aria-labelledby="playground-title">
          <div className="section-label mono"><span>03 — THE OTHER SIDE OF THE SCREEN</span><span>BEYOND THE INTERFACE</span></div>
          <div className="playground-heading">
            <h2 id="playground-title">Not everything I create<br />starts <em>with a screen.</em></h2>
            <p>These things find their way into how I see and make. Not as a formula, but as a way of paying attention.</p>
          </div>
          <div className="interest-list">
            {interests.map(([number, name, description]) => (
              <article className={`interest interest-${number}`} key={name}>
                <span className="mono interest-number">{number}</span>
                <h3>{name}</h3>
                <p>{description}</p>
                <span className="interest-swatch" aria-hidden="true" />
              </article>
            ))}
          </div>
          <p className="playground-outro">A collection of things that inspire me <span aria-hidden="true">↗</span></p>
        </section>

        <section id="journey" className="journey-section section-pad" aria-labelledby="journey-title">
          <div className="section-label mono"><span>04 — THE JOURNEY SO FAR</span><span>DESIGN → ENGINEERING</span></div>
          <div className="journey-heading">
            <h2 id="journey-title">I wanted to design the experience.<br />Then I wanted to understand <br /><em>what made it work.</em></h2>
          </div>
          <div className="journey-steps">
            <article className="journey-step">
              <span className="mono journey-index">01 — WHERE IT BEGAN</span>
              <div className="journey-name"><i aria-hidden="true" /><h3>UX Design</h3></div>
              <p>I started by thinking about people, interfaces, and the relationship between what a product looks like and how someone experiences it.</p>
              <p>Working with an ed-tech startup gave me the chance to contribute to multiple products from zero to one for a younger generation of users.</p>
            </article>
            <article className="journey-step">
              <span className="mono journey-index">02 — THE QUESTION</span>
              <div className="journey-name"><i aria-hidden="true" /><h3>Beyond the interface</h3></div>
              <p>What happens after a button is clicked? How does information move through an application? What turns a considered design into a functioning product?</p>
              <p>I wanted to understand the decisions behind the interface, not just the interface itself.</p>
            </article>
            <article className="journey-step">
              <span className="mono journey-index">03 — WHERE I AM NOW</span>
              <div className="journey-name"><i aria-hidden="true" /><h3>Engineering in progress</h3></div>
              <p>I&apos;m studying Computer Science and Engineering at BRAC University while pursuing full-stack development.</p>
              <p>I&apos;m learning to connect the experience, the logic, the data, and the implementation. Still figuring things out — that&apos;s part of the point.</p>
            </article>
          </div>
          <p className="journey-closer">I&apos;m not leaving design behind.<br /><em>I&apos;m learning how to build what I imagine.</em></p>

          <div className="learning-grid">
            <div className="learning-intro">
              <span className="mono">A GROWING TOOLKIT</span>
              <h3>Different tools.<br /><em>One growing practice.</em></h3>
              <p>The goal isn&apos;t to know every tool. It&apos;s to understand what I&apos;m building and why.</p>
            </div>
            <div className="tool-rows">
              <div className="tool-row"><span className="mono">DESIGN &amp; THINKING</span><p>Figma · Visual design · UX thinking · Visual storytelling</p></div>
              <div className="tool-row"><span className="mono">DEVELOPMENT</span><p>Next.js · TypeScript · Java · Express · MongoDB · Vercel</p></div>
              <div className="tool-row"><span className="mono">EVERYDAY COMPANIONS</span><p>Visual Studio Code · Notion · Spotify · Discord</p></div>
            </div>
          </div>

          <div className="foundation-grid">
            <div><span className="mono">EDUCATION</span><h3>BRAC University</h3><p>Bachelor&apos;s studies in Computer Science and Engineering.</p></div>
            <div><span className="mono">EXPERIENCE</span><h3>UX Design · Ed-tech</h3><p>Contributed to developing multiple ed-tech products from zero to one, designed for a younger generation of users.</p></div>
          </div>
        </section>

        <section className="present-section" aria-labelledby="present-title">
          <div className="present-inner section-pad">
            <div className="section-label mono"><span>05 — NOTES FROM THE PRESENT</span><span>LESS NOISE. MORE INTENTION.</span></div>
            <div className="present-grid">
              <h2 id="present-title">When everyone is trying to stand out, I&apos;d rather let the work <em>speak quietly.</em></h2>
              <div className="present-copy">
                <p>We live in a time when making things is becoming easier, faster, and more accessible. AI is changing how we write, design, and build software.</p>
                <p>I find that exciting. It also makes knowing why you&apos;re making something more important. When the tools can do more, judgment matters. When production gets faster, understanding matters.</p>
                <p>I&apos;m learning how to work with these tools without losing the curiosity that brought me here: understand the fundamentals, question the output, and make choices that feel like my own.</p>
                <p className="present-signoff">I don&apos;t want to create more just for the sake of creating more.<br /><strong>I want to make things with care.</strong></p>
              </div>
            </div>
          </div>
        </section>

        <section className="process-section section-pad" aria-labelledby="process-title">
          <div className="section-label mono"><span>06 — HOW AN IDEA BECOMES SOMETHING</span><span>A PERSONAL RHYTHM, NOT A RIGID FORMULA</span></div>
          <div className="process-heading">
            <h2 id="process-title">Somewhere Between<br /><em>Pixels & Possibility.</em></h2>
            <p>My process isn&apos;t a checklist. It&apos;s a rhythm I return to whenever an idea starts taking shape.</p>
          </div>
          <ol className="process-list">
            {process.map(([number, title, description]) => (
              <li className="process-item" key={number}>
                <span className="mono process-index">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="process-arrow" aria-hidden="true">↗</span>
              </li>
            ))}
          </ol>
          <p className="process-outro">Not every idea makes it to the end.<br /><em>Every attempt teaches me something.</em></p>
        </section>

        <section id="contact" className="contact-section section-pad" aria-labelledby="contact-title">
          <div className="section-label mono"><span>07 — SOMETHING I&apos;M WORKING TOWARD</span><span>HAVE SOMETHING IN MIND?</span></div>
          <div className="contact-story">
            <h2>
              <span>One day, I&apos;d like</span>
              <span>to build</span>
              <em>more than products.</em>
            </h2>
            <div className="contact-story-copy"><p>I imagine a small studio where design and engineering aren&apos;t separate conversations — where visual judgment and technical understanding sit at the same table, and details are given room to matter.</p><p>It&apos;s an ambition, not a destination I&apos;ve reached. For now, I&apos;m learning, building, making mistakes, and working toward the kind of creative practice I&apos;d like to share.</p></div>
          </div>
          <div className="contact-invite">
            <div><span className="mono">LET&apos;S START WITH A CONVERSATION</span><h3 id="contact-title">Tell me what<br />you&apos;re imagining.</h3></div>
            <div className="contact-actions">
              <a className="contact-phone" href="tel:+8801628550122">Call @ +880 1628 550122</a>
              <a className="contact-button" href="mailto:mushfique.ndc23@gmail.com">Get in touch <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="social-row">
            <span className="mono">FIND ME ELSEWHERE</span>
            <a href="mailto:mushfique.ndc23@gmail.com">Email <span aria-hidden="true">↗</span></a>
            <a href="https://github.com/myshphew" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            <a href="https://www.linkedin.com/in/md-mushfique-hussain/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a href="https://www.instagram.com/its_m.husayn/" target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </div>

      <footer className="site-footer section-pad">
        <p className="footer-copyright mono">© {new Date().getFullYear()} Mushfique Hussain. All rights reserved.</p>
      </footer>
    </main>
  );
}
