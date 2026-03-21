import "./Hero.css";
import background from "../../assets/anita-background.png";

function Hero() {
  return (
    <section className="hero">
      <img src={background} alt="Anita Prozac" className="hero__image" />
      <div className="hero__overlay" />

      <div className="hero__content">
        <h1>Ms. Anita Prozac</h1>
        <p>She is absolutely awful — everyone</p>
      </div>
    </section>
  );
}

export default Hero;
