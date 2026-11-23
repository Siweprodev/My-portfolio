import { useState } from "react";
import React from "react";
import {
  ArrowDown, ArrowUpRight, Menu, X, Github, Linkedin, Mail,
  Phone, MapPin, Code2, Database, PanelsTopLeft, Braces,
  BriefcaseBusiness, GraduationCap, ExternalLink
} from "lucide-react";

import "./styles.css";

const skills = [
  { title: "Languages", icon: Code2, items: ["JavaScript", "TypeScript", "C#", "HTML5", "CSS3"] },
  { title: "Frameworks", icon: Braces, items: ["React", "Angular", "Node.js", ".NET / .NET Core", "Express.js", "Bootstrap", "Tailwind CSS"] },
  { title: "Backend & APIs", icon: Database, items: ["REST APIs", "REST API Integration", "JSON", "Backend Services", "SQL", "PostgreSQL"] },
  { title: "Tools & Practices", icon: PanelsTopLeft, items: ["Git", "GitHub", "Postman", "Figma", "Excel", "GitHub Copilot", "Agile", "Software Testing"] }
];

const experience = [
  {
    role: "Software Developer",
    company: "Sinan Energy",
    dates: "January 2025 — August 2026",
    points: [
      "Developed, maintained and enhanced responsive software applications using JavaScript, HTML5 and CSS3.",
      "Integrated application components with RESTful APIs and backend services.",
      "Investigated and resolved application defects through testing, debugging and troubleshooting.",
      "Worked with stakeholders to translate business requirements into functional technical solutions.",
      "Supported application performance, technical documentation and production maintenance."
    ]
  },
  {
    role: "Software Developer",
    company: "The Digital Academy",
    dates: "May 2022 — November 2023",
    points: [
      "Developed and maintained web applications across the Software Development Life Cycle.",
      "Contributed to frontend and backend development and REST API integration.",
      "Participated in software design, testing, debugging and performance optimisation.",
      "Led and supported a team of full-stack developers, providing technical guidance.",
      "Coordinated Agile development activities and collaborated with clients and stakeholders."
    ]
  },
  {
    role: "Full-Stack Developer Intern",
    company: "The Digital Academy",
    dates: "December 2021 — May 2022",
    points: [
      "Developed and deployed web applications using Angular, JavaScript, HTML, CSS and Node.js technologies.",
      "Built reusable UI components and layouts based on Figma designs.",
      "Integrated frontend applications with REST APIs and backend services.",
      "Created and executed test cases and helped resolve application defects."
    ]
  }
];

const education = [
  { qualification: "National Diploma in Information Technology — Software Development", institution: "Tshwane University of Technology", detail: "Pretoria, Gauteng" },
  { qualification: "NQF5 Information Technology — System Support", institution: "Speccon Holdings (Pty) Ltd", detail: "2022" },
  { qualification: "National Senior Certificate", institution: "Graceland Education Centre", detail: "2014" }
];

