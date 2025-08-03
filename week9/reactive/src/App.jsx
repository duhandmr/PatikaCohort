import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import Classes from "./components/Classes/Classes";
import BMI from "./components/BMI/Bmi";
import Trainers from "./components/Trainers/Trainers";
import Products from "./components/Products/Products";
import Reviews from "./components/Reviews/Reviews";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import "./App.css"; // Assuming you have a global CSS file for styles

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Classes />
      <BMI />
      <Trainers />
      <Products />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
