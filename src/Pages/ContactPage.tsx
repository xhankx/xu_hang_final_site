import React from 'react';
import PageWithChildren from '../components/PageWithChildren';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <PageWithChildren id="contact" className="contact">
      <h1>Connect with Me</h1>
      <ContactForm />
    </PageWithChildren>
  );
};

export default ContactPage;
