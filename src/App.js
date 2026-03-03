import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from "./components/Header";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { useEffect } from 'react';

function App() {

    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <Hero />
      <Process />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
