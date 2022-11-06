import React from "react";
import {ICTitle,ICDescription} from "./ICDetailsElements";
import {CommentSection} from 'react-comments-section'
import 'react-comments-section/dist/index.css'

const ICDetails = ({item}) => {
    customNoComment = () => <div className='no-com'>No comments yet...</div>
    return (
        <>
            <ICTitle>
                {item.title}
            </ICTitle>
            <ICDescription>
                {item.description}
            </ICDescription>
            <div>By: {item.UserID}</div>

            <CommentSection
                currentUser={null}
                commentData={this.state.data}
                onSubmitAction={(data) => this.onSubmitAction(data)}
                customNoComment={() => this.customNoComment()}
                logIn={{
                loginLink: 'http://localhost:3001/signin',
                signupLink: 'http://localhost:3001/signup'
                }}
            />
        </>
    )
}

export default ICDetails