import Head from "next/head";
import Hero from "@/components/homePage/hero";
import Feature from "@/components/homePage/feature";
import WhatWeDo from "@/components/homePage/whatWeDo";
import Listings from "@/components/homePage/listings";
import Testimonials from "@/components/homePage/testimonials";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
export default function Home() {
  const [cookies, setCookie] = useCookies(["dreamHomeAccessToken"]);
  const token = cookies.dreamHomeAccessToken;
  console.log(token);
  return (
    <>
      <Head>
        <title>Home - Dream Home</title>
      </Head>

      <main>
        <Hero />
        <Feature />
        <WhatWeDo />
        <Listings />
        <Testimonials />
      </main>
    </>
  );
}
