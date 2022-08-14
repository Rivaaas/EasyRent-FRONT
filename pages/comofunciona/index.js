import React, { useState } from 'react'
import { Box, Grid, styled, Button } from '@mui/material'
import Image from 'next/image'
import logo from '../../assets/tulogo.png'

const comofunciona = () => {


  const Pasos = styled('div')(({ theme }) => ({
    padding: '6rem'
  }));


  const Logo = styled('div')(({ theme }) => ({
    padding: '6rem'
  }));

  const pasos = ['Paso 1', 'Paso 2', 'Paso 3', 'Paso 4'];


  const [data, setData] = useState({
    paso1: '',
    paso2: '',
    paso3: '',
    paso4: ''
  })

  return (
    <Grid container md={12}>
      <Grid
        item
        md={6}
      >
        {pasos.map((paso) => (
          <Box
            xs={12}
            md={12}
          >
            <h1>sdfsdfsdfsfsdfsfsdfsfs,{paso}</h1>
          </Box>
        ))}
      </Grid>
      <Grid
        item
        md={6}
      >
        <Box>
          <Image src={logo} alt='' width='400px' height='400px' />
        </Box>
      </Grid>
    </Grid>
  )
}

export default comofunciona