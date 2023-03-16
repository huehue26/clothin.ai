import { Provider } from "react-redux";
import Router from "next/router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.scss";
import { HydrationProvider, Server, Client } from "react-hydration-provider";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import store from "../redux/store";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function App({ Component, pageProps }) {
  return (
    <>
      <HydrationProvider>
        <Client>
          <SEO title="Clothin.ai" />
          <Provider store={store}>
            <div className="relative min-h-screen">
              <Header />
              {Component && <Component {...pageProps} />}
              <Footer />
            </div>
          </Provider>
        </Client>
      </HydrationProvider>
    </>
  );
}

export default App;
