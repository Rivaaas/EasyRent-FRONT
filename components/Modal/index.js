import * as React from 'react';
import { Box, Typography, Modal, Grid } from '@mui/material';
import { signIn } from 'next-auth/react';
import { Router, useRouter } from 'next/router';
import { styled } from '@mui/material';

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

const ButtonStyled = styled('button')(({ theme }) => ({
  padding: '1.3em 3em',
  fontSize: '12px',
  textTransform: 'uppercase',
  letterSpacing: '2.5px',
  fontWeight: '500',
  color: '#000',
  backgroundColor: '#fff',
  border: 'none',
  borderRadius: '45px',
  boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease 0s',
  cursor: 'pointer',
  outline: 'none',
  ':hover': {
    backgroundColor: '#ffae00',
    boxShadow: '0px 15px 20px rgba(255, 229, 60, 0.4)',
    color: '#fff',
    transform: 'translateY(-7px)',
  },
  ':active': {
    transform: 'translateY(-1px)',
  }
}))

export default function BasicModal({ handleClose, handleOpen, open, car, session }) {
  const router = useRouter();


  const handleClickIrAlSitio = () => {
    router.push(`/agendarVisita/${car?.id}`)
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ justifyContent: 'center' }} >
                {car?.attributes?.marca}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ justifyContent: 'center' }} >
                {car?.attributes?.informacion}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2, justifyContent: 'center', display: 'flex' }}>
                <ButtonStyled onClick={handleClickIrAlSitio}>
                  Ir al sitio
                </ButtonStyled>
              </Typography>
            </Box>
      </Modal>
    </div>
  );
}
