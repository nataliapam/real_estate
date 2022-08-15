import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Navbar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>Real Estate</Head>
      <Box maxWidth="1200px" m="auto">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
};

export default Layout;
