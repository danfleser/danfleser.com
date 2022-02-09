import { NO_RESULTS_ID } from "../utils/helpers";

export let selectedTags = [];

export function resetTags() {
  selectedTags = [];

  // revert back filter tags
  document.querySelectorAll("[data-tag]").forEach((filterTag) => {
    filterTag.classList.remove("selected-tag");
  });

  // revert back posts
  document.querySelectorAll("[data-tags]").forEach((p) => {
    p.style.display = "block";
  });
}

export function resetPosts() {
  // revert back posts
  document.querySelectorAll("[data-name]").forEach((p) => {
    p.style.display = "block";
  });

  // hide no results card
  document.getElementById(NO_RESULTS_ID).style.display = "none";
}

export function filterPosts(term) {
  resetTags();
  resetPosts();

  if (term) {
    // hide unmatched posts
    const docs = document.querySelectorAll("[data-name]");
    let count = docs.length;
    docs.forEach((p) => {
      if (!p.dataset.name.toLowerCase().includes(term)) {
        p.style.display = "none";
        count--;
      }
    });

    // show no results card
    if (!count) {
      document.getElementById(NO_RESULTS_ID).style.display = "block";
    }
  }
}

export function filterPostsByTag(tag, blur) {
  resetSearchInput();
  blur();

  if (!selectedTags.find((st) => st === tag)) {
    selectedTags.push(tag);

    // update filter tags
    document.querySelectorAll("[data-tag]").forEach((filterTag) => {
      if (filterTag.dataset.tag.includes(tag)) {
        filterTag.classList.add("selected-tag");
        console.log("asda");
      }
    });
  } else {
    selectedTags = selectedTags.filter((st) => st !== tag);

    // revert back filter tags
    document.querySelectorAll("[data-tag]").forEach((filterTag) => {
      if (filterTag.dataset.tag.includes(tag)) {
        filterTag.classList.remove("selected-tag");
      }
    });
  }

  if (selectedTags.length) {
    // hide unmatched posts
    document.querySelectorAll("[data-tags]").forEach((p) => {
      if (!selectedTags.find((st) => p.dataset.tags.includes(st))) {
        p.style.display = "none";
      } else {
        p.style.display = "block";
      }
    });
  } else {
    resetTags();
  }
}

export function getSearchInput() {
  return document.querySelector('input[type="search"]');
}

export function resetSearchInput() {
  const search = getSearchInput();

  search.value = "";
  resetPosts();
}
