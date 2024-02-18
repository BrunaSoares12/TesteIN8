import React, { useState } from 'react';
import './Cadastro.css';
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
    localStorage.setItem("Person", JSON.stringify(novaLista))    
  }
  
  return (
    <div className='content'>
      <div className='Cadastro'>
        <h1>Cadastro</h1>
      </div>
      <div className='Linhas'>
        <div className='TextInput'>
        <p>Name</p>
        <input onChange={(event)=> setName(event.target.value)}/>
        </div>
        <div className='TextInput'>
        <p>Email</p>
        <input onChange={(event)=> setEmail(event.target.value)}/>
        </div>
        <div className='TextInput'>
        <p>Nascimento</p>
        <input onChange={(event)=> setNascimento(event.target.value)} />
        </div>
        <div className='TextInput'>
        <p>Telefone</p>
        <input onChange={(event)=> setTelefone(event.target.value)}/>
        </div>
      </div>
      <div className='botton'>
           <button onClick={setNewUserOnLocalStorage}>Cadastrar</button> 
        </div>
    </div>
  );
}