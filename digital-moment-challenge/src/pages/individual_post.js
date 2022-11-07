
import React, {useState} from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const individualPost = () => {
    return (
        <Card bg = "dark" border="dark" style={{ width: '80%',  marginLeft:'auto', marginRight: 'auto', borderRadius: '10px'}}>
                <Card.Header><h1>Post Name</h1></Card.Header>
                <Card.Subtitle className="mb-2 text-muted">Username and Topic, Location</Card.Subtitle>
                <Card.Body> 
                    <Card.Text>Submission Text</Card.Text>Submission Text
                </Card.Body>
                <Card.Footer>
                    <>
                        <Button variant="primary" size="sm" as="input" type="button" value="Input"> Upvote </Button>
                        <Button variant="primary" size="sm" as="input" type="button" value="Input"> Downvote </Button>
                    </>
                </Card.Footer>
        </Card>
    );
}

export default individualPost;