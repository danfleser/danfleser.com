import Image from "next/Image";
import { prefix } from "../../utils/prefix.js";

export default function SocialLinks() {
  return (
    <section className="app-social-links">
      <ul>
        <li>
          <a href="https://hashnode.com/@danfleser">
            <Image
              src={require(prefix + "../../public/images/hashnode.svg")}
              alt="Hashnode logo"
              height={24}
              width={24}
            />
          </a>
        </li>
        <li>
          <a href="https://danfleser.medium.com/">
            <Image
              src={require(prefix + "../../public/images/medium.svg")}
              alt="Medium logo"
              height={24}
              width={24}
            />
          </a>
        </li>
        <li>
          <a href="https://dev.to/danfleser">
            <Image
              src={require(prefix + "../../public/images/devto.svg")}
              alt="Dev.to logo"
              height={24}
              width={24}
            />
          </a>
        </li>
        <li>
          <a href="https://hackernoon.com/u/danfleser">
            <Image
              src={require(prefix + "../../public/images/hackernoon.jpeg")}
              alt="Hackernoon logo"
              height={24}
              width={24}
            />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/danfleser">
            <Image
              src={require(prefix + "../../public/images/twitter.svg")}
              alt="Twitter logo"
              height={24}
              width={24}
            />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/fleser.dan">
            <Image
              src={require(prefix + "../../public/images/facebook.svg")}
              alt="Facebook logo"
              height={24}
              width={24}
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/danfleser/">
            <Image
              src={require(prefix + "../../public/images/linkedin-icon.svg")}
              alt="Linkedin logo"
              height={24}
              width={24}
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/danfleser/">
            <Image
              src={require(prefix + "../../public/images/instagram-icon.svg")}
              alt="Instagram logo"
              height={24}
              width={24}
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/danfleser">
            <Image
              src={require(prefix + "../../public/images/github-icon.svg")}
              className="dark:invert"
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
