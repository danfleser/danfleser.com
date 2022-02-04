import Image from "next/image";

export default function ResponsiveImage(props) {
  return (
    <section
      className={"responsive-image" + (props.showshadow ? " add-shadow" : "")}
    >
      <Image
        className="w-full"
        alt={props.alt}
        placeholder="blur"
        layout="responsive"
        width="128"
        height="72"
        {...props}
      />
    </section>
  );
}
