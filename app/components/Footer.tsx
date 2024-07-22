import { socialMedia } from '@/data';
import Image from 'next/image';
import Contact from './Contact';

const Footer = () => {
  return (
    <footer id='contact' className='w-full pt-20 pb-10 relative'>
      <div className='w-full absolute left-0 bottom-10 '>
        <Image
          src='/footer-grid.svg'
          alt='footer-grid'
          width={1920}
          height={50}
          className='w-full h-full opacity-50 '
        />
      </div>
      <div className='flex flex-col items-center gap-4'>
        <p className='text-lg sm:text-3xl max-w-[70vw] text-center'>
          Reach out to me <span className='text-purple'>today</span> and
          let&apos;s build something great{' '}
          <span className='text-purple'>together</span>!
        </p>
        <Contact />
      </div>
      <div className='flex mt-16 md:flex-row flex-col justify-between items-center gap-4'>
        <p className='text-sm md:text-base font-light text-white-200 p-0'>
          Copyright
          <span> © {new Date().getFullYear()} Catalina Avadani</span>
        </p>
        <div className='flex items-center justify-center gap-6 md:gap-3'>
          {socialMedia.map((item) => (
            <a
              href={item.url}
              target='_blank'
              key={item.id}
              className='w-10 h-10 cursor-pointer flex justify-center items-center rounded-full border border-black-300 backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200'
            >
              <Image
                src={item.img}
                alt={item.id.toString()}
                width={20}
                height={20}
                className='size-5'
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
