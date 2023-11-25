import Image from "next/image";
import React from "react";
import PLink from "../PLink";
import styles from "../style";

const Gallery = () => {
  return (
    <div className={`flex flex-col justify-center  w-full ${styles.paddingY}`}>
      <h3 className={` text-center text-primary ${styles.heading3} mb-10`}>
        GALLERY
      </h3>
      <div className="flex flex-col xl:flex-row justify-between md:justify-around ">
        <div className="grid grid-flow-row-dense gap-3 md:grid-cols-3  w-full ">

          {
            [...new Array(6)].map((d,index)=>(
              <img
                src={`/gallery (${index+1}).jpg`}
                alt=""
                // width={300}
                // height={300}
                style={{'width':'100%',height:'100%'}}
                // col-span-1 row-span-2 
                className="object-cover"
                key={index}
              />
              
            ))
          }

          {/* <Image
            src={"/Rectangle2.jpg"}
            alt=""
            width={500}
            height={200}
            className="col-span-1"
          />
          <Image
            src={"/Rectangle3.jpg"}
            alt=""
            width={500}
            height={200}
            className="col-span-1 row-span-2 "
          />

          <Image
            src={"/Rectangle4.jpg"}
            alt=""
            width={500}
            height={200}
            className="col-span-1"
          /> */}
        </div>
      </div>
      <div className="flex justify-center">
        <PLink
          text="Learn More"
          href="gallery"
          styles="bg-primary text-white mt-8 p-4 "
        />
      </div>
    </div>
  );
};

export default Gallery;
