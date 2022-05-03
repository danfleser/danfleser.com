import Seo from "../components/common/Seo";
import Link from "next/link";
import Profile from "../components/profile/Profile";

export default function Home() {
  return (
    <section>
      <Seo title="All posts" />

      <Profile />

      <section className="site-map">
        <div className="card">
          <Link href="/articles/nice-to-read" passHref>
            <h2>📖 Nice to read</h2>
          </Link>
        </div>
        <div className="card">
          <Link href="/articles/posts" passHref>
            <h2>📰 Posts</h2>
          </Link>
        </div>
      </section>

      <section className="site-map">
        <div className="card">
          <Link href="/miscellaneous/newsletter" passHref>
            <h2>📰 Newsletter</h2>
          </Link>
        </div>
        <div className="card">
          <Link href="/miscellaneous/privacy-policy" passHref>
            <h2>🔏 Privacy</h2>
          </Link>
        </div>
      </section>

      <section className="site-map">
        <div className="card">
          <Link href="/miscellaneous/contact" passHref>
            <h2>📬 Contact</h2>
          </Link>
        </div>
        <div className="card invisible-block"></div>
      </section>
    </section>
  );
}
