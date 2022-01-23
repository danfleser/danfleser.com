import Image from "next/image";

export default function PostPage({ src, alt }) {
  return <Image alt={alt} src={src} placeholder="blur" className="w-full" />;
}
