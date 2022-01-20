import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="app-container">
        <div className="content">
          <div className="block mt-6 links">
            <Link href="/" passHref>
              <h2>🏠 Home</h2>
            </Link>
            <Link href="/miscellaneous/newsletter" passHref>
              <h2>📰 Newsletter</h2>
            </Link>
            <Link href="/miscellaneous/privacy-policy" passHref>
              <h2>🔏 Privacy</h2>
            </Link>
            <Link href="/miscellaneous/contact" passHref>
              <h2>📬 Contact</h2>
            </Link>
          </div>

          <ul className="block">
            <li>
              <a href="https://hashnode.com/@danfleser">
                <img
                  src="/images/logos/hashnode.svg"
                  alt="Hashnode logo"
                  height={24}
                  width={24}
                />
              </a>
            </li>
            <li>
              <a href="https://danfleser.medium.com/">
                <img
                  src="/images/logos/medium.svg"
                  alt="Medium logo"
                  height={24}
                  width={24}
                />
              </a>
            </li>
            <li>
              <a href="https://dev.to/danfleser">
                <img
                  src="/images/logos/devto.svg"
                  alt="Dev.to logo"
                  height={24}
                  width={24}
                />
              </a>
            </li>
            <li>
              <a href="https://hackernoon.com/u/danfleser">
                <img
                  src="/images/logos/hackernoon.jpeg"
                  alt="Hackernoon logo"
                  height={24}
                  width={24}
                />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/danfleser">
                <img
                  src="/images/logos/twitter.svg"
                  alt="Twitter logo"
                  height={24}
                  width={24}
                />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/fleser.dan">
                <img
                  src="/images/logos/facebook.svg"
                  alt="Facebook logo"
                  height={24}
                  width={24}
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/danfleser/">
                <img
                  src="/images/logos/linkedin-icon.svg"
                  alt="Linkedin logo"
                  height={24}
                  width={24}
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/danfleser/">
                <img
                  src="/images/logos/instagram-icon.svg"
                  alt="Instagram logo"
                  height={24}
                  width={24}
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/danfleser">
                <img
                  className="dark:invert"
                  src="/images/logos/github-icon.svg"
                  alt="GitHub logo"
                  height={24}
                  width={24}
                />
              </a>
            </li>
          </ul>

          <p className="copyrights">
            © {year} Dan Fleser. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
