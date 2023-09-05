import { Button } from "@mui/material"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from "react";
function FormSignUp({ handleSubmit }) {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [prom, setProm] = useState('')
    const [nov, setNov] = useState('')

    const newNombre = (e) => {
        console.log(nombre);
        setNombre(e.target.value)
    }
    const newApellido = (e) => {
        console.log(apellido);
        setApellido(e.target.value)
    }
    const newEmail = (e) => {
        console.log(email);
        setEmail(e.target.value)
    }

    const [errores, setErrores] = useState({
        name: {
            error: false,
            message: 'Deben ser al menos 3 caracteres'
        }
    })

    const validarNombre = (nombre) => {
        if(nombre.length <= 3){
            return {name: {error: true, message: 'Deben ser al menos 3 caracteres'}}
        }else{
            return {name: {error: false, message: ' '}}
        }
    }
    return <form onSubmit={(e) => {
        e.preventDefault()
        handleSubmit({ nombre, apellido, email, prom, nov });
    }}>


        <TextField
            id="name"
            label="Nombre"
            variant="outlined"
            margin="normal"
            fullWidth
            onChange={newNombre}
            value={nombre}
            error={errores.name.error}
            helperText={errores.name.error ? errores.name.message : ''}
            onBlur={(e) => setErrores(validarNombre(e.target.value))}
            
        />
        <TextField
            id="apellido"
            label="Apellido"
            variant="outlined"
            margin="normal"
            fullWidth
            onChange={newApellido}
        />
        <TextField
            id="email"
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            onChange={newEmail}
        />
        <FormGroup>
            <FormControlLabel
                label="Novedades"
                control={<Switch checked={nov} onChange={(e) => { setNov(e.target.checked) }} />} />
            <FormControlLabel
                label="Promociones"
                control={<Switch checked={prom} onChange={(e) => { setProm(e.target.checked) }} />} />
        </FormGroup>
        <Button type='submit' variant='contained'>Registrarse</Button>
    </form>
}

export default FormSignUp