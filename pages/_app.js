import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import "../styles/globals.scss";

const setTheme = () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

function MyApp({ Component, pageProps }) {
  setTimeout(setTheme);

  return (
    <>
      <Head>
        <title>Dev Blog</title>
      </Head>

      <div className="app">
        <Header />
        <main>
          <div className="app-container">
            <Component {...pageProps} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
