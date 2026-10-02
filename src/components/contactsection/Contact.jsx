import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">

      <div className="contact-heading">
        <h2>Contact Us</h2>

        <p>
          Have any questions? Send us a message.
        </p>
      </div>

      <form className="contact-form">

        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <textarea
          placeholder="Your Message"
          rows="6"
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>

    </section>
  );
}

export default Contact;