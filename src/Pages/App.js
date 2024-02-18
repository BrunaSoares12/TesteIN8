import React, { useState, useEffect, useRef } from 'react'
import './App.css';
import Home from './home/home';
import Cadastro from './Cadastro/Cadastro';
import SobreMim from './SobreMim/SobreMim';
import ListaDeContatos from './ListaDeContatos/ListaDeContatos';
import { isVisible } from '@testing-library/user-event/dist/utils';

function App() {
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const home = useRef(null);
  const cadastro = useRef(null);
  const listaDeContatos = useRef(null);
  const sobreMim = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    })
  }

  const abrirNavBar = (Visible) => {
    setIsVisible(Visible)
  }

  React.useEffect(() => {
    
    function handleResize() {
      if(window.innerWidth <= 950) abrirNavBar(false)
      else abrirNavBar(true)
      setIsMobile(window.innerWidth <= 950)
    }
    handleResize()
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <div className="App">        
      <div>
      <div class="navbar">
        { isMobile && (
        <a onClick={() => abrirNavBar(!isVisible)}> 
          <div class="menu-icon">&#9776;</div>
        </a>
        )}
        {isVisible && (
          <div class="navbar-links" id="navbarLinks">
            <ul className='link-list navbar-links'>
              <li onClick={() => scrollToSection(cadastro)} className="link">
                Cadastro
                <div className="underline"></div>
              </li>
              <li onClick={() => scrollToSection(listaDeContatos)} className="link">
                Lista
                <div className="underline"></div>
              </li>
              <li onClick={() => scrollToSection(SobreMim)} className="link">
                Sobre mim
                <div className="underline"></div>
              </li>
            </ul> 
          </div>)
        }
      </div>
      </div>
        <div className="home" ref={home}>
          <Home />
        </div>
        <div className="aboutMe" ref={cadastro}>
          <Cadastro />
        </div>
        <div className="listadecontatos" ref={listaDeContatos}>
          <ListaDeContatos />
        </div>
        <div className="listNew" ref={sobreMim}>
          <SobreMim />
        </div>
    </div>
  );
}

export default App;