const navItems = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}>SS<span>.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-cta" href="mailto:Sanesogiba@gmail.com">Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="status-dot" /> SOFTWARE DEVELOPER · SOUTH AFRICA</div>
            <h1>Building useful<br />things for the <em>web.</em></h1>
            <p className="hero-intro">
              I'm <strong>Sanelisiwe Sogiba</strong>, a Software Developer with 4+ years of experience
              building, improving and supporting web applications and digital solutions.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-secondary" href="mailto:Sanesogiba@gmail.com">Get in touch <Mail size={16} /></a>
            </div>
            <a className="scroll-cue" href="#about"><ArrowDown size={15} /> SCROLL TO EXPLORE</a>
          </div>
          <div className="hero-visual" aria-label="Developer introduction graphic">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="code-card">
              <div className="code-top"><span></span><span></span><span></span><small>developer.js</small></div>
              <div className="code-lines">
                <p><i>01</i><span className="code-purple">const</span> developer = {'{'}</p>
                <p><i>02</i>&nbsp;&nbsp; name: <span className="code-gold">'Sanelisiwe'</span>,</p>
                <p><i>03</i>&nbsp;&nbsp; role: <span className="code-gold">'Software Developer'</span>,</p>
                <p><i>04</i>&nbsp;&nbsp; experience: <span className="code-green">'4+ years'</span>,</p>
                <p><i>05</i>&nbsp;&nbsp; focus: [</p>
                <p><i>06</i>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-gold">'Web applications'</span>,</p>
                <p><i>07</i>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-gold">'Problem solving'</span></p>
                <p><i>08</i>&nbsp;&nbsp; ]</p>
                <p><i>09</i>{'}'};</p>
                <p><i>10</i><span className="code-purple">export default</span> developer;</p>
              </div>
              <div className="code-footer"><span><span className="status-dot" /> Available for opportunities</span><span>JS / TS</span></div>
            </div>
            <div className="floating-chip chip-react"><span>⚛</span> React</div>
            <div className="floating-chip chip-api"><Code2 size={15} /> REST APIs</div>
          </div>
        </section>

        <div className="ticker" aria-label="Areas of focus">
          <div>FRONTEND DEVELOPMENT <span>✳</span> FULL-STACK DEVELOPMENT <span>✳</span> API INTEGRATION <span>✳</span> PROBLEM SOLVING <span>✳</span> FRONTEND DEVELOPMENT <span>✳</span></div>
        </div>

        <section className="section-wrap section-block" id="about">
          <SectionHeading eyebrow="01 / A LITTLE ABOUT ME" title="Curious by nature. Developer by craft." />
          <div className="about-grid">
            <div className="about-lead">
              <p className="large-copy">I turn ideas and requirements into practical, user-focused software.</p>
              <p>My experience spans frontend and backend development, application maintenance, testing and technical problem-solving. I enjoy working through challenges, learning new technologies and collaborating with teams to deliver reliable solutions.</p>
            </div>
            <div className="about-facts">
              <div><strong>4<span>+</span></strong><small>Years of experience</small></div>
              <div><strong>3</strong><small>Professional roles</small></div>
              <div><strong>Full-stack</strong><small>Development experience</small></div>
              <div><strong>Agile</strong><small>Team collaboration</small></div>
            </div>
          </div>
        </section>

        <section className="section-block section-muted" id="skills">
          <div className="section-wrap">
            <SectionHeading eyebrow="02 / MY TOOLKIT" title="Technologies I work with." description="A practical toolkit across frontend, backend, databases and the software development lifecycle." />
            <div className="skills-grid">
              {skills.map(({ title, icon: Icon, items }) => (
                <article className="skill-card" key={title}>
                  <div className="skill-icon"><Icon size={20} /></div>
                  <h3>{title}</h3>
                  <div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="experience">
          <SectionHeading eyebrow="03 / WHERE I'VE WORKED" title="Experience & growth." description="My professional journey in software development, from internship to developer roles." />
          <div className="timeline">
            {experience.map((job, index) => (
              <article className="timeline-item" key={`${job.company}-${job.dates}`}>
                <div className="timeline-marker">{String(index + 1).padStart(2, "0")}</div>
                <div className="timeline-content">
                  <div className="job-heading"><div><h3>{job.role}</h3><h4>{job.company}</h4></div><span className="job-date">{job.dates}</span></div>
                  <ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block section-muted" id="projects">
          <div className="section-wrap">
            <SectionHeading eyebrow="04 / SELECTED WORK" title="A project in the making." description="A look at a practical web project included in my current portfolio." />
            <article className="project-card">
              <div className="project-art">
                <div className="browser-window">
                  <div className="browser-bar"><span></span><span></span><span></span><small>thetalldetailer.co.za</small></div>
                  <div className="mock-site">
                    <span className="mock-label">MOBILE DETAILING</span>
                    <strong>THE TALL<br/>DETAILER<span>.</span></strong>
                    <div className="mock-line"></div>
                    <small>Professional care. Wherever you are.</small>
                  </div>
                </div>
                <div className="project-number">PROJECT / 001</div>
              </div>
              <div className="project-info">
                <span className="eyebrow">REACT · FRONTEND</span>
                <h3>The Tall Detailer</h3>
                <p>A responsive mobile detailing business website, built with React. The project includes service-focused pages, hero sections and image galleries, with reusable components and responsive layouts.</p>
                <div className="project-tags"><span>React</span><span>JavaScript</span><span>HTML5</span><span>CSS3</span></div>
                <div className="project-links">
                  <span className="project-note">Add your live demo and GitHub repository links here.</span>
                  <a href="mailto:Sanesogiba@gmail.com?subject=The%20Tall%20Detailer%20project">Ask about project <ArrowUpRight size={16}/></a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section-wrap section-block" id="education">
          <SectionHeading eyebrow="05 / EDUCATION" title="Learning is part of the process." />
          <div className="education-list">
            {education.map((item, index) => (
              <article className="education-item" key={item.qualification}>
                <div className="education-icon"><GraduationCap size={21}/></div>
                <div><h3>{item.qualification}</h3><p>{item.institution}</p><small>{item.detail}</small></div>
                <span className="education-index">0{index + 1}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div>
              <span className="eyebrow">06 / LET'S CONNECT</span>
              <h2>Have a project<br/>or opportunity in mind?</h2>
              <p>I'm open to connecting about software development opportunities and interesting projects.</p>
              <a className="button button-primary" href="mailto:Sanesogiba@gmail.com">Send me an email <ArrowUpRight size={17}/></a>
            </div>
            <div className="contact-details">
              <a href="mailto:Sanesogiba@gmail.com"><Mail size={18}/> Sanesogiba@gmail.com</a>
              <a href="tel:+27682717045"><Phone size={18}/> +27 68 271 7045</a>
              <span><MapPin size={18}/> Randburg, Gauteng, South Africa</span>
              <span className="social-placeholder"><Linkedin size={18}/> Add your LinkedIn profile URL</span>
              <span className="social-placeholder"><Github size={18}/> Add your GitHub profile URL</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">SS<span>.</span></a>
        <p>Designed & built by Sanelisiwe Sogiba</p>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
        <small>© {new Date().getFullYear()} Sanelisiwe Sogiba</small>
      </footer>
    </>
  );
}

export default App;
