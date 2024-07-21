'use client';
import { cn } from '@/app/utils/cn';
import { motion, stagger, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(' ');

  const highlightWords = [
    'User',
    'Interfaces',
    '&',
    'Digital',
    'Products',
    'React(Next.js).',
  ];

  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          const isHighlight = highlightWords.includes(word);
          return (
            <motion.span
              key={word + idx}
              className={`${
                isHighlight
                  ? ' text-highlight'
                  : idx > 16
                  ? ' text-purple italic text-2xl'
                  : 'dark:text-white text-black'
              } opacity-0`}
            >
              {word}{' '}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn('font-semibold', className)}>
      <div className='mt-4'>
        <div className=' dark:text-white text-black text-2xl leading-snug tracking-wider'>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
