import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { TextField, Grid, styled, Paper, Button } from '@mui/material'
<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />


const Formulario = ({ session = {} }) => {
  const { user = {} } = session

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

  const ButtonStyledx = styled('button')(({ theme }) => ({
    padding: '15px 25px',
    border: 'unset',
    borderRadius: '15px',
    color: '#212121',
    zIndex: '1',
    background: '#e8e8e8',
    position: 'relative',
    fontWeight: '1000',
    fontSize: '17px',
    webkitBoxShadow: '4px 8px 19px -3px rgba(0,0,0,0.27)',
    boxShadow: '4px 8px 19px -3px rgba(0,0,0,0.27)',
    transition: 'all 250ms',
    overflow: 'hidden',
    ':before': {
      position: 'absolute',
      top: '0',
      left: '0',
      height: '100 %',
      width: '0',
      borderRadius: '15px',
      backgroundColor: '#212121',
      webkitBoxShadow: ' 4px 8px 19px - 3px rgba(0, 0, 0, 0.27)',
      boxShadow: '4px 8px 19px - 3px rgba(0, 0, 0, 0.27)',
      transition: 'all 250ms',
  }
  }))
  return (
    <>
      <Grid component='Form' type='submit' onSubmit={handleSubmit}>
        <Grid container spacing={2} mt='3rem' justifyContent='center'>
          <Grid item md={8}>
            <TextField
              // label="Nombre"
              name='nombre'
              color="secondary"
              value={user.name}
              fullWidth
              onChange={handleChange}
              disabled
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
              // label="Correo"
              name='correo'
              color="secondary"
              value={user.email}
              fullWidth
              disabled
              onChange={handleChange}
            />
          </Grid>
          <Grid md={12} xs={12} marginTop={2} justifyContent='center' display='flex'>
            <ButtonStyledx onSubmit={handleChange} >
                Reservar
            </ButtonStyledx>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}



export default Formulario



