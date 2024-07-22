'use client';

import { projectsData } from '@/data';
import Image from 'next/image';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { PinContainer } from './ui/Pin';
import Underline from './ui/Underline';

const RecentProjects = () => {
  return (
    <div id='projects' className='py-20'>
      <h1 className='text-2xl font-bold text-center'>Projects</h1>

      <Underline className='mb-2' />

      <div className='flex flex-wrap items-center justify-center p-4 gap-10 mt-2'>
        {projectsData.map((item) => (
          <div
            className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'
            key={item.id}
          >
            <PinContainer title='Visit' href={item.link}>
              <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D] '>
                  <Image src='/bg.png' alt='bg-img' width={200} height={250} />
                </div>
                <Image
                  src={item.imageUrl}
                  alt='cover'
                  width={200}
                  height={250}
                  className='z-10 absolute -bottom-10 rotate-6 w-72 h-44 sm:w-80 sm:h-56 rounded-lg'
                />
              </div>

              <h1 className='font-bold lg:text-xl md:text-lg text-base line-clamp-1'>
                {item.title}
              </h1>

              <p
                className='lg:text-lg lg:font-normal font-light text-sm line-clamp-2'
                style={{
                  color: '#BEC1DD',
                  margin: '1vh 0',
                }}
              >
                {item.description}
              </p>

              <div className='flex items-center justify-between mt-7 mb-3'>
                <div className='flex items-center'>
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className='border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt='icon5'
                        width={50}
                        height={50}
                        className='p-2'
                      />
                    </div>
                  ))}
                </div>

                <div className='flex justify-center items-center'>
                  <p className='flex lg:text-lg md:text-xs text-sm text-purple'>
                    Live Demo
                  </p>
                  <IoMdArrowRoundForward className='ms-3 text-[#CBACF9]' />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
