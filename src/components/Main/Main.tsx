import React from 'react'
import Image from 'next/image';
const Main = () => {
  return (
    <section className='w-full z-10 fixed bg-hero bg-cover bg-center bg-no-repeat mt-[100px]' id='hero'>
    <div className="container mx-auto">
      <div className="lg:w-full lg:py-16 flex justify-center items-center flex-col lg:flex-row  lg:gap-10">
        <Image src={'/assets/img/main.jpg'} alt='logo' className='opacity-60 rounded-lg w-[100px] h-[100px] lg:w-[500px] lg:h-[500px] '  width={1000} height={1000}/>
        <h1 className="lg:text-6xl text-center lg:leading-[7rem] lg:font-extrabold ">Люди заходить поиграть в вар тандер <span className='text-red-500'>ТАМ</span> очень <span className='text-red-500'>КРАСИВА</span></h1>
      </div>
    </div>
  </section>
  )
}

export default Main