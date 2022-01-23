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

          <p className="copyrights">
            © {year} Dan Fleser. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
