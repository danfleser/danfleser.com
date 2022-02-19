import useSound from "use-sound";
import { filterPostsByTag } from "../../utils/filters";

export default function Filter({ tags }) {
  const [blur] = useSound("/sounds/blur.mp3");

  return (
    <article className="app-post card">
      <header>
        <h3 className="text-lg font-bold mb-2">
          <span className="mr-1">🏷️</span>Tags
        </h3>
      </header>

      <section>
        {tags.map((tag) => (
          <span
            key={tag}
            className="tag"
            data-tag={tag}
            onClick={() => filterPostsByTag(tag, blur)}
          >
            {tag}
          </span>
        ))}
      </section>
    </article>
  );
}
