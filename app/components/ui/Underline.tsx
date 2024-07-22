const Underline = ({className}: {className: string}) => {
  return (
    <div className={`w-full sm:w-[40rem] h-6 relative m-auto mt-2 ${className}`}>
      <div className='absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 sm:w-3/4 blur-sm' />
      <div className='absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4 sm:w-3/4' />
      <div className='absolute inset-x-20 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/2 sm:w-1/4 blur-sm' />
      <div className='absolute inset-x-20 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/2 sm:w-1/4' />
    </div>
  );
};

export default Underline;
