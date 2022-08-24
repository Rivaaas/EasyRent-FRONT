import React, { useEffect } from 'react'
import { Alert, Button, Grid, styled } from '@mui/material'
import Formulario from '../../components/Formularios/FormularioReserva/index'
import FormularioGuardarAuto from '../../components/Formularios/FormularioGuardarAuto'
import { getSession } from 'next-auth/react'

const agendarVisita = ({car, error= false, session = {}}) => {
  const { user = {} } = session;
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
                <Button>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                  Entrar con Google
                </Button>
              </Grid>
            </Grid>
          ) : (
            <Formulario user={user} />
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
  // const session = await getSession({ req });
  const session = true;
  const { id } = query;
  try {
    // const data = getCar(id);
    const data = {
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
  }
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
        car: {},
        error: true,
      },
    };
  }
}

export default agendarVisita
