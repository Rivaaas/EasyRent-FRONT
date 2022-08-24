import { Box, Grid, styled } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import logo from '../../../assets/tulogo.png'


const FormularioGuardarAuto = ({car}) => {
  return (
    <>
      <Grid container mt='3rem' >
        <Grid item>
          <Image src={car?.attributes?.imagen?.data[0]?.attributes?.url} alt="" width="500" height="300" />
        </Grid>
        <Grid item md={6}>
          <h2>{car?.attributes?.informacion}</h2>
        </Grid>
        <Grid item md={6}>
          <h2>{car?.attributes?.marca}</h2>
        </Grid>
        <Grid item md={6}>
          <h2>{car?.attributes?.km}</h2>
        </Grid>
        <Grid item md={6}>
          <h2>{car?.attributes?.precio}</h2>
        </Grid>
      </Grid>
    </>
  )
}

export default FormularioGuardarAuto