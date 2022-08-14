import React from 'react'
import { Grid,styled } from '@mui/material'
import Formulario from '../../components/Formularios/FormularioReserva/index'
import FormularioGuardarAuto from '../../components/Formularios/FormularioGuardarAuto'

const index = () => {
  return (
    <Grid
      container
    >
      <Grid
        item
        xs={12}
        md={6}
      >
        <Formulario />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
      >
        <FormularioGuardarAuto />
      </Grid>
    </Grid>
  )
}

export default index
