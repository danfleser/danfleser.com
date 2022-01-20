export default function Contact() {
  return (
    <article className="contact-card">
      <header>
        <h1>📬 Contact</h1>
      </header>

      <section className="card">
        <form>
          <div className="form-item">
            <label>Email address</label>
            <input type="email" placeholder="ex: danfleser.dev@gmail.com" />
          </div>

          <div className="form-item">
            <label>Message</label>
            <textarea type="text" placeholder="👋 Hi" rows="4"></textarea>
          </div>

          <button type="submit">Send</button>
        </form>
      </section>
    </article>
  );
}
