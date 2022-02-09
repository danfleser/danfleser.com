export const COMMENTS_CONTAINER_ID = "post-comments";

export function appendCommentsScript(container, darkMode) {
  let scriptEl = document.createElement("script");
  scriptEl.setAttribute("src", "https://utteranc.es/client.js");
  scriptEl.setAttribute("crossorigin", "anonymous");
  scriptEl.setAttribute("async", true);
  scriptEl.setAttribute("repo", "danfleser/blog");
  scriptEl.setAttribute("issue-term", "title");
  scriptEl.setAttribute("theme", darkMode ? "github-dark" : "github-light");
  container.appendChild(scriptEl);
}

export function updateCommentsTheme(darkMode) {
  const commentsContainer = document.getElementById(COMMENTS_CONTAINER_ID);
  if (commentsContainer !== null) {
    commentsContainer.innerHTML = "";
    appendCommentsScript(commentsContainer, darkMode);
  }
}
