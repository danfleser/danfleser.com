import Head from "next/head";
import { getSiteMetaData } from "../../utils/helpers";

export default function Seo({
  title,
  description = "",
  type = "",
  thumbnail = "",
  path = "",
  keywords = "",
}) {
  const siteMetadata = getSiteMetaData();

  const metaUrl = siteMetadata.url + (path ? path : "");
  const metaTitle = title || siteMetadata.title;
  const metaDescription = description || siteMetadata.description;
  const metaType = type || "website";
  const metaThumbnail = siteMetadata.url + thumbnail || "";
  const metaKeywords = keywords || siteMetadata.keywords;

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="thumbnail" content={metaThumbnail} />
      <meta name="url" content={metaUrl} />
      <meta name="identifier-URL" content={metaUrl} />
      <meta
        name="author"
        content={`${siteMetadata.author.name}, ${siteMetadata.author.email}`}
      />
      <meta
        name="owner"
        content={`${siteMetadata.author.name}, ${siteMetadata.author.email}`}
      />
      <meta name="keywords" content={metaKeywords} />
      <meta name="reply-to" content={siteMetadata.author.email} />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="subject" content={metaTitle} />
      <meta name="summary" content={siteMetadata.author.summary} />
      <meta name="category" content={siteMetadata.category} />

      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={metaType} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:image" content={metaThumbnail} />
      <meta property="og:site_name" content={siteMetadata.url} />
      <meta
        property="fb:page_id"
        content={siteMetadata.author.facebookPageId}
      />
      <meta property="og:email" content={siteMetadata.author.email} />
      <meta property="og:country-name" content="USA" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:creator" content={siteMetadata.author.twitterId} />
      <meta name="twitter:image" content={metaThumbnail} />

      <meta
        name="google-site-verification"
        content="CYUr6YB1g5gsOX7NuyHIqFhYqiX3A0QJC-9-dvOuVxc"
      />

      <link rel="icon" type="image/png" href="/static/favicon.ico" />
      <link rel="apple-touch-icon" href="/static/favicon.ico" />

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </Head>
  );
}
