import { useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import "../assets/scss/main.scss";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [])

  return (
    <div className="app">
      <Header />

      <main>
        <div className="app-container">
          <Component {...pageProps} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
