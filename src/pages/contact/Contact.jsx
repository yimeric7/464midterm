import Navbar from '../../components/navbar/Navbar.jsx';
import Timestamp from '../../components/timestamp/Timestamp.jsx';
import ContactForm from '../../components/contact-form/ContactForm.jsx';

function Contact() {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80vh' }}>
        <ContactForm />
      </div>
      <Timestamp />
    </div>
  );
}

export default Contact;
``
