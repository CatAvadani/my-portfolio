'use client';

import { useRef } from 'react';
import toast from 'react-hot-toast';
import { sendEmail } from '../actions/sendEmail';
import SubmitBtn from './SubmitButton';

export default function Contact() {
  const formRef = useRef(null);
  return (
    <div id='contact' className=' w-[min(100%,38rem)] text-center z-10'>
      <p className=' text-gray-700 mt-5 dark:text-white/80'>
        Please contact me directly at{' '}
        <a className='underline' href='mailto:catalina_ava@yahoo.com'>
          catalina_ava@yahoo.com
        </a>{' '}
        or through this form.
      </p>
      <form
        ref={formRef}
        className=' mt-10 flex flex-col dark:text-black '
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success('Email sent successfully!');
          (formRef.current as HTMLFormElement | null)?.reset();
        }}
      >
        <input
          className='px-4 h-14 bg-[#13162D] border dark:border-white/[0.05] rounded-lg dark:outline-none '
          name='senderEmail'
          type='email'
          required
          maxLength={500}
          placeholder='Your email'
        />
        <textarea
          className='h-52 my-3 p-4 rounded-lg border dark:border-white/[0.05] bg-[#13162D] text-white dark:outline-none'
          name='message'
          placeholder='Your message'
          required
          maxLength={5000}
        ></textarea>
        <SubmitBtn />
      </form>
    </div>
  );
}
