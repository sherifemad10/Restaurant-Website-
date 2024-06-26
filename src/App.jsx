import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import { Menu } from "./components/Menu/Menu";
import Gallary from "./components/Gallary/Gallary";
import Order from "./components/MakeOrder/Order";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Reviews from "./components/Reviews/Reviews";
import { Footer } from "./components/Footer/Footer";
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init ({duration:2000})
  
  }, []);

  return (
    <div className= "App">
      <Navbar />

      <Banner/>

      <Menu />

      <Gallary />

      <Order />

      <About />

      <Contact />

      <Reviews />

      <Footer />
    </div>
  );
}

export default App;
