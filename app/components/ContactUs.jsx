import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
export default function ContactUs() {
  return (
    <section id="contact-us" className="contact-section">
      <div className="container">
        <h2 className="contact-title">Contact Us</h2>

        <p className="contact-subtitle">
          We'd love to hear from you. Contact us for custom furniture, interior
          design, or any questions.
        </p>

        <div className="contact-grid">
          <div className="contact-card">
            <FaPhoneAlt className="contact-icon" />
            <h3>Call Us</h3>
            <p>+91 98258 95620</p>
          </div>

          <div className="contact-card">
            <FaWhatsapp className="contact-icon" />
            <h3>WhatsApp</h3>
            <p>+91 98258 95620</p>
          </div>

          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <p>rajnishparamr3632@gmail.com</p>
          </div>

          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <p>
              Rajni Wood Art
              <br />
              Mandvi-Maska, Gujarat, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
