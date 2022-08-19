import React from 'react'
import { getSession } from "next-auth/react";
import { getCatalogue } from '../../services/catalogue.service';
import CardCar from '../../components/CarCard';
import { Grid } from '@mui/material';

const catalogo = ({ session, catalogue, error }) => {
  console.log(catalogue, error)
  return (
    <div>
      <h1 style={{
        width: "100%",
        textAlign: "center",
        padding: "10px 0"
      }}>
        Catalogo
      </h1>


      {error && (
        <div style={{ 
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}>
          <p style={{
            color: "white",
            width: "50%",
            padding: "10px 0",
            textAlign: "center",
            backgroundColor: "red",
            borderRadius: "10px"
          }}>
            Hubo un error al traer los datos
          </p>
        </div>
      )}
      {
        catalogue?.length > 0 && catalogue.map((car, index) => (
          <Grid container>
            <Grid item xs={10} md={3} >
              <CardCar key={index} />
            </Grid>
          </Grid>
        ))
      }
    </div>
  )
}

export const getServerSideProps = async ({ req }) => {
    const session = await getSession({ req });
    
    try {
      const data = await getCatalogue()
      return {
        props: {
          session,
          catalogue: data,
          error: false,
        },
      };
    }catch(err){
      return {
        props: {
          session,
          catalogue: [],
          error: true,
        },
      };
    }
    
};

export default catalogo