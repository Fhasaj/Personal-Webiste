import "./App.css";

//Pages
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Hire from "./components/Hire";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { MdKeyboardArrowUp } from "react-icons/md";

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
      <button
        className="fixed bottom-0 right-0 m-10 bg-accent text-white p-3 rounded-full text-2xl hover:bg-primary-light transition duration-300 ease-in-out"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <MdKeyboardArrowUp />
      </button>
    </>
  );
}
export default App;
