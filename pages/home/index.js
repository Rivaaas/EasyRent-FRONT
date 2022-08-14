import React from 'react'
import { Container, styled } from '@mui/material'

const Home = () => {


  const ContainerIframe = styled('div')(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    width: '100 %',
    paddingTop: '56.25 %',

  }))

  return (


    <ContainerIframe>
      <iframe width="1300" height="580"
        src="https://www.youtube.com/embed/RbLh7r0qlt0"
        title="YouTube video player" frameborder="0"
        allow="  accelerometer;clipboard-write;
     encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    </ContainerIframe>
  )
}

export default Home
