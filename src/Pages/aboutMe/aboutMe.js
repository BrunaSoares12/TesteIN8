import React, { useState } from 'react';
import './aboutMe.css';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';



export default function AboutMe() {
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Nascimento, setNascimento] = useState('')
  const [Telefone, setTelefone] = useState('')
  const [ListaDePessoas, setListaDePessoas] = useState([])

  const setNewUserOnLocalStorage = () => {
    const novaPessoa = {
      name: Name,
      Email: Email,
      Nascimento: Nascimento,
      Telefone: Telefone
    }
    const novaLista = [novaPessoa, ...ListaDePessoas]
    setListaDePessoas(novaLista)
    localStorage.setItem("Person", JSON.stringify(novaLista));
  }
  
  return (
    <div>
      <div className='Cadastro'>
        <h1>Cadastro</h1>
      </div>
      <div className='Linhas'>
        <div>
          <FormControl variant="standard">
            <InputLabel 
              htmlFor="component-helper"
              sx={{color: 'white'}}   
            >
              Nome
            </InputLabel>
            <Input
              id="component-helper"
              aria-describedby="component-helper-text"
              className='customInput'
              onChange={(event)=> setName(event.target.value)}
            />
          </FormControl>
        </div>
        <div className='listadeCadastro2'>
          <FormControl variant="standard">
            <InputLabel 
            htmlFor="component-helper"
            sx={{color: 'white'}}  

            >Email
            </InputLabel>
            <Input
              id="component-helper"
              aria-describedby="component-helper-text"
              className='customInput'
              onChange={(event)=> setEmail(event.target.value)}
              
            />
          </FormControl>
        </div>
        <div className='listadeCadastro3'>
          <FormControl variant="standard">
            <InputLabel 
            htmlFor="component-helper"
            sx={{color: 'white'}}  
            
            >Nascimento
            </InputLabel>
            <Input
              id="component-helper"
              aria-describedby="component-helper-text"
              className='customInput'
              onChange={(event)=> setNascimento(event.target.value)} 
            />
          </FormControl>
        </div>
        <div className='listadeCadastro4'>
          <FormControl variant="standard">
            <InputLabel htmlFor="component-helper"
            sx={{color: 'white'}}  
            >Telefone</InputLabel>
            <Input
              id="component-helper"
              aria-describedby="component-helper-text"
              className='customInput'
              onChange={(event)=> setTelefone(event.target.value)}
            />
          </FormControl>
        </div>
      </div>
      <div className='botton'>
           <button onClick={setNewUserOnLocalStorage}>Cadastrar</button> 
        </div>
    </div>
  );
}