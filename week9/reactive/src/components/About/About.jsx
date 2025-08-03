import AboutText from "./AboutText";
import AboutCard from "./AboutCard";
import AboutVideo from "./AboutVideo";
import "./About.css";

function About() {
  return (
    <section className="about-section">
      <AboutText />
      <AboutCard />
      <AboutVideo />
    </section>
  );
}
export default About;
