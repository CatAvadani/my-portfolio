import Image from 'next/image';
import { IoMdArrowRoundForward } from 'react-icons/io';
import MagicButton from './ui/MagicButton';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';

export const Hero = () => {
  return (
    <div className=' pb-20 pt-36'>
      <Spotlight
        className=' -top-40 -left-10 md:-left-32 md:-top-20 h-screen'
        fill='pink'
      />
      <Spotlight className=' top-10 left-full h-[80vh] w-[50vw]' fill='blue' />
      <Spotlight className=' top-28 left-80 h-[80vh] w-[50vw]' fill='purple' />
      <div className='h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0'>
        {/* Radial gradient for the container to give a faded look */}
        <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
      </div>

      <div className=' flex justify-center relative my-20 z-10'>
        <div className=' max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <Image
            src={require('../../public/myImage.jpeg')}
            alt='My Image'
            width={192}
            height={192}
            quality={95}
            priority={true}
            className='h-24 w-24 rounded-full object-cover border-[0.15rem] border-violet-100 
            shadow-xl'
          />
          <p className='text-center md:tracking-wider mt-4 font-medium'>
            Hi, I&apos;m Catalina, a Front-End Developer!
          </p>
          <TextGenerateEffect
            className='text-center text-[40px] p-8 '
            words=' I love building User Interfaces & Digital Products with focus on performance, using cutting-edge technologies like React( Next.js).'
          />
          <a href='#about'>
            <MagicButton
              title={'My Work'}
              icon={
                <IoMdArrowRoundForward className=' size-5 hover:translate-x-2 transition-all' />
              }
              position='right'
            />
          </a>
        </div>
      </div>
    </div>
  );
};
