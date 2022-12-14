import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { getImage } from '../../utils/getImage';
import { Grid, Button } from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CarCard({ car, handleOpen }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const mapperAvailable = car?.attributes?.disponibilidad ? 'Disponible' : 'No Disponible'




  return (
    <Card sx={{ maxWidth: 345, minWidth: 300, marginBottom: '2rem' }}>
      <CardHeader
        subheader={mapperAvailable}
      />
      <CardMedia
        component="img"
        height="194"
        src={getImage(car)}
        alt="Paella dish"
      />
      <CardContent>
        <Grid container spacing={1} justifyContent='center' >
          <Grid item xs={12} >
            <Typography
              sx={{
                fontSize: "12px",
                justifyContent: 'center'
              }}
            >
              {car?.attributes?.marca}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#CF7500",
                fontWeight: 'bold'
              }}
            >
              <a>$</a>{car?.attributes?.precio}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} >
            {car?.attributes?.disponibilidad ? (
              <Button onClick={() => handleOpen(car)}>
                <Typography
                  sx={{
                    fontSize: "17px",
                  }}
                >
                  Reservar
                </Typography>
              </Button>
            ) : (
              <p>No disponible</p>
            ) }

          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
