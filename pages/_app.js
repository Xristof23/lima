import GlobalStyle from "../styles";
import { useState } from "react";
export default function App({ Component, pageProps }) {
  const [language, setLanguage] = useState("en");
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
