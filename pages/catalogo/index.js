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
    if(session?.user && open){
      Router.push('/agendavisita/${car.id}')
    }
  },[])
  
  return (
    <>
      <BasicModal open={open} handleClose={handleClose} handleOpen={handleOpen} car={carSelect}  session={session}/>
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
    // const data = await getCatalogue()
    const data = [
      {
          "id": 1,
          "attributes": {
              "marca": "Chevrolet",
              "anio": 2020,
              "km": 20000,
              "informacion": "Muy lindo",
              "precio": "5000000",
              "disponibilidad": true,
              "createdAt": "2022-07-22T04:15:20.718Z",
              "updatedAt": "2022-08-23T18:02:25.243Z",
              "publishedAt": "2022-07-22T04:15:43.333Z",
              "imagen": {
                  "data": [
                      {
                          "id": 4,
                          "attributes": {
                              "name": "3.jpg",
                              "alternativeText": "3.jpg",
                              "caption": "3.jpg",
                              "width": 1440,
                              "height": 655,
                              "formats": {
                                  "thumbnail": {
                                      "name": "thumbnail_3.jpg",
                                      "hash": "thumbnail_3_f52925d94b",
                                      "ext": ".jpg",
                                      "mime": "image/jpeg",
                                      "path": null,
                                      "width": 245,
                                      "height": 111,
                                      "size": 8.49,
                                      "url": "/uploads/thumbnail_3_f52925d94b.jpg"
                                  },
                                  "large": {
                                      "name": "large_3.jpg",
                                      "hash": "large_3_f52925d94b",
                                      "ext": ".jpg",
                                      "mime": "image/jpeg",
                                      "path": null,
                                      "width": 1000,
                                      "height": 455,
                                      "size": 86.69,
                                      "url": "/uploads/large_3_f52925d94b.jpg"
                                  },
                                  "medium": {
                                      "name": "medium_3.jpg",
                                      "hash": "medium_3_f52925d94b",
                                      "ext": ".jpg",
                                      "mime": "image/jpeg",
                                      "path": null,
                                      "width": 750,
                                      "height": 341,
                                      "size": 54.77,
                                      "url": "/uploads/medium_3_f52925d94b.jpg"
                                  },
                                  "small": {
                                      "name": "small_3.jpg",
                                      "hash": "small_3_f52925d94b",
                                      "ext": ".jpg",
                                      "mime": "image/jpeg",
                                      "path": null,
                                      "width": 500,
                                      "height": 227,
                                      "size": 28.14,
                                      "url": "/uploads/small_3_f52925d94b.jpg"
                                  }
                              },
                              "hash": "3_f52925d94b",
                              "ext": ".jpg",
                              "mime": "image/jpeg",
                              "size": 142.24,
                              "url": "/uploads/3_f52925d94b.jpg",
                              "previewUrl": null,
                              "provider": "local",
                              "provider_metadata": null,
                              "createdAt": "2022-08-23T18:02:21.595Z",
                              "updatedAt": "2022-08-23T18:02:21.595Z"
                          }
                      }
                  ]
              }
          }
      },
      {
          "id": 2,
          "attributes": {
              "marca": "Nissan",
              "anio": 2020,
              "km": 200000,
              "informacion": "Camioneta",
              "precio": "200000",
              "disponibilidad": true,
              "createdAt": "2022-07-26T01:04:56.299Z",
              "updatedAt": "2022-08-23T18:02:44.172Z",
              "publishedAt": "2022-07-26T01:04:57.063Z",
              "imagen": {
                  "data": [
                      {
                          "id": 5,
                          "attributes": {
                              "name": "5.jpg",
                              "alternativeText": "5.jpg",
                              "caption": "5.jpg",
                              "width": 1280,
                              "height": 850,
                              "formats": {
                                  "thumbnail": {
                                      "name": "thumbnail_5.jpg",
                                      "hash": "thumbnail_5_8891d4e4ef",
                                      "ext": ".jpg",
                                      "mime": "image/jpeg",
                                      "path": null,
                                      "width": 235,
                                      "height": 156,
                                      "size": 10.71,
                                      "url": "/uploads/thumbnail_5_8891d4e4ef.jpg"
                                  },
                                  "large": {
                                      "name": "large_5.jpg",
                                      "hash": "large_5_8891d4e4ef",
                                      "ext": ".jpg",
                                      "mime": "image/jpeg",
                                      "path": null,
                                      "width": 1000,
                                      "height": 664,
                                      "size": 122.95,
                                      "url": "/uploads/large_5_8891d4e4ef.jpg"
                                  },
                                  "medium": {
                                      "name": "medium_5.jpg",
                                      "hash": "medium_5_8891d4e4ef",
                                      "ext": ".jpg",
                                      "mime": "image/jpeg",
                                      "path": null,
                                      "width": 750,
                                      "height": 498,
                                      "size": 77.34,
                                      "url": "/uploads/medium_5_8891d4e4ef.jpg"
                                  },
                                  "small": {
                                      "name": "small_5.jpg",
                                      "hash": "small_5_8891d4e4ef",
                                      "ext": ".jpg",
                                      "mime": "image/jpeg",
                                      "path": null,
                                      "width": 500,
                                      "height": 332,
                                      "size": 39,
                                      "url": "/uploads/small_5_8891d4e4ef.jpg"
                                  }
                              },
                              "hash": "5_8891d4e4ef",
                              "ext": ".jpg",
                              "mime": "image/jpeg",
                              "size": 166.73,
                              "url": "/uploads/5_8891d4e4ef.jpg",
                              "previewUrl": null,
                              "provider": "local",
                              "provider_metadata": null,
                              "createdAt": "2022-08-23T18:02:42.005Z",
                              "updatedAt": "2022-08-23T18:02:42.005Z"
                          }
                      }
                  ]
              }
          }
      },
      {
          "id": 3,
          "attributes": {
              "marca": "Audi",
              "anio": 2020,
              "km": 10000,
              "informacion": "Muy weno",
              "precio": "5000",
              "disponibilidad": false,
              "createdAt": "2022-08-20T00:59:49.957Z",
              "updatedAt": "2022-08-23T18:03:01.652Z",
              "publishedAt": "2022-08-20T00:59:50.580Z",
              "imagen": {
                  "data": [
                      {
                          "id": 6,
                          "attributes": {
                              "name": "8.jpg",
                              "alternativeText": "8.jpg",
                              "caption": "8.jpg",
                              "width": 640,
                              "height": 360,
                              "formats": {
                                  "thumbnail": {
                                      "name": "thumbnail_8.jpg",
                                      "hash": "thumbnail_8_df15f18cc5",
                                      "ext": ".jpg",
                                      "mime": "image/jpeg",
                                      "path": null,
                                      "width": 245,
                                      "height": 138,
                                      "size": 8.22,
                                      "url": "/uploads/thumbnail_8_df15f18cc5.jpg"
                                  },
                                  "small": {
                                      "name": "small_8.jpg",
                                      "hash": "small_8_df15f18cc5",
                                      "ext": ".jpg",
                                      "mime": "image/jpeg",
                                      "path": null,
                                      "width": 500,
                                      "height": 281,
                                      "size": 23.22,
                                      "url": "/uploads/small_8_df15f18cc5.jpg"
                                  }
                              },
                              "hash": "8_df15f18cc5",
                              "ext": ".jpg",
                              "mime": "image/jpeg",
                              "size": 32.36,
                              "url": "/uploads/8_df15f18cc5.jpg",
                              "previewUrl": null,
                              "provider": "local",
                              "provider_metadata": null,
                              "createdAt": "2022-08-23T18:02:59.558Z",
                              "updatedAt": "2022-08-23T18:02:59.558Z"
                          }
                      }
                  ]
              }
          }
      }
  ]
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