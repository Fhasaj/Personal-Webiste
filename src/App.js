import './App.css';

//Pages
import Header from "./components/Header"; 
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Hire from "./components/Hire";
import Contact from "./components/Contact";
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Projects />
    <Hire />
    <Contact />
    <Footer />
    </>
  );
}
export default App;