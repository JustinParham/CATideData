import React from "react";
import Head from "next/head";

export default function Header() {
  return (
    <header>
      <Head>
        <title>CA Tides</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="/css/styles.css" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="shortcut icon"
          href="../images/favicon.ico"
          type="image/x-icon"
        ></link>
      </Head>
      <h1 className="mainTitle">California Tides</h1>
      <hr />
    </header>
  );
}
