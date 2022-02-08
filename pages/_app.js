import { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import * as ga from '../utils/ga'
import "../styles/main.scss";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // handle dark mode
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // handle google analytics
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    // When the component is mounted, subscribe to router changes
    // and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
