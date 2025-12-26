import headshot from "./assets/headshot.jpg";
import "./App.css";
import getBigManImage from "./assets/projects/GetBig.png";

const projects = [
  {
    title: "Fluid Timeblocking Calendar",
    blurb:
      "AI-assisted scheduling prototype that respects fixed blocks and resolves task overlap.",
    tech: ["FastAPI", "React", "Scheduling"],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Demo", href: "#" },
    ],
  },
  {
    title: "CS Project Portfolio Site",
    blurb:
      "This site—built with React and a custom layout—designed to be clean, non-template-looking, and recruiter-focused.",
    tech: ["React", "Vite", "CSS Grid"],
    links: [{ label: "GitHub", href: "#" }],
  },
  {
    title: "Get BIg, Man!",
    blurb: "",
    tech: ["C++", "Game Development", "Unity"],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Demo", href: "#" },
    ],
    photo: getBigManImage,
  },
];

function ProjectCard({ title, blurb, tech, links, photo }) {
  return (
    <article className="projectCard">
      <h3 className="projectCard__title">{title}</h3>

      <div className="projectCard__imageWrap">
        {photo && (
          <img
            src={photo}
            alt={`${title} preview`}
            className="projectCard__image"
          />
        )}
      </div>

      <p className="projectCard__desc">{blurb}</p>

      {tech && tech.length > 0 && (
        <div className="projectCard__meta">
          {tech.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      )}

      {links && links.length > 0 && (
        <div className="projectCard__links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export default function App() {
  return (
    <main className="page">
      <div className="container">
        <section className="hero">
          <div className="hero__text">
            <h1 className="hero__name">Luke Coffman</h1>
            <p className="hero__subtitle">
              Computer Science &amp; Cybersecurity Engineering
              @ KU
            </p>

            <div className="hero__links">
              {/* EMAIL: icon only, envelope opens on hover */}
              <a
                href="mailto:lrcoffman@ku.edu"
                className="emailLink"
                target="_blank"
                rel="noreferrer"
              >
                <span className="emailLink__icon">
                  {/* Closed Envelope */}
                  <svg
                    className="icon-closed"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4
                         c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>

                  {/* Open Envelope on Hover */}
                  <svg
                    className="icon-open"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M22 6v12c0 1.1-.9 2-2 2H4
                         c-1.1 0-2-.9-2-2V6"
                    />
                    <polyline points="2,6 12,13 22,6" />
                    <path d="M2 6l10-5 10 5" />
                  </svg>
                </span>
              </a>

              {/* ICON GROUP: LinkedIn + GitHub side-by-side */}
              <div className="socialIconGroup">
                {/* LinkedIn */}
                <a
  href="https://linkedin.com/in/luke-coffman06"
  className="heroLink linkedinLink"
  target="_blank"
  rel="noreferrer"
>

                  <span className="heroLink__icon">
                    <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 382 382"
  width="20"
  height="20"
  fill="white"
>
  <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
  C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
  H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
  c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
  s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
  c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
  c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
  c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
  L341.91,330.654L341.91,330.654z"/>
</svg>

                  </span>
                  <span className="heroLink__text">LinkedIn</span>
                </a>

                {/* GitHub */}
                <a
  href="https://github.com/sonicboom989"
  className="heroLink githubLink"
  target="_blank"
  rel="noreferrer"
>

                  <span className="heroLink__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87
                           a3.37 3.37 0 0 0-.94-2.61
                           c3.14-.35 6.44-1.54 6.44-7
                           A5.44 5.44 0 0 0 20 4.77
                           5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48
                           a14.38 14.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1
                           A5.07 5.07 0 0 0 5 4.77
                           5.44 5.44 0 0 0 3.5 8.5
                           c0 5.42 3.3 6.61 6.44 7
                           A3.37 3.37 0 0 0 9 18.13V22"
                      ></path>
                    </svg>
                  </span>
                  <span className="heroLink__text">GitHub</span>
                </a>
              </div>
            </div>
          </div>

          <div className="hero__photoWrap">
            <img
              className="hero__photo"
              src={headshot}
              alt="Headshot of Luke Coffman"
            />
          </div>
        </section>

        <section className="section" aria-label="Projects">
          <h2 className="section__title">Projects</h2>

          <div className="projects">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                blurb={project.blurb}
                tech={project.tech}
                links={project.links}
                photo={project.photo}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
