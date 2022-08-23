import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { signIn } from 'next-auth/react';
import { Router } from 'next/router';

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

export default function BasicModal({handleClose, handleOpen, open, car, session}) {

  const inicia = () => {
    const inicio = signIn();
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
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ justifyContent:'center'}} >
            {car?.attributes?.marca}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, justifyContent: 'center' , display: 'flex' }}>
          <btn>
              <span>Ir al sitio</span>
            </btn>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
