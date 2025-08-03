function ContactMap() {
  return (
    <div className="contact-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12045.070502080147!2d28.840256272317813!3d40.997515186621975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa4af25e14c1d%3A0x75e589dbfab0084f!2zQmFow6dlbGlldmxlciwgxZ5pcmluZXZsZXIsIDM0MTAwIEJhaMOnZWxpZXZsZXIvxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1749232945666!5m2!1str!2str"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
}
export default ContactMap;
