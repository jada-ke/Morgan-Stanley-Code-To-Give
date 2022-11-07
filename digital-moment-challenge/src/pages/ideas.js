import { FormThemeProvider } from 'react-form-component'
import CForm from '../Components/ICForm/CForm'
import React, {useState} from 'react';

const Ideas = () => {
    return (
        <>
            <h1>Share an Idea with your community or the World</h1><br />
            <FormThemeProvider>
                <CForm />
            </FormThemeProvider>
        </>
        
    );
};

export default Ideas;