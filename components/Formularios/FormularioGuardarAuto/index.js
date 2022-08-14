import { Box, Grid, styled } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import logo from '../../../assets/tulogo.png'


const FormularioGuardarAuto = () => {
  return (
    <>
      <Grid container mt='3rem' >
        <Grid item>
          <Image src={logo} alt="" width="500" height="300" />
        </Grid>
        <Grid item md={6}>
          <h2>MODELO AUTO</h2>
        </Grid>
        <Grid item md={6}>
          <h2>MARCA</h2>
        </Grid>
        <Grid item md={6}>
          <h2>KILOMETRAJE</h2>
        </Grid>
        <Grid item md={6}>
          <h2>PRECIO</h2>
        </Grid>
      </Grid>
    </>
  )
}

export default FormularioGuardarAuto