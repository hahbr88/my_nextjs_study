import NavBar from "@/components/NavBar";
import { AppProps } from "next/dist/shared/lib/router/router";
import { Container } from "react-bootstrap";
import SSRProvider from "react-bootstrap/SSRProvider";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <SSRProvider>
    //   <Container>
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
    //   </Container>
    // </SSRProvider>
  );
}
