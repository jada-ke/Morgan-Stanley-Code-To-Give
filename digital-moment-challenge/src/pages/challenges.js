import React, {useState} from 'react';
import { FormThemeProvider } from 'react-form-component'
import CForm from '../Components/ICForm/CForm'

const Challenges = () => {
    return (
        <>
        <h1>Let's launch a new Challenge!</h1>
        <br/>
        <FormThemeProvider>
            <CForm/>
        </FormThemeProvider></>
    );
};

export default Challenges;