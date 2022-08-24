import React from 'react'
import { getSession } from "next-auth/react";
import { getCatalogue } from '../../services/catalogue.service';
import CardCar from '../../components/CarCard';
import { Alert, Grid } from '@mui/material';
import BasicModal from '../../components/Modal';

const catalogo = ({ session, catalogue, error }) => {
  const [open, setOpen] = React.useState(false);
  const [carSelect, setCarSelect] = React.useState({})
  const handleOpen = (car) => {
    setOpen(true)
    setCarSelect(car)
  };
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    if (session?.user && open) {
      Router.push('/agendavisita/${car.id}')
    }
  }, [])

  return (
    <>
      <BasicModal open={open} handleClose={handleClose} handleOpen={handleOpen} car={carSelect} session={session} />
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
          margin: "10px 0",
        }}>
          <Alert severity="error">Error al traer el catalogo!</Alert>
        </div>
      )}

      <Grid
        container
        justifyContent={"center"}
        spacing={2}
      >
        {
          catalogue?.length > 0 && catalogue.map((car, index) => (
            <Grid
              item
              xs={10}
              md={3}
              key={index}
              display="flex"
              justifyContent="center"
            >
              <CardCar car={car} handleOpen={handleOpen} />
            </Grid>
          ))
        }
      </Grid>

    </>
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

export default catalogo