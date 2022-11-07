import React , { useRef, useState, useEffect}from "react";
import { useParams } from 'react-router-dom';
import {ICTitle,ICDescription,styles} from "../Components/ICDetails/ICDetailsElements";
import {CommentSection} from 'react-comments-section'
import 'react-comments-section/dist/index.css'
import Card from 'react-bootstrap/Card';
import Chip from '@mui/material/Chip';
var server = 'http://localhost:5001'




const ICDetails = () => {
    const  id  = useParams().id;
    const  type  = useParams().type;
    const [item, setItem] = useState({});
    
    useEffect(() => {

         fetch(server+`/Idea/${id}`, { method: "GET" })
            .then(res => res.json())
            .then(
            (result) => {
                
                setItem(result);
            }
            )
      }, []);
    //item.dateposted= item.dateposted.split("T")[0];
    // async function getData(id) {
    //     await fetch(server+`/Idea/${id}`, { method: "GET" })
    //             .then(res => res.json())
    //             .then(
    //             (result) => {
                    
    //                 return result;
    //             }
    //             )
    // }
    // if(type=="idea"){
    //     const response = await fetch('server+`/Idea/${id}');
    //     const movies = await response.json()
    //         fetch(server+`/Idea/${id}`, { method: "GET" })
    //         .then(res => res.json())
    //         .then(
    //         (result) => {
                
    //             setItem(result);
    //         }
    //         )
    // }
    
    return (
        <>
        
        <Card className="m-3">
            <Card.Header as="h5"> 
            <   div class="row" >
                    <div class="col-md-10 text-left">
                    {item.title}
                    </div>
                    <div class="col-md-2 text-right">
                    <Chip label={item.tag} variant="outlined" />
                    </div>
                </div> </Card.Header>
            <Card.Body>
              
              <Card.Text>
              
              <div className="mt-3">
              {item.description}
              </div>
              
              </Card.Text>
              
            </Card.Body>
            <Card.Footer className="">
            <   div class="row" >
                    <div class="col-md-3 text-left">
                        By: {item.userid}
                    </div>
                    <div class="col-md-3 text-left">
                     Posted: {item.dateposted}
                    </div>
                    <div class="col-md-3 text-left">
                     City: {item.city}
                    </div>
                    <div class="col-md-3 text-left">
                     Country: {item.country}
                    </div>
                </div>
                </Card.Footer>
          </Card>

            <CommentSection
                currentUser={null}
                commentData={null}
                onSubmitAction={(data) => this.onSubmitAction(data)}
                customNoComment={() => <div className='no-com'>No comments yet...</div>}
                logIn={{
                loginLink: 'http://localhost:3001/signin',
                signupLink: 'http://localhost:3001/signup'
                }}
            />
        </>
    )
}

export default ICDetails