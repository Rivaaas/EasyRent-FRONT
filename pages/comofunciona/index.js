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

    <Grid container >
      <Grid
        item
        md={6}
        display='flex'
        flexDirection='column'
        justifyContent='center'
      >
        {pasosn.map((paso) => (
          <Box
            xs={12}
            md={12}
            display='flex'
            key={paso.attributes.descripcionPaso}
          >
            <h3>{paso.attributes.descripcionPaso} </h3>
          </Box>
        ))}
      </Grid>
      <Grid
        item
        md={6}
        mt='2rem'
      >
        <Box>
          <Image  src={logo} alt='' width='600px' height='550px' />
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