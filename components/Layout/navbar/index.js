import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link as MaterialLink } from '@mui/material'
import { signIn, signOut } from "next-auth/react";


const pages = ['Catalogo', 'Nosotros', 'Contacto'];


const logo = 'https://previews.123rf.com/images/helloweenn/helloweenn1612/helloweenn161200021/67973090-alquiler-de-coches-plantilla-de-dise%C3%B1o-del-logotipo-eps-10.jpg'

const ResponsiveAppBar = ({ session = {} }) => {
  const { user: { name = 'L', image = '' } = {} } = session

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#F0A500',
      },
    },

  });


  const appBarDatos = [{
    image: 'urlimage',
    page: '/home',
    items: [{
      page: '/catalogo',
      text: 'CATALOGO'
    },
    {
      page: '/nosotros',
      text: 'NOSOTROS'
    },
    {
      page: '/comofunciona',
      text: 'COMO FUNCIONA'
    }
    ]
  }]


  return (

    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link href='/home'>
              <img
                src={logo}
                alt=""
                width="70px"
                height="70px"
                href=""
              />
            </Link>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >

            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {appBarDatos.map(({ image, items, page }, index) => (
                  <Box key={index}>
                    {items.map(({ text, page }, i) => (
                      <MenuItem key={i} onClick={handleCloseNavMenu}>
                        <Link href={page}><Typography textAlign="center">{text}</Typography></Link>
                      </MenuItem>
                    ))}
                  </Box>
                ))}
              </Menu>
            </Box>
            {/* VISTA PC */}

            {appBarDatos.map(({ page, items }, index) => (
              <Box key={index} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {items.map(({ text, page }, i) => (
                  <Box key={page}>
                    <Link href={page} ><Button variant="danger">{text}</Button></Link>
                  </Box>
                ))}
              </Box>
            ))}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar src={image} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  {session.user ? (
                    <Button onClick={(e) => {
                      e.preventDefault();
                      signOut();
                    }}>
                      <a>Sign Out</a>
                    </Button>
                  ) : (
                    <Button onClick={(e) => {
                      e.preventDefault();
                      signIn();
                    }}>
                      <a>Sign in</a>
                    </Button>
                  )}
                </MenuItem>

                {/* <MenuItem onClick={handleCloseUserMenu}>
                  <Button onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}>
                    <a>Log Out</a>
                  </Button>
                </MenuItem> */}


              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider >

  );
};

export default ResponsiveAppBar;
