import "./About.css";
import profile from "../../assets/anita-headshot.jpg"; // 👈 replace with your actual image

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <h2 className="about__title">The Tea...</h2>

        <div className="about__image-wrap">
          <img src={profile} alt="Ms. Anita Prozac" />
        </div>

        <div className="about__text">
          <p>
            Ms. Anita Prozac is a stage performer who is equal parts terror and
            seduction. Since starting her career, Ms. Prozac has become known
            for her horrifying and tantalizing routines, which blend classic
            burlesque and drag with a love of all things macabre.
          </p>

          <p>
            Whether she’s haunting the stage as a possessed nun or seducing the
            audience as a blood covered prom queen, Ms. Prozac knows how to keep
            her audience on the edge of her blade. Her performances are always a
            highlight of any show.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
