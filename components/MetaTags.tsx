import React from "react";
import Head from "next/head";

export default function MetaTags(): React.ReactElement {
  const meta = {
    title: "Gerardo Valencia – Software Engineer.",
    description: `software engineer passionate of create products
    that help people around the world using web technologies.`,
    // image: "",
    type: "website",
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👽</text></svg>"
      />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Gerardo Valencia" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      {/* <meta property="og:image" content={meta.image} /> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@soygerrybee" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      {/* <meta name="twitter:image" content={meta.image} /> */}
    </Head>
  );
}
