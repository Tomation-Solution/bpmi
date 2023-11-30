import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PLink, Search, Topic } from ".";
// @ts-ignore
import Pub1Image from '../assets/bpmi_pbu_1.PNG'
// @ts-ignore
import Pub2FImg from '../assets/aiinterlige.PNG'

interface AboutProps {
  max?: string;
}
export const publicationAndNews = [
  {
    'title':'Business Process & Performance Review version 4',
    'content':[],
    is_dowload:true,
    img:Pub1Image.src,
    type:'publication',
    id:'1',
    link:'/pub-news/1',
    dowloadFile:'https://drive.google.com/file/d/1lvQUbfo2-3iD_94uEnbB2jQCqFNZF1wX/view?usp=sharing',
  },
  {
    'title':'Business Process & Performance Review',
    'content':[],
    is_dowload:true,
    img:Pub2FImg.src,
    type:'publication',
    id:'2',
    link:'/pub-news/2',
    dowloadFile:'https://drive.google.com/file/d/1Wk4JPSw2z_vgKXQ-jCG4jhwJr8oMzd6h/view?usp=sharing',
  }
];

const About = ({ max }: AboutProps) => {
  return (
    <div className="mt-8 md:mt-16">
      <h2 className="text-[#00305E] font-bold text-[25px] md:text-[36px] text-center mb-10 mx-3">
        Publications & News
      </h2>
      <div className="grid xl:grid-cols-2 gap-4 sm:grid-cols-1 mb-4 md:mb-10">
        <Search />
        {/* <Topic /> */}
      </div>
      <div className=" p-2 flex justify-center">
        <div className="grid xl:grid-cols-4 gap-4 md:gap-24 sm:grid-cols-2">
          {publicationAndNews.map((item, idx) => (
            <div className="p-3 sm:p-0 max-w-[270px]" key={idx}>
              {/* {max && (
                <Link href={"insights/blog"}>
                  <Image
                    width={270}
                    height={350}
                    src={`/chart.jpg`}
                    alt="category"
                    key={item}
                    className="cursor-pointer mb-2 z-20 relative"
                  />
                </Link>
              )} */}
              {/* {!max && (
                <Image
                width={270}
                height={350}
                src={`/chart.jpg`}
                alt="category"
                key={item}
                className="cursor-pointer mb-2 z-20 relative"
              />
              )} */}
                <img
                  width={270}
                  height={350}
                  src={item.img}
                  alt="category"
                  key={idx}
                  className="cursor-pointer mb-2 z-20 relative"
                />
              <p className="z-20 relative">
                {item.title}
              </p>
              <Link href={item.link} className="text-blue"><strong>See details</strong></Link>
         
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center my-3 md:my-10">
        {!max && (
          <PLink
            text="See more"
            styles="bg-primary text-white p-4 "
            href="insights"
          />
        )}
      </div>
    </div>
  );
};

export default About;
