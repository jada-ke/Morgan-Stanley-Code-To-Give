import { useRef, useState, useEffect} from 'react';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        The Hub
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
var server = 'http://localhost:5001'
export default function SignUp() {

  const id ='DEFAULT';
    const [success, setSuccess] = useState(false);
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNum, setPhoneNum] = useState(0);
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [streetNum, setStreetNum] = useState(0);
    const [streetName, setStreetName] = useState(''); 
    const [postalCode, setPostalCode] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState(''); 
    const [country, setCountry] = useState(''); 

    var items = {
      "id": id,
      "email": email,
      "first_name": firstName,
      "last_name": lastName,
      "phone_num": phoneNum,
      "dob": dob,
      "gender": gender,
      "street_num": streetNum,
      "street_name": streetName,
      "postal_code": postalCode,
      "city": city,
      "province": province,
      "country": country
     }
     var user = {"username" : email,
              "password" : pwd,
              "role" : "user",
             "id" : id}

    const handleSubmit = async (e) => {
        e.preventDefault() ;
        
        await fetch(" ", {  // add fetch url
                  method: "POST" ,
                  headers: {
                        "Content-Type": "application/json",
                        "x-access-token": "token-value",
                      },
                      body: JSON.stringify(items)
                }).then( 
                 await fetch("", {  // add fetch url
                    method: "POST" ,
                    headers: {
                          "Content-Type": "application/json",
                          "x-access-token": "token-value",
                        },
                        body: JSON.stringify(user)
                  }).then(setSuccess(true))
                  

              )

    }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => setPwd(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="gender"
                  required
                  fullWidth
                  id="gender"
                  label="Gender"
                  onChange={(e) => setGender(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="dob"
                  label="Date of Birth (YYYY-MM-DD)"
                  name="dob"
                  onChange={(e) => setDob(e.target.value)}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="phonenumber"
                  required
                  fullWidth
                  id="phonenumber"
                  label="Phone number"
                  onChange={(e) => setPhoneNum(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  autoComplete="given-name"
                  name="streetnum"
                  required
                  fullWidth
                  id="stnum"
                  label="Street Number"
                  onChange={(e) => setStreetNum(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={9}>
                <TextField
                  required
                  fullWidth
                  id="streetname"
                  label="Street Name"
                  name="stname"
                  onChange={(e) => setStreetName(e.target.value)}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="postalcode"
                  required
                  fullWidth
                  id="postcode"
                  label="Postal Code"
                  onChange={(e) => setPostalCode(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="province"
                  label="Porvince"
                  name="porvince"
                  onChange={(e) => setProvince(e.target.value)}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="city"
                  required
                  fullWidth
                  id="ciry"
                  label="City"
                  onChange={(e) => setCity(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="country"
                  label="Country"
                  name="country"
                  onChange={(e) => setCountry(e.target.value)}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}


