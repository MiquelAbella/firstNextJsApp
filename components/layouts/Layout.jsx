import Head from "next/head";
import React from "react";
import { NavBar } from "../ui";

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Miquel Abella" />
        <meta name="description" content={`Info about ${title} Pokémon`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Information of ${title}`} />
        <meta
          property="og:description"
          content={`This is an unofficial page of ${title}`}
        />
        <meta property="og:image" content={`${origin}/imgs/banner.png`} />
      </Head>
      <NavBar />
      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
