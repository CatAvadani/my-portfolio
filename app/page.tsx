import { links } from '@/data';
import { FaHome } from 'react-icons/fa';
import Footer from './components/Footer';
import { Hero } from './components/Hero';
import { Icons } from './components/Icons';
import Projects from './components/Projects';
import { FloatingNav } from './components/ui/FloatingNavbar';

export default function Home() {
  return (
    <main className=' relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <div className='  max-w-7xl w-full'>
        <FloatingNav
          navItems={links.map((link) => ({
            name: link.name,
            link: link.hash,
            icon: <FaHome />,
          }))}
        />
        <Hero />
        <Icons />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
