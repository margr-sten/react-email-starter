import nodemailer from 'nodemailer';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { TangifyWelcomeEmail } from '../emails/index';
import { Html } from '@react-email/html';

// Function to send email
const sendEmail = async (to: string, subject: string) => {
  // Render the email to static HTML
  const emailHtml = ReactDOMServer.renderToStaticMarkup(
    <Html>
      <TangifyWelcomeEmail />
    </Html>
  );

  // Set up the transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password', // You might need to use an App Password instead of your regular password for Gmail.
    },
  });

  // Set up email options
  const mailOptions = {
    from: 'your-email@gmail.com',
    to,
    subject,
    html: emailHtml,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error: ', error);
    } else {
      console.log('Email sent: ', info.response);
    }
  });
};

// Call the sendEmail function
sendEmail('recipient-email@gmail.com', 'Welcome to Tangify!');
