import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./ContactForm.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("maqpkglb");

  if (state.succeeded) {
    return (
      <div className="contact-form contact-form--success">
        <h2>Thanks!</h2>
        <p>Your booking inquiry has been sent.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="contact-form__label" htmlFor="name">
        Name
      </label>
      <input
        className="contact-form__input"
        id="name"
        type="text"
        name="name"
        placeholder="Your name"
        required
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <label className="contact-form__label" htmlFor="email">
        Contact E-Mail
      </label>
      <input
        className="contact-form__input"
        id="email"
        type="email"
        name="email"
        placeholder="you@example.com"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label className="contact-form__label" htmlFor="performanceType">
        Performance Type
      </label>
      <input
        className="contact-form__input"
        id="performanceType"
        type="text"
        name="performanceType"
        placeholder="Birthday party, club set, private event, etc."
        required
      />
      <ValidationError
        prefix="Performance Type"
        field="performanceType"
        errors={state.errors}
      />

      <label className="contact-form__label" htmlFor="ageGroups">
        Age Group(s)
      </label>
      <input
        className="contact-form__input"
        id="ageGroups"
        type="text"
        name="ageGroups"
        placeholder="Kids, teens, adults, all ages, etc."
      />
      <ValidationError
        prefix="Age Group(s)"
        field="ageGroups"
        errors={state.errors}
      />

      <label className="contact-form__label" htmlFor="location">
        Location of Event
      </label>
      <input
        className="contact-form__input"
        id="location"
        type="text"
        name="location"
        placeholder="Venue name or city"
        required
      />
      <ValidationError
        prefix="Location of Event"
        field="location"
        errors={state.errors}
      />

      <label className="contact-form__label" htmlFor="theme">
        Does the Event Have a Theme?
      </label>
      <input
        className="contact-form__input"
        id="theme"
        type="text"
        name="theme"
        placeholder="Optional theme details"
      />
      <ValidationError prefix="Theme" field="theme" errors={state.errors} />

      <label className="contact-form__label" htmlFor="dateTime">
        Date / Time
      </label>
      <input
        className="contact-form__input"
        id="dateTime"
        type="text"
        name="dateTime"
        placeholder="MM/DD/YYYY, 7:00 PM"
        required
      />
      <ValidationError
        prefix="Date / Time"
        field="dateTime"
        errors={state.errors}
      />

      <label className="contact-form__label" htmlFor="extraInfo">
        Extra Info
      </label>
      <textarea
        className="contact-form__textarea"
        id="extraInfo"
        name="extraInfo"
        placeholder="Anything else we should know?"
        rows="6"
      />
      <ValidationError
        prefix="Extra Info"
        field="extraInfo"
        errors={state.errors}
      />

      <button
        className="contact-form__button"
        type="submit"
        disabled={state.submitting}
      >
        {state.submitting ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}

export default ContactForm;
