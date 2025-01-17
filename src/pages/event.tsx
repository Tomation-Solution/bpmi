import Head from "next/head";
import { Hero, Layout } from "@/components";
import { Interestedfn } from "@/components/landing-page";
import Service from "@/components/services";
import { useRouter } from "next/router";
import { eventdata } from "@/components/landing-page/GetMore";

export default function Events() {

  return (
    <>
      <Head>
        <title>BPMI | Events</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={""}>
        <Layout>
          <Hero img={"womenwriting"} title={"Event"} />
          {/* <Service /> */}
            <div className="xl:grid-cols-4 md:grid-cols-2 grid gap-4 my-8 container mx-auto">
            {eventdata.map((t,index)=>(
                <div
                key={index}
                className="w-full pl-1  bg-gradient-to-b from-[#95C11F] to-[#88CDD3] mb-6"
              >
                <div className="w-full bg-white">
                  <h4 className="text-[#16A2B7] font-bold text-[16px] mb-6">
                  {t.title}
                  </h4>
                  <p className="text-[#4A4A4A] font-bold text-[16px]">
                {t.date_day} {t.date_month} {t.year}
                  </p>
                  
                </div>
              </div>
            ))}
            </div>
          <Interestedfn />
        </Layout>
      </main>
    </>
  );
}
