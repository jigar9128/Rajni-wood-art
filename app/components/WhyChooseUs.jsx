import {
  FaAward,
  FaHammer,
  FaUsers,
  FaShieldAlt,
  FaTruck,
  FaStar,
} from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaAward size={42} color="#C89B3C" />,
      title: "Premium Quality",
      text: "We use high-quality wood and premium materials for every project.",
    },
    {
      icon: <FaHammer size={42} color="#C89B3C" />,
      title: "Expert Craftsmanship",
      text: "Skilled artisans with years of experience create every design with precision.",
    },
    {
      icon: <FaUsers size={42} color="#C89B3C" />,
      title: "500+ Happy Customers",
      text: "Trusted by hundreds of satisfied customers across Gujarat.",
    },
    {
      icon: <FaShieldAlt size={42} color="#C89B3C" />,
      title: "Trusted Service",
      text: "Honest pricing, transparent communication, and reliable support.",
    },
    {
      icon: <FaTruck size={42} color="#C89B3C" />,
      title: "On-Time work complition",
      text: "we are complete your work Within your time.",
    },
    {
      icon: <FaStar size={42} color="#C89B3C" />,
      title: "Excellent Reviews",
      text: "Customers appreciate our quality, professionalism, and attention to detail.",
    },
  ];

  return (
    <section className="why-section">
      <div className="container">
        <h2 className="why-title">Why Choose Rajnish Wood Art ?</h2>

        <p className="why-subtitle">
          We combine premium craftsmanship, modern interior design, and customer
          satisfaction to create beautiful living spaces.
        </p>

        <div className="why-grid">
          {features.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
