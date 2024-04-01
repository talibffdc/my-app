import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container, Grid } from '@mui/material';

export default function Menu() {
  return (
    <>
    <Container sx={{mt:7}}>
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}> 
      <Box>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/images/2.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Made in Punjab
        </Typography>
        <Typography variant="body2" color="text.secondary">
        North Indian, Mughlai
        DLF Mall of India, Sector 18, Noida
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
        <Button size="Large">-</Button>
        <Button size="Large"> +</Button>
       
      </CardActions>
    </Card>
    </Box>
</Grid>

      <Grid item xs={12} md={4}><Box>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/images/1.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Gola Sizzlers - Naresh Gola
        </Typography>
        <Typography variant="body2" color="text.secondary">
        North Indian, Mughlai
        DLF Mall of India, Sector 18, Noida
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
        <Button size="Large">-</Button>
        <Button size="Large"> +</Button>
      </CardActions>
    </Card>

    </Box>
</Grid>

<Grid item xs={12} md={4}><Box>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/images/3.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Big Wong
        </Typography>
        <Typography variant="body2" color="text.secondary">
        North Indian, Mughlai
        DLF Mall of India, Sector 18, Noida
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
        <Button size="Large">-</Button>
        <Button size="Large"> +</Button>
      </CardActions>
    </Card>

    </Box>
</Grid>

    </Grid>
    </Container>

    
    <Container sx={{mt:7}}>
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}> 
      <Box>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/images/4.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Meal
        </Typography>
        <Typography variant="body2" color="text.secondary">
        North Indian, Mughlai
        DLF Mall of India, Sector 18, Noida
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
        <Button size="Large">-</Button>
        <Button size="Large"> +</Button>
      </CardActions>
    </Card>
    </Box>
</Grid>

      <Grid item xs={12} md={4}><Box>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/images/5.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Burger Meal
        </Typography>
        <Typography variant="body2" color="text.secondary">
        North Indian, Mughlai
        DLF Mall of India, Sector 18, Noida
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
        <Button size="Large">-</Button>
        <Button size="Large"> +</Button>
      </CardActions>
    </Card>

    </Box>
</Grid>

<Grid item xs={12} md={4}><Box>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/images/2.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Chhatt
        </Typography>
        <Typography variant="body2" color="text.secondary">
        North Indian, Mughlai
        DLF Mall of India, Sector 18, Noida
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
        <Button size="Large">-</Button>
        <Button size="Large"> +</Button>
      </CardActions>
    </Card>

    </Box>
</Grid>

    </Grid>
    </Container>

    
    
    

    </>
  );
}
