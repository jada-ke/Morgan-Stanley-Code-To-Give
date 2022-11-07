import React, {useState} from 'react';
import CForm from '../Components/ICForm/CForm'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Challenges = () => {
    const handleSubmit = (event) => {
        
      };
    const theme = createTheme();
    return (
        <>
        <ThemeProvider theme={theme}>
      <Container component="main" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <EmojiEventsIcon />
          </Avatar>
          <Typography component="h1" variant="h3">
          Let's launch a new Challenge!
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <CForm/>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
        
        </>
    );
};

export default Challenges;