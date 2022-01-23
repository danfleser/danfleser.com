export default function Profile() {
  return (
    <article className="app-profile card">
      <section className="block">
        <section className="info">
          <section>
            <h1 className="name">Dan Fleser</h1>
          </section>

          <section>
            <p>
              Full-time web developer since 2014. I recently switched from an
              8-5 job to freelancing, which is going great.
            </p>
          </section>
        </section>

        <section className="image">
          <img
            src="/images/me.jpg"
            alt="Profile iamge"
            height={100}
            width={100}
          />
        </section>
      </section>

      {/* <section className="block">
        <section>
          <h2>Education</h2>
          <div>
            <p>Master of Software Engineering, Computer Science</p>
            <p className="detail">
              "Babeș-Bolyai" University of Cluj-Napoca, 2017 - 2019
            </p>
          </div>

          <div>
            <p>Bachelor’s Degree, Computer Science</p>
            <p className="detail">
              "Babeș-Bolyai" University of Cluj-Napoca, 2013 - 2017
            </p>
          </div>
        </section>
      </section> */}
    </article>
  );
}
