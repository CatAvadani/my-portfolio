import { FaHome } from 'react-icons/fa';
import { Hero } from './components/Hero';
import Projects from './components/Projects';
import { FloatingNav } from './components/ui/FloatingNavbar';

const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

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
        <Projects />
      </div>
    </main>
  );
}
