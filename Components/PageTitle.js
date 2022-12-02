import Head from "next/head";
import React from "react";

function PageTitle({ title }) {
  return (
    <Head>
      <title>{`${title} | Golden-Tix`}</title>
      <meta name="description" content={`${title} of GoldenTix, cinema app`} />
    </Head>
  );
}

export default PageTitle;
