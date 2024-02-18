import { useRef } from "react";
import './App.css';
import Home from './home/home';
import AboutMe from './aboutMe/aboutMe';
import List from './list/list';
import Register from './register/register';

function App() {
  const home = useRef(null);
  const aboutMe = useRef(null);
  const register = useRef(null);
  const list = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <div>
        <ul className="navbar">
          <li onClick={() => scrollToSection(aboutMe)} className="link">
            Cadastro
            <div className="underline"></div>
          </li>
          <li onClick={() => scrollToSection(register)} className="link">
            Lista
            <div className="underline"></div>
          </li>
          <li onClick={() => scrollToSection(list)} className="link">
            Sobre mim
            <div className="underline"></div>
          </li>
        </ul>
      </div>
      <div className="home" ref={home}>
        <Home />
      </div>
      <div className="aboutMe" ref={aboutMe}>
        <AboutMe />
      </div>
      <div className="register" ref={register}>
        <Register />
      </div>
      <div className="listNew" ref={list}>
        <List />
      </div>
    </div>
  );
}

export default App;
