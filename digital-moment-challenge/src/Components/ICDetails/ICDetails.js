import React from "react";
import {ICTitle,ICDescription,styles} from "./ICDetailsElements";
import {CommentSection} from 'react-comments-section'
import 'react-comments-section/dist/index.css'

const ICDetails = ({item}) => {
    return (
        <>
            <div stye={styles}>
            <ICTitle>
                {item.title}
            </ICTitle>
            <ICDescription>
                {item.description}
            </ICDescription>
            <div>By: {item.UserID}</div>
            <div>Launched: {item.DatePosted}</div>
            </div>

            <CommentSection
                currentUser={null}
                commentData={this.state.data}
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