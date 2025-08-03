function ContactForm() {
  return (
    <div className="contact-form">
      <div className="contact-info">
        <div>
          <p>Mobile Number</p>
          <span>+123 789 4562</span>
        </div>
        <div>
          <p>Email Address</p>
          <span>demo@goma.com</span>
        </div>
      </div>
      <form>
        <h3>Make An Appoinment</h3>
        <div>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
export default ContactForm;
