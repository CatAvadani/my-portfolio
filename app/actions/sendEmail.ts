'use server';

import React from 'react';
import { Resend } from 'resend';
import ContactFormEmail from '../components/ContactFormEmail';
import { getErrorMessage, validateString } from '../../data/validation';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid sender email',
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }

  new Error('message');
  let data;
  try {
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'catalinaavadani@gmail.com',
      subject: 'New message from my contact form portfolio',
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
