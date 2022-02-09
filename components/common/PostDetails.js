import { getFormattedDate } from "../../utils/helpers";

export default function PostDetails({ date, readingTime }) {
  return (
    <section className="post-details">
      <p className="author">
        <img
          className="rounded-full"
          src={require("../../public/images/me.jpg")}
          alt="Profile iamge"
          width={20}
          height={20}
        />
        Dan Fleser
      </p>
      <p className="date">
        Updated: {getFormattedDate(date)}
        <span className="px-2">•</span>
        {readingTime} min read
      </p>
    </section>
  );
}
