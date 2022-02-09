import SocialLinks from "../common/SocialLinks";

export default function Profile() {
  return (
    <article className="app-profile card">
      <section className="block info">
        <section className="name">
          <h1>
            Hi,<div className="wave">👋</div> I&apos;m
          </h1>
          <h1 className="highlight">Dan Fleser</h1>
        </section>

        <section className="image">
          <img
            src={require("../../public/images/me.jpg")}
            alt="Profile iamge"
            width={200}
            height={200}
          />
        </section>
      </section>

      <section className="block">
        <p>
          Full-time web developer since 2014. I recently switched from an 8-5
          job to freelancing, which is going great.
        </p>
        {/* <h1>👋 Hi there</h1>
        <p>
          I&aposm Dan. I work as a full-time software engineer, 8+ years of
          experience focused on working with the latest technologies in the
          field, helping companies around the world design and implement
          top-of-the-line scalable enterprise solutions.
        </p>
        <h1>💻 My key skills</h1>
        <p>
          Software Architecture • Distributed systems, Microservices •
          Domain-Driven-Design, DRY, YAGNI, Layered Architecture • SOLID
          Principles, Clean code • Unit testing Leadership: • Excellent
          problem-solving abilities • Communication, Pair Programming Back-end:
          • NodeJS, Python • Sql, NoSql, Database Architecture • Docker
          Front-end: • Modern Javascript, Typescript, Modular Components •
          Angular, Tailwind, Bootstrap, Unity
        </p>
        <h1>
          🤝 Is there any way my expertise can make an impact on your business?
        </h1>
        <p>
          Drop me a message and let's have a chat! 🌍 Only interested in remote
          work
        </p> */}
      </section>

      {/* <section className="block">
        <section>
          <h2>Education</h2>
          <div>
            <p>Master of Software Engineering, Computer Science</p>
            <p className="detail">
              Babes-Bolyai University of Cluj-Napoca, 2017 - 2019
            </p>
          </div>

          <div>
            <p>Bachelor’s Degree, Computer Science</p>
            <p className="detail">
              Babes-Bolyai University of Cluj-Napoca, 2013 - 2017
            </p>
          </div>
        </section>
      </section> */}

      <SocialLinks></SocialLinks>
    </article>
  );
}
