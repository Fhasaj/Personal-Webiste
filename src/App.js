import './App.css';

//Pages
import Header from "./components/Header"; 
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Projects />
    <Blog />
    <Contact />
    </>
  );
}
export default App;