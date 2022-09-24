import React, { useEffect } from 'react'
import { Alert, Button, Grid, styled } from '@mui/material'
import Formulario from '../../components/Formularios/FormularioReserva/index'
import FormularioGuardarAuto from '../../components/Formularios/FormularioGuardarAuto'
import { getSession } from 'next-auth/react'
import { signIn } from "next-auth/react";
import { getCar, getCatalogue } from '../../services/catalogue.service'


const agendarVisita = ({ car, error = false, session = {} }) => {


  console.log("AGENDAR VISITA", car)

  return (
    <Grid
      container
    >
      {error && (
        <div style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          margin: "10px 0",
        }}>
          <Alert severity="error">Error al traer el catalogo!</Alert>
        </div>
      )}
      <Grid
        item
        xs={12}
        md={6}
      >
        {
          !session ? (
            <Grid container alignItems={'center'} sx={{
              height: "100%"
            }}>
              <Grid item md={8} xs={12} display='flex' justifyContent='end'>
                <Button onClick={() => {
                  signIn();
                }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                  Entrar con Google
                </Button>
              </Grid>
            </Grid>
          ) : (
            <Formulario session={session} car={car}/>
          )
        }
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
      >
        <FormularioGuardarAuto car={car} />
      </Grid>
    </Grid>
  )
}

export const getServerSideProps = async ({ req, query }) => {
  const session = await getSession({ req });

  const { id } = query;

  try {
    const data = await getCar(id)
    console.log(data)
    return {
      props: {
        session,
        car: data,
        error: false,
      },
    };
  } catch (err) {
    return {
      props: {
        session,
        catalogue: [],
        error: true,
      },
    };
  }

};


export default agendarVisita