import Head from "next/head";
import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children , title}) => {

  return (
    <>
      <Head>
        <title>{title ? `${title}-FoodEase` : "FoodEase"}</title>
        <meta name="description" content="Food Order App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>

      <div>
        <Navbar/>
        <div {...{title}}>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
