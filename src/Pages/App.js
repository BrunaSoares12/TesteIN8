import { useRef } from "react"
import './App.css'
import Home from './home/home'
import AboutMe from './aboutMe/aboutMe'
import List from './list/list'
import Register from './register/register'
function App() {

  const home = useRef(null)
  const aboutMe = useRef(null)
  const register = useRef(null)
  const list = useRef(null)

  const scrollToSection = (elementRef) => {
    console.log(elementRef)
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    })
  }

  return (
    <div className="App">
      <div>
        <ul className="navbar">
          <li onClick={() => scrollToSection(home)} className="link">
            Home
          </li>
          <li onClick={() => scrollToSection(aboutMe)} className="link">
            Lista de Cadastro
          </li>
          <li onClick={() => scrollToSection(register)} className="link">
            Contatos
          </li>
          <li onClick={() => scrollToSection(list)} className="link">
            Lista
          </li>
        </ul>
      </div>
      <div className="home" ref={home}>    
        <Home />
      </div>
      <div  className="aboutMe" ref={aboutMe}>
      <AboutMe />
    </div> 
    <div className="register" ref={register}>
    <Register/>
    </div>
    <div className="listNew" ref={list}>
     <List/>
    </div>
    </div>
    
  )
}

export default App
