import { useState, useRef, useEffect } from 'react';
import Comment from './comment';

const apiURL = 'https://crudcrud.com/api/91ba9e9f61e541de92c8e6d9b14465a5';

export default function CommentSection(props) {
    return (
        <div className='comment-section'>
            <Comment user="Username" text={asdfasdfasdfasdf} date={asdfasdfasdfasdfasdfa}/>
        </div>
    );
}