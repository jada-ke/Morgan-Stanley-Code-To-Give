import IForm from '../Components/ICForm/IForm'
import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
const Ideas = () => {
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
            <TipsAndUpdatesIcon />
          </Avatar>
          <Typography component="h1" variant="h4">
          Share an Idea with your community or the World
                    </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <IForm/>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
            
        </>
        
    );
};

export default Ideas;