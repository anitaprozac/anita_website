import "./Booking.css";
import ContactForm from "../../components/ContactForm/ContactForm";

function Booking() {
  return (
    <section className="booking">
      <div className="booking__container">
        <h1 className="booking__title">Booking</h1>

        <p className="booking__text">
          For booking inquiries, appearances, and collaborations, please fill
          out the form below or reach out directly.
        </p>

        {/* 👇 FORM GOES HERE */}
        <div className="booking__form">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Booking;
