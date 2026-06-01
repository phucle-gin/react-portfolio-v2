import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Henry Le | Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer based in Melbourne. Currently at Brightgreen — building Laravel and React applications with AWS, Docker, and CI/CD pipelines. Open to connecting." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
