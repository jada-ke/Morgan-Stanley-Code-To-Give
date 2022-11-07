import React from 'react'
import { FormThemeProvider } from 'react-form-component'
import Form, {
    Input,
    Select,
    Text,
    FormButton,
  } from 'react-form-component'

const CForm = () =>
    <Form fields={['c_name', 'c_description', 'type']}>
        <Input
            name='c_name'
            label='Name of the challenge'
        />
        <Text Area
            inlineLabel
            name='c_description'
            label='Describe your challenge: what goals do you want to see achieved ?'
        />
        <Select
          name='type'
          label='Type of a user'
          options={['Viewer', 'Moderator', 'Admin']}
        />
        <FormButton
            onClick={fields => console.log(fields)}
        >Save</FormButton>
    </Form>

export default CForm