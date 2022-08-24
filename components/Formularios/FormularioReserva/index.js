import React, { useState } from 'react'
import { TextField, Grid, styled, Paper, Button } from '@mui/material'
<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
const Formulario = ({user}) => {


  const [data, setData] = useState({
    nombre: '',
    rut: '',
    telefono: '',
    correo: ''
  })

  const FormularioForma = styled('div')(({ theme }) => ({
    width: '100%',
    padding: '6rem',
    backgroundColor: '#eee'
  }));


  const Input = styled('input')(({ theme }) => ({
    width: '80%',
    height: '50px',
    margin: '10px',
    borderRadius: '6px'
  }));

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMITTTTT")
  }
  return (
    <>
      <Grid component='Form' type='submit' onSubmit={handleSubmit}>
        <Grid container spacing={2} mt='3rem' justifyContent='center'>
          <Grid item md={8}>
            <TextField
              label="Nombre"
              name='nombre'
              color="secondary"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={8}>
            <TextField
              label="Rut"
              name='rut'
              color="secondary"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={8}>
            <TextField
              label="Telefono"
              name='telefono'
              color="secondary"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={8}>
            <TextField
              label="Correo"
              name='correo'
              color="secondary"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid md={12}  xs={12} marginTop={2} justifyContent='center' display='flex'>
            <button  onSubmit={handleChange} >
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="24">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                  </svg>
                </div>
              </div>
              <span>Send</span>
            </button>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Formulario



{/*  */ }