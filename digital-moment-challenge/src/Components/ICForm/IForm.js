import React from 'react'
import { FormThemeProvider } from 'react-form-component'
import Form, {
    Input,
    Select,
    FormButton,
  } from 'react-form-component'

const IForm = () =>
    <Form fields={['i_name', 'i_description', 'type']}>
       <Input
            name='i_name'
            label='Name of the challenge'
        />
        <Text Area
            inlineLabel
            name='i_description'
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

export default IForm