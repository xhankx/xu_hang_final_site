import React from 'react';
import PageWithChildren from '../Components/PageWithChildren';
import ContactForm from '../Components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <PageWithChildren id="contact" className="contact">
      <h1>Connect with Me</h1>
      <ContactForm />
    </PageWithChildren>
  );
};

export default ContactPage;
