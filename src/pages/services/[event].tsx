import Head from "next/head";
import { Hero, Layout, Links, PLink ,styles} from "@/components";
import { Interestedfn } from "@/components/landing-page";
import Event from "@/components/services/Training";
import { useRouter } from "next/router";
import { trainingDatacourses } from "@/constants/courses-data";


export default function Events() {
  const router = useRouter();
  const {event} = router.query

  // @ts-ignore
  let data:any = event?trainingDatacourses[event]:null
//  console.log({data})
  return (
    <>
      <Head>
        <title>BPMI | Event</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={""}>
        <Layout>
          <Hero img={"womenwriting"} title={"Event"} />
          {/* <Event /> */}





          <section className="">
      <div className="flex justify-center items-center mb-4 md:mb-12">
        <PLink
          styles="text-gray mr-3 text-[17px] cursor-pointer"
          href="/"
          text="Home"
        />
        /
        <PLink
          styles="text-paleBlue mx-3 text-[17px] cursor-pointer"
          href="services"
          text="Service"
        />
        /<h5 className="text-paleBlue mx-3 text-[17px] border-b">Training</h5>
      </div>
      <div className="flex flex-col lg:flex-row sm:px-10 px-4  sm:pb-20 pb-4">
        <div className="flex flex-col justify-between my-6 md:my-20">
          <ul className="list-none flex flex-col   ">
            <Links />
          </ul>
        </div>
        <div className={`${styles.paddingX} w-full`}>
          <div className="w-fit  ">
            <div className="w-full pl-1  bg-gradient-to-b from-[#95C11F] to-[#88CDD3]">
              <div className="w-full bg-white mr-12">
                <h4 className="text-[#16A2B7] font-bold text-[16px] mb-6">
                {data?.title}
                </h4>
                <p className="text-[#4A4A4A] font-bold text-[16px]">
                  {/* Members NGN10,000 / Non */}
                  {data?.otherInfo}
                
                </p>
                {/* <p className="text-[#4A4A4A] font-bold text-[16px] mb-10">
                  Members NGN20,000 + VAT
                </p> */}
                <PLink
                  href="event"
                  styles="bg-[#717861] border border-[#88CDD3] text-white mb-3"
                  text="Register here"
                />
              </div>
            </div>
          </div>
          <div className="my-3 md:my-10 flex">
            <div className="max-w-[900px]">
              
              {
                // @ts-ignore
                data?.aboutCourse.map((d,index:any)=>(
              <p 
              key={index}
              className="font-normal text-[20px] text-black mb-4 leading-8">
                {d}
              </p>

                ))
              }
            </div>


          </div>
          <br />
          <h2><strong>Course Outline</strong></h2>
            <ul>
              {
              // @ts-ignore
              data?.course_outline.map((d,index)=>(
                  <li key={index}>
                    {d}
                  </li>
                ))
              }
            </ul>
            

            <br />
          <h2><strong>Course Benefit</strong></h2>
            <ul>
              {
              // @ts-ignore
              data?.benefit.map((d,index)=>(
                  <li key={index}>
                    {d}
                  </li>
                ))
              }
            </ul>

            <br />
          <h2><strong>Why Should Attend</strong></h2>
            <ul>
              {
              // @ts-ignore
              data?.why_should_attend.map((d,index)=>(
                  <li key={index}>
                    {d}
                  </li>
                ))
              }
            </ul>

        </div>
      </div>
    </section>










          <Interestedfn />
        </Layout>
      </main>
    </>
  );
}