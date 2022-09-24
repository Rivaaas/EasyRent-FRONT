import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { TextField, Grid, styled, Button, Modal, Box, Typography } from '@mui/material'
import { postReserve } from '../../../services/reserve.service'
import { Router } from '@mui/icons-material'
import { useRouter } from 'next/router'
<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />


const imagecheck = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/800px-Yes_Check_Circle.svg.png'

const Formulario = ({ session = {}, car = {} }) => {
  const { user = {} } = session
  const router = useRouter()

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    router.push('/catalogo')
  }



  const [data, setData] = useState({
    nombre: '',
    rut: '',
    telefono: '',
    correo: ''
  })

  const FormularioForma = styled('div')(({ theme }) => ({
    width: '100%',
    padding: '6rem',
    backgroundColor: '#eee'
  }));


  const Input = styled('input')(({ theme }) => ({
    width: '80%',
    height: '50px',
    margin: '10px',
    borderRadius: '6px'
  }));

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      data: {
        fecha: new Date().toLocaleDateString(),
        users_permissions_user: session.id,
        auto: car.id,
        telefono: data.telefono,
        correo: data.correo,
        rut: data.rut
      }
    }
    const response = await postReserve(body, session.jwt)

    console.log("response", response)
    if (!response) {
      handleOpen(true) //error
    } else {
      handleOpen(true) //todo ok

    }

  }




  const ButtonStyledx = styled('button')(({ theme }) => ({
    padding: '15px 25px',
    border: 'unset',
    borderRadius: '15px',
    color: '#212121',
    zIndex: '1',
    background: '#e8e8e8',
    position: 'relative',
    fontWeight: '1000',
    fontSize: '17px',
    webkitBoxShadow: '4px 8px 19px -3px rgba(0,0,0,0.27)',
    boxShadow: '4px 8px 19px -3px rgba(0,0,0,0.27)',
    transition: 'all 250ms',
    overflow: 'hidden',
    ':before': {
      position: 'absolute',
      top: '0',
      left: '0',
      height: '100 %',
      width: '0',
      borderRadius: '15px',
      backgroundColor: '#212121',
      webkitBoxShadow: ' 4px 8px 19px - 3px rgba(0, 0, 0, 0.27)',
      boxShadow: '4px 8px 19px - 3px rgba(0, 0, 0, 0.27)',
      transition: 'all 250ms',
    }
  }))


  useEffect(() => {
    if (user) {
      setData({
        ...data,
        nombre: user.name,
        correo: user.email
      })
    }
  }, [session])


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Grid component='Form' id='formulario' type='submit' onSubmit={handleSubmit}>
        <Grid container spacing={2} mt='3rem' justifyContent='center'>
          <Grid item md={8}>
            <TextField
              name='nombre'
              color="secondary"
              value={user.name}
              fullWidth
              onChange={handleChange}
              disabled

            />

          </Grid>
          <Grid item md={8}>
            <TextField
              label="Rut"
              name='rut'
              color="secondary"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={8}>
            <TextField
              label="Telefono"
              name='telefono'
              color="secondary"
              fullWidth
              onChange={handleChange}

            />
          </Grid>
          <Grid item md={8}>
            <TextField
              name='correo'
              color="secondary"
              value={user.email}
              fullWidth
              disabled
              onChange={handleChange}
            />
          </Grid>
          <Grid md={12} xs={12} marginTop={2} justifyContent='center' display='flex'>

            <ButtonStyledx type="submit" >
              Reservar
            </ButtonStyledx>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  SE HA GENERADO LA RESERVA CON EXITO
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  se comunicaran contigo a la brevedad.
                </Typography>
                <Box justifyContent="center" display='flex' mt='1rem'  >
                  <img
                    src={imagecheck}
                    alt=""
                    width="70px"
                    height="70px"
                    href=""
                  />
                </Box>
              </Box>
            </Modal>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}



export default Formulario



