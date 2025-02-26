import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Henry Le | Full Stack Developer</title>
        <meta name="description" content="I've spent the last 2 years building and scaling software for innovative startups and a well-known digital agency and another leading marketing agency in Melbourne. My focus is on creating pixel-perfect, engaging, and accessible digital experiences. Let's connect!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
