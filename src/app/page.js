import NavbarComponent from "@/components/CardComponent"
import React from 'react'
import Image from "next/image";
import img from '../../public/images/banner.jpg'
import CardComponet from "@/components/CardComponent";
import FooterComponent from "@/components/FooterComponent";
import { getAllMovies } from "@/services/movie.service";

export default async function Home() {


  return (
    <div className="">

      <div className="h-screen w-full mt-[-72px]">
        <Image className='absolute object-cover object-center inset-0 w-full h-screen -z-10'
          src={img} alt='backgroud image'
        />
        <nav className='bg-dark -z-10'>
        </nav>
      </div>
      <div className="h-auto w-full bg-[#38140D] pb-[40px]">
        <CardComponet />
      </div>
      <div className="">
        <FooterComponent />
      </div>
    </div>
  );
}
