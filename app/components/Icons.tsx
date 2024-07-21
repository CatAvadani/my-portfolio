import { slugs } from '@/data';
import IconCloud from './ui/IconCloud';

export function Icons() {
  return (
    <div
      id='skills'
      className='relative flex flex-col h-full w-full max-w-[32rem] items-center justify-center overflow-hidden  bg-transparent px-20 pb-20  mx-auto'
    >
      <p className='text-md text-center mt-10 text-gray-400'>
        A diverse set of skills and tools I use in my projects
      </p>
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
