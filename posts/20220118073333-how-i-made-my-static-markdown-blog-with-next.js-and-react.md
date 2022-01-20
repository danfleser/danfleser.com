---
title: "How I made my static blog with Next.js and React using Markdown files"
date: "January 18, 2022"
excerpt: "In this tutorial we’ll be building a blog using React and Next.js. Each post of this blog is written in markdown file."
---

# How I made my static blog with Next.js and React using Markdown files

<img src="../public/images/logos/github-icon.svg" width="15"> [Source Code [GitHub]]()

In this tutorial we’ll be building a blog using React and Next.js.

Each post of this blog is written in markdown file.

<img src="../public/images/posts/20220118073333-markdown-markdown-everywhere.jpg">

Starting this blog from scratch was a great learning experience and didn't take too long to build(2 days).

Let’s get started by creating a new Next.js application:

    npx create-next-app next-md-blog

We’ll also need a couple of dependencies so let’s go ahead and install those as well:

    npm install gray-matter marked

- `gray-matter` – Parses front-matter from markdown files.
- `marked` – Compiles markdown into HTML.

Next let’s create a layout component that’ll load a global header and footer as is common practice when building a blog or websites in general. Create a new `components` folder with a `Layout.js`, `Header.js` and `Footer.js` files.

`components/Layout.js`
xxx

`components/Header.js`
xxx

`components/Footer.js`
xxx

Next let’s create a sample markdown file for a blog post. This along with all subsequent blog post markdown files will need to be saved inside a new `posts` folder.

`posts/hello-world.md`
xxx

The images folder for the thumbnails should be located within the `public` folder in the root of the application.

Create a couple more files like this and then we’re ready to create a `Post.js` component that’ll display a preview for each of blog posts on the homepage.

`components/Post.js`
xxx

Now we parse the static markdown file(title, excerpt, create data, thumbnail), loop over them and display post previews.

Now to start pulling everything together by updating the `pages/index.js` file as follows:

Now all that’s left it to create the file to display the individual blog posts.

`pages/blog/[slug].js`
xxx

You should now have a functioning blog using Next.js which you can easily add new posts using markdown files.
