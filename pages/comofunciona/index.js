import React, { useState } from 'react'
import { Box, Grid, styled, Button } from '@mui/material'
import { getSession } from "next-auth/react";
import Image from 'next/image'
import logo from '../../assets/tulogo.png'
import { getPasos } from '../../services/pasos.service'

const comofunciona = ({ session, error, pasosn }) => {

 


  const Logo = styled('div')(({ theme }) => ({
    padding: '6rem'
  }));



  return (

    <Grid container md={12}>
      <Grid
        item
        md={6}
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        {pasosn.map((paso) => (
          <Box
            xs={12}
            md={12}
          >
            <h1>{paso.attributes.descripcionPaso}</h1>
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


export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  try {
    const data = await getPasos()
    return {
      props: {
        session,
        pasosn: data,
        error: false,
      },
    };
  } catch (err) {
    return {
      props: {
        session,
        pasosn: [],
        error: true,
      },
    };
  }
}

export default comofunciona