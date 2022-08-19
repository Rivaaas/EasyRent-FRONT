import { Alert, Grid, styled } from '@mui/material'
import { flexbox } from '@mui/system';
import React from 'react'
import { getInfoNosotros } from '../../services/nostros.service';

const nosotros = ({info, error}) => {

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
        <h1>{info?.title}</h1>
        <h3>Queremos ser los mejores gestores de inteligencia
          en la movilidad para todos los que desean moverse
          de forma eficiente e inteligente. Entregando
          opciones para crear un sistema de transporte
          económico, practico y social para los habitantes
          de la ciudad.</h3>
        <h1>Visión</h1>
        <h3>Queremos convertirnos en líderes de la industria
          de ride-hailing en América Latina siendo los mejores
          exponentes gracias a nuestra búsqueda por
          construir smart cities, incentivando la intermovilidad
          de nuestros usuarios para así eliminar cada vez
          más vehículos particulares por cada vehículo compartido.
          Estamos comprometidos con las ciudades donde estamos
          presentes y por sobre todo con nuestros usuarios.</h3>
      </Informacion>
      <Foto
        xs={12}
        md={6}


      >
        <h1>FOTO</h1>
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
  }catch(err){
    return {
      props: {
        info: [],
        error: true,
      },
    };
  }
}

export default nosotros
