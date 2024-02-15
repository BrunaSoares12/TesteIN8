import './register.css'
import TextField from '@mui/material/TextField';
export default function register() {
    return (
      <div >
        <div >register</div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
      </div>
    )
  }
  