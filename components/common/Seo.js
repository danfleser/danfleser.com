import Head from "next/head";
import { getSiteMetaData } from "../../utils/helpers";

export default function Seo({ title, description = "" }) {
  const siteMetadata = getSiteMetaData();

  const metaDescription = description || siteMetadata.description;

  return (
    <Head>
      <title>
        {title} | {siteMetadata.title}
      </title>
      <meta
        name="google-site-verification"
        content="CYUr6YB1g5gsOX7NuyHIqFhYqiX3A0QJC-9-dvOuVxc"
      />
      <meta name="description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={metaDescription}
      />
      <link rel="icon" type="image/png" href="/static/favicon.ico" />
      <link rel="apple-touch-icon" href="/static/favicon.ico" />

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <script
        id="mcjs"
        dangerouslySetInnerHTML={{
          __html: `
        !function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/813e252a035658eacc1a786e9/a60c25b80ea6e38a2eecacd86.js");
        `,
        }}
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
