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
            key={datos.attributes.titulo}
          >
            <h1>{datos.attributes.titulo}</h1>
            <p>{datos.attributes.descripcion}</p>
          </Box>
        ))}
      </Informacion>
      <Foto
        xs={12}
        md={6}
      >
        <img src={`http://localhost:1337${info[0]?.attributes?.img?.data[0]?.attributes?.url}`} alt='' width='600px' height='500px' />
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
