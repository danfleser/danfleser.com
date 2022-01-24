import Image from "next/Image";

export default function SocialLinks() {
  return (
    <section className="app-social-links">
      <ul>
        <li>
          <a href="https://hashnode.com/@danfleser">
            <Image
              src="/images/hashnode.svg"
              alt="Hashnode logo"
              height={24}
              width={24}
            />
          </a>
        </li>
        <li>
          <a href="https://danfleser.medium.com/">
            <Image
              src="/images/medium.svg"
              alt="Medium logo"
              height={24}
              width={24}
            />
          </a>
        </li>
        <li>
          <a href="https://dev.to/danfleser">
            <Image
              src="/images/devto.svg"
              alt="Dev.to logo"
              height={24}
              width={24}
            />
          </a>
        </li>
        <li>
          <a href="https://hackernoon.com/u/danfleser">
            <Image
              src="/images/hackernoon.jpeg"
              alt="Hackernoon logo"
              height={24}
              width={24}
            />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/danfleser">
            <Image
              src="/images/twitter.svg"
              alt="Twitter logo"
              height={24}
              width={24}
            />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/fleser.dan">
            <Image
              src="/images/facebook.svg"
              alt="Facebook logo"
              height={24}
              width={24}
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/danfleser/">
            <Image
              src="/images/linkedin-icon.svg"
              alt="Linkedin logo"
              height={24}
              width={24}
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/danfleser/">
            <Image
              src="/images/instagram-icon.svg"
              alt="Instagram logo"
              height={24}
              width={24}
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/danfleser">
            <Image
              className="dark:invert"
              src="/images/github-icon.svg"
              alt="GitHub logo"
              height={24}
              width={24}
            />
          </a>
        </li>
      </ul>
    </section>
  );
}
