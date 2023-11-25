import Head from "next/head";
import { Hero, Layout } from "@/components";
import { Interestedfn } from "@/components/landing-page";
import { MemProgram } from "@/components/membership";

export default function Home() {
  return (
    <>
      <Head>
        <title>BPMI | Membership</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={""}>
        <Layout>
          <Hero img={"criteriaHero"} title={"Membership"} />
          <MemProgram />
          <Interestedfn />
        </Layout>
      </main>
    </>
  );
}