import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>retain</title>
        <meta
          name="description"
          content="A website to save and track job applications"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="flex h-screen">
        <Hero />
      </main>
    </>
  );
}
