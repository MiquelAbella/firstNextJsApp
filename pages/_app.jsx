import { NextUIProvider } from "@nextui-org/react";

import { DarkTheme } from "../themes";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={DarkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
