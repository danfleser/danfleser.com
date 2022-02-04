import SiteConfig from "../config/seo.json";

export function getSiteMetaData() {
  return SiteConfig.siteMetadata;
}

// Get day in format: Month day, Year. e.g. April 19, 2020
export function getFormattedDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(date).toLocaleDateString("en-US", options);

  return formattedDate;
}

export const NO_RESULTS_ID = "no-results";