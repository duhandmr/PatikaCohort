import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

function Contact() {
  return (
    <section id="contact" className="container">
      <ContactHeader />
      <div className="contact-content">
        <ContactForm />
        <ContactMap />
      </div>
    </section>
  );
}
export default Contact;
