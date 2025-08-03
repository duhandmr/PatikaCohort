import HeroLabel from "./HeroLabel";
import HeroHeading from "./HeroHeading";
import HeroDescription from "./HeroDescription";
import HeroButtons from "./HeroButtons";

function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-content">
          <HeroLabel />
          <HeroHeading />
          <HeroDescription />
          <HeroButtons />
        </div>
      </div>
    </section>
  );
}
export default Hero;
