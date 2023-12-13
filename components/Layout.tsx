import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Coming soon" }: Props) => (
  <div className="relative min-h-screen flex flex-col justify-center items-center bg-hero bg-cover h-screen w-screen">
    <Head>
      <title>{title} | Dot9</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Dot9 - is software development agency based on Bangladesh. Delivering tailored solution to customers from european countries including UK, USA, Germany, UAE, etc in a budget friendly pack while maintaining maximum outcome. We are also working on some cutting edge health tech platform backed by humanitarian organizations."
      />
      <meta property="og:title" content={`${title} | Dot9`} />
      <meta
        property="og:description"
        content="Dot9 - is software development agency based on Bangladesh. Delivering tailored solution to customers from european countries including UK, USA, Germany, UAE, etc in a budget friendly pack while maintaining maximum outcome. We are also working on some cutting edge health tech platform backed by humanitarian organizations."
      />
      <meta property="og:url" content="https://dot9.dev/" />
      <meta property="og:type" content="website" />
    </Head>
    {children}
  </div>
);

export default Layout;
