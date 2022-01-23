import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

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

export default function MyApp({ Component, pageProps }) {
  setTimeout(setTheme);

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
