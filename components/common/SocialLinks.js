export default function SocialLinks() {
  return (
    <section className="app-social-links">
      <ul>
        <li>
          <a href="https://hashnode.com/@danfleser">
            <img
              src={require("../../public/images/hashnode.svg")}
              alt="Hashnode logo"
              height={24}
              width={24}
            />
          </a>
        </li>
        <li>
          <a href="https://danfleser.medium.com/">
            <img
              src={require("../../public/images/medium.svg")}
              alt="Medium logo"
              height={24}
              width={24}
            />
          </a>
        </li>
        <li>
          <a href="https://dev.to/danfleser">
            <img
              src={require("../../public/images/devto.svg")}
              alt="Dev.to logo"
              height={24}
              width={24}
            />
          </a>
        </li>
        <li>
          <a href="https://hackernoon.com/u/danfleser">
            <img
              src={require("../../public/images/hackernoon.jpeg")}
              alt="Hackernoon logo"
              height={24}
              width={24}
            />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/danfleser">
            <img
              src={require("../../public/images/twitter.svg")}
              alt="Twitter logo"
              height={24}
              width={24}
            />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/fleser.dan">
            <img
              src={require("../../public/images/facebook.svg")}
              alt="Facebook logo"
              height={24}
              width={24}
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/danfleser/">
            <img
              src={require("../../public/images/linkedin-icon.svg")}
              alt="Linkedin logo"
              height={24}
              width={24}
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/danfleser/">
            <img
              src={require("../../public/images/instagram-icon.svg")}
              alt="Instagram logo"
              height={24}
              width={24}
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/danfleser">
            <img
              src={require("../../public/images/github-icon.svg")}
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
