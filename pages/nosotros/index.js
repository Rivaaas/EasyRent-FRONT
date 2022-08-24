import { Box, Grid, styled } from '@mui/material'
import { flexbox } from '@mui/system';
import React from 'react'
import { getInfoNosotros } from '../../services/nostros.service';

const nosotros = ({ info, error }) => {

  const Informacion = styled('div')(({ theme }) => ({
    padding: '1rem',
    backgroundColor: '#eee',
    display: "flex",
    display: flexbox,
    width: '50%'
  }));

  const Foto = styled('div')(({ theme }) => ({
    padding: '1rem',
    backgroundColor: '#eee',
    display: flexbox,
    width: '50%'
  }));

  return (
    <Grid
      container
    >
      <Informacion
        xs={12}
        md={6}
      >
        {info.map((datos) => (
          <Box
            display='flex'
            justifyContent='center'
            flexDirection='column'
            alignItems='center'
          >
            <h1>{datos.attributes.titulo}</h1>
            <h2>{datos.attributes.descripcion}</h2>
          </Box>
        ))}
      </Informacion>
      <Foto
        xs={12}
        md={6}


      >
        <img src={`${process.env.URL_API_RENT}${info[0]?.attributes?.img?.data[0]?.attributes?.url}`} alt='' width='100px' height='100px' />
        <div>
          {
            error && (
              <div variant='outlined' severity="danger">
                No se pudo conectar
              </div>
            )
          }
        </div>
      </Foto>
    </Grid>
  )
}

export const getServerSideProps = async () => {
  try {
    const data = await getInfoNosotros()
    return {
      props: {
        info: data,
        error: false,
      },
    };
  } catch (err) {
    return {
      props: {
        info: [],
        error: true,
      },
    };
  }
}



export default nosotros
