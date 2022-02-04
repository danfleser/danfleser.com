import { NO_RESULTS_ID } from "../../utils/helpers";

export default function PostNoResults() {
  return (
    <article id={NO_RESULTS_ID} className="app-post card hidden">
      <section className=" w-full md:max-w-full md:flex">
        <section className="p-4 pr-0 flex flex-col justify-between leading-normal">
          <header>
            <h3>🔍 No result found :(</h3>
          </header>
        </section>
      </section>
    </article>
  );
}
