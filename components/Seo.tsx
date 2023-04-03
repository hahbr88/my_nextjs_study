import Head from "next/head";
import React from "react";

interface IProps {
  title: string;
}

const Seo: React.FC<IProps> = ({ title }) => {
  return (
    <Head>
      <meta name="view-transition" content="same-origin" />
      <title>{`IAO | ${title}`}</title>
    </Head>
  );
};

export default Seo;
