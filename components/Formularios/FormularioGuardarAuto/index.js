import { Box, Grid, styled } from '@mui/material'
import React from 'react'


const FormularioGuardarAuto = ({ car }) => {
  console.log("LINK DE IMAGEN",car.attributes.imagen.data[0].attributes.url)
  return (
    <>
      <Grid container mt='3rem' md={12} xs={6} >
        <Grid item>
          <img src={`${process.env.NEXT_PUBLIC_API_URL}${car?.attributes?.imagen?.data[0]?.attributes?.url}`} alt="" width="500px" height="300px" />
        </Grid>
        <Grid item md={6} xs={6}>
          <h2>{car?.attributes?.informacion}</h2>
        </Grid>
        <Grid item md={6} xs={6}>
          <h2>{car?.attributes?.marca}</h2>
        </Grid>
        <Grid item md={6} xs={6}>
          <h2>{car?.attributes?.km}km</h2>
        </Grid>
        <Grid item md={6} xs={6}>
          <h2>${car?.attributes?.precio}</h2>
        </Grid>
      </Grid>
    </>
  )
}

export default FormularioGuardarAuto