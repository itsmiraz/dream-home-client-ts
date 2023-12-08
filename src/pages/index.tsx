import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/homePage/hero";
import Feature from "@/components/homePage/feature";
import WhatWeDo from "@/components/homePage/whatWeDo";
import Listings from "@/components/homePage/listings";
import Testimonials from "@/components/homePage/testimonials";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
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
