import { Box, Grid, Paper, styled, Typography, Link as MaterialLink } from '@mui/material'
import Link from 'next/link'
import React from 'react'


const colFooter = [
  {
    title: 'Redes Sociales',
    items: [
      {
        page: 'https://instagram.com',
        text: 'Instagram'
      },
      {
        page: 'https://facebook.com',
        text: 'Facebook'
      },
    ],
  },
  {
    title: 'Navegación',
    items: [
      {
        page: '/',
        text: 'Home'
      },
      {
        page: '/catalogo',
        text: 'Catalogo'
      }
    ],
  }
]

const LinkText = styled(MaterialLink)(({ theme }) => ({
  ...theme.typography.body2,
  color: '#000',
  textDecoration: 'none',
  cursor: 'pointer'
}));
 


export default function Footer() {
  return (
      <Grid container columns={{ xs: 4, sm: 8, md: 12}} sx={{backgroundColor:'#F0A500', position:'absolute'}}>
        {colFooter.map(({ items, title }, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box
              display={"flex"}
              flexDirection="column"
              px={3}
              alignItems='center'
            >
              <Typography variant='h5'>{title}</Typography>
              <Box>
                {items.map(({ page, text }, i) => (
                  <Box display='flex' justifyContent='center' key={i}>
                    <Link href={page}>
                      <LinkText>{text}</LinkText>
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        ))}
        <Grid item xs={12} sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 0
        }}>
          <Typography>Todos los derechos reservados</Typography>
        </Grid>
      </Grid>
  )
}