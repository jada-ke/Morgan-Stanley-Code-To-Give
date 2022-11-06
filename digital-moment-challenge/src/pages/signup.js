import React from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card'





const Signup = () => {

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
    

    <>
    {success? (

    <Navigate to={`/`} replace={true} /> // send to ?
    ) : (
      <>
      <br></br>
<Card border="dark" style={{ width: '30%',  marginLeft:'auto', marginRight: 'auto', borderRadius: '12px'}}>
                <Card.Header><h1>Sign Up</h1></Card.Header>
                <Card.Body>
      <div style={{ margin: '.5rem' , alignContent : 'end'}} >
      
      <form onSubmit={handleSubmit}  >
          <label htmlFor="email" style={{ margin: '.5rem' }}>Username:</label>
                      <input type="text"
                      id='email'
                      autoComplete ='off'
                      onChange={(e) => setEmail(e.target.value)}
                      value = {email}
                      required  
          />
          <br />

          <label htmlFor="password" style={{ margin: '.5rem' }}>Password:</label>
                      <input type="password"
                      id='password'
                      autoComplete ='off'
                      onChange={(e) => setPwd(e.target.value)}
                      value = {pwd}
                      required  
          />
          <br />

          <label htmlFor="firstName" style={{ margin: '.5rem' }}>firstName:</label>
                      <input type="text"
                      id='firstName'
                      autoComplete ='off'
                      onChange={(e) => setFirstName(e.target.value)}
                      value = {firstName}
                      required  
          />
          <br />
          <label htmlFor="lastName" style={{ margin: '.5rem' }}>lastName:</label>
                      <input type="text"
                      id='lastName'
                      autoComplete ='off'
                      onChange={(e) => setLastName(e.target.value)}
                      value = {lastName}
                      required  
          />
          <br />
          
          
          <label htmlFor="phoneNum" style={{ margin: '.5rem' }}>phoneNum:</label>
                      <input type="number"
                      id='phoneNum'
                      autoComplete ='off'
                      onChange={(e) => setPhoneNum(e.target.value)}
                      value = {phoneNum}
                      required  
          />
          <br />
          
         {/* Add date picker */}

          <br />
          <label htmlFor="gender" style={{ margin: '.5rem' }}>gender:</label>
                      <input type="text"
                      id='gender'
                      autoComplete ='off'
                      onChange={(e) => setGender(e.target.value)}
                      value = {gender}
                      required  
          />
          <br />
          <label htmlFor="streetNum" style={{ margin: '.5rem' }}>streetNum:</label>
                      <input type="number"
                      id='streetNum'
                      autoComplete ='off'
                      onChange={(e) => setStreetNum(e.target.value)}
                      value = {streetNum}
                      required  
          />
          <br />
          <label htmlFor="streetName" style={{ margin: '.5rem' }}>streetName:</label>
                      <input type="text"
                      id='streetName'
                      autoComplete ='off'
                      onChange={(e) => setStreetName(e.target.value)}
                      value = {streetName}
                      required  
          />
          <br />
          <label htmlFor="postalCode" style={{ margin: '.5rem' }}>postalCode:</label>
                      <input type="text"
                      id='postalCode'
                      autoComplete ='off'
                      onChange={(e) => setPostalCode(e.target.value)}
                      value = {postalCode}
                      required  
          />
          <br />
          <label htmlFor="city" style={{ margin: '.5rem' }}>city:</label>
                      <input type="text"
                      id='city'
                      autoComplete ='off'
                      onChange={(e) => setCity(e.target.value)}
                      value = {city}
                      required  
          />
          <br />
          <label htmlFor="province" style={{ margin: '.5rem' }}>province:</label>
                      <input type="text"
                      id='province'
                      autoComplete ='off'
                      onChange={(e) => setProvince(e.target.value)}
                      value = {province}
                      required  
          />
          <br />

          <label htmlFor="country" style={{ margin: '.5rem' }}>country:</label>
                      <input type="text"
                      id='country'
                      autoComplete ='off'
                      onChange={(e) => setCountry(e.target.value)}
                      value = {country}
                      required  
          />
          <br />

          <button>
              Sign Up
          </button>
      </form>
     
  </div>
  </Card.Body>
            </Card></>
    )}
  
  </>





    
  )
}

export default Signup
