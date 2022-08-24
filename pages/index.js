import Head from "next/head";
import Image from "next/image";
import Nav from "../components/nav";

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
      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <h1>Welcome to retain! Save a job!</h1>
      </main>
    </>
  );
}
