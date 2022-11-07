import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const IForm = () =>
    <Form style={{width:"80%",paddingLeft:"10vh"}}>
        <Form.Group className="mb-3" controlId="i_title">
            <Form.Label>Title of your Idea</Form.Label>
            <Form.Control type="text" />
        </Form.Group><br/>

        <Form.Group className="mb-3" controlId="i_description">
            <Form.Label>Describe your Idea: What point are you trying to make ?</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group><br/>

        <Form.Select aria-label="i_locality">
            <option>To who do you want to broadcast it ?</option>
            <option value="world">The World</option>
            <option value="province">My Region</option>
            <option value="city">My City</option>
            <option value="neighbor">My Community</option>
        </Form.Select><br/>

        <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Share a file with the Team</Form.Label>
            <Form.Control type="file" size="sm" />
        </Form.Group><br/>

        <Button variant="primary" type="submit">
            Share
        </Button>
    </Form>

export default IForm