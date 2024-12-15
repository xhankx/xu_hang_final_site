import React from 'react';
import { Label, Button, Img } from 'xu_hang_ui_garden_build_checks';

const ContactPage = () => (
  <div>
    <Label text="Contact Me" />
    <Img src="https://via.placeholder.com/100" alt="Contact Icon" />
    <Button label="Email Me" onClick={() => alert('Contact me at example@email.com')} />
  </div>
);

export default ContactPage;
