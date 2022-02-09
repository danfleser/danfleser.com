export default function SocialLinks() {
  return (
    <section className="app-social-links">
      <ul>
        <li>
          <a
            href="https://hashnode.com/@danfleser"
            rel="noreferrer"
            target="_blank"
            className="flex items-center justify-center"
          >
            <img
              src={require("../../public/images/hashnode.svg")}
              alt="Hashnode logo"
              height={30}
              width={30}
            />
          </a>
        </li>
        <li>
          <a
            href="https://danfleser.medium.com/"
            rel="noreferrer"
            target="_blank"
            className="flex items-center justify-center"
          >
            <img
              src={require("../../public/images/medium.svg")}
              alt="Medium logo"
              height={30}
              width={30}
            />
          </a>
        </li>
        <li>
          <a
            href="https://dev.to/danfleser"
            rel="noreferrer"
            target="_blank"
            className="flex items-center justify-center"
          >
            <img
              src={require("../../public/images/devto.svg")}
              alt="Dev.to logo"
              height={30}
              width={30}
            />
          </a>
        </li>
        <li>
          <a
            href="https://hackernoon.com/u/danfleser"
            rel="noreferrer"
            target="_blank"
            className="flex items-center justify-center"
          >
            <img
              src={require("../../public/images/hackernoon.png")}
              alt="Hackernoon logo"
              height={30}
              width={30}
            />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/danfleser"
            rel="noreferrer"
            target="_blank"
            className="flex items-center justify-center"
          >
            <img
              src={require("../../public/images/twitter.svg")}
              alt="Twitter logo"
              height={30}
              width={30}
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/fleser.dan"
            rel="noreferrer"
            target="_blank"
            className="flex items-center justify-center"
          >
            <img
              src={require("../../public/images/facebook.svg")}
              alt="Facebook logo"
              height={30}
              width={30}
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/danfleser/"
            rel="noreferrer"
            target="_blank"
            className="flex items-center justify-center"
          >
            <img
              src={require("../../public/images/linkedin-icon.svg")}
              alt="Linkedin logo"
              height={30}
              width={30}
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/danfleser/"
            rel="noreferrer"
            target="_blank"
            className="flex items-center justify-center"
          >
            <img
              src={require("../../public/images/instagram-icon.svg")}
              alt="Instagram logo"
              height={30}
              width={30}
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/danfleser"
            rel="noreferrer"
            target="_blank"
            className="flex items-center justify-center"
          >
            <img
              src={require("../../public/images/github-icon.svg")}
              className="dark:invert"
              alt="GitHub logo"
              height={30}
              width={30}
            />
          </a>
        </li>
      </ul>
    </section>
  );
}
