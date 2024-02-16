import React from 'react';
import './register.css';
import TextField from '@mui/material/TextField';

export default function Register() {
  return (
    <div className='tabela'>
      <h1 className='titulo'>Lista de Contatos</h1>
      <form>
        <div className='linha1'>
          <TextField
            required
            id="outlined-required"
            label=""
            defaultValue=""
            color="warning"
            focused
          />
          <TextField
            required
            id="outlined-required"
            label=""
            defaultValue=""
          />
          <TextField
            required
            id="outlined-required"
            label=""
            defaultValue=""
          />
          <TextField
            required
            id="outlined-required"
            label=""
            defaultValue=""
          />
        </div>
        <div className='linha2'>
          <TextField
            required
            id="outlined-required"
            label=""
            defaultValue=""
            color="warning"
            focused
          />
          <TextField
            required
            id="outlined-required"
            label=""
            defaultValue=""
          />
          <TextField
            required
            id="outlined-required"
            label=""
            defaultValue=""
          />
          <TextField
            required
            id="outlined-required"
            label=""
            defaultValue=""
          />
        </div>
        <div className='linha3'>
          <TextField
            required
            id="outlined-required"
            label=""
            defaultValue=""
            color="warning"
            focused
          />
          <TextField
            required
            id="outlined-required"
            label=""
            defaultValue=""
          />
          <TextField
            required
            id="outlined-required"
            label=""
            defaultValue=""
          />
          <TextField
            required
            id="outlined-required"
            label=""
            defaultValue=""
          />
        </div>
        <div className='linha4'>
          <TextField
            required
            id="outlined-required"
            label=""
            defaultValue=""
            color="warning"
            focused
          />
          <TextField
            required
            id="outlined-required"
            label=""
            defaultValue=""
          />
          <TextField
            required
            id="outlined-required"
            label=""
            defaultValue=""
          />
          <TextField
            required
            id="outlined-required"
            label=""
            defaultValue=""
          />
        </div>
      </form>
    </div>
  );
}
