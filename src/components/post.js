import { useState, useRef, useEffect } from 'react';

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Form from 'react-bootstrap/Form';

import { Link } from 'react-router-dom';

const apiURL = 'https://crudcrud.com/api/91ba9e9f61e541de92c8e6d9b14465a5';

export default function Post(props) {

    const theImage = useRef(null);

    const theTitle = useRef(null);
    const theText = useRef(null);
    const theUrl = useRef(null);

    const [typeOfPost, setTypeOfPost] = useState("");
    const [alreadySaved, setAlreadySaved ] = useState(false);

    const [commentArray, setCommentArray] = useState([]); // I didn't get to this part

    // const [titleText, setTitleText] = useState("");
    // const [textText, setText] = useState("");
    // const [urlText, setUrlText] = useState("");

    useEffect( () => {
        setTypeOfPost(props.typeOfPost);
    }, []);

    function deletePost() {
        fetch(apiURL + '/posts/' + props.postId, { method: 'DELETE' });
    }

    function toggleActive() {
        theImage.current.classList.toggle("is-active");
    }

    function submitEdit() {
        let date = new Date();
        let dateString = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + " " + date.getHours() + ":" + ((date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes());
        if(typeOfPost == "edit-txt") {
            fetch(apiURL + '/posts/' + props.postId, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    type: "text",
                    title: theTitle.current.value,
                    text: theText.current.value,
                    date: "Edited: " + dateString
                })
            });
            setTypeOfPost('txt');
        }
        if(typeOfPost == "edit-img") {
            fetch(apiURL + '/posts/' + props.postId, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    type: "img",
                    title: theTitle.current.value,
                    text: theText.current.value,
                    url: theUrl.current.value,
                    date: "Edited: " + dateString
                })
            });
            setTypeOfPost('txt');
        }
        
    }

    function savePost() {
        let savedPostArray = [];
        //get all the saved posts
        fetch(apiURL + '/saved-posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then( res => res.json() )
            .then( res => savedPostArray = res )
            .catch( err => console.error(err) );
        //go through and check if the post is already saved
        for(let i = 0; i < savedPostArray.length; i++) {
            if(props.postId == savedPostArray[i].savedPostId) {
                setAlreadySaved(true);
            }
        }

        //save the post if not already saved
        if(!alreadySaved) {
            fetch(apiURL + '/saved-posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    savedPostId: props.postId
                })
            })
                .then( res => res.json() )
                .then( res => console.log(res) )
                .catch( err => console.error(err) )
        } else {
            console.log("This post is already saved.");
        }
        
    }

    if(typeOfPost == 'edit-img') {
        return (
            <div className="post">
                <Form.Control ref={theTitle} defaultValue={props.title} />
                <img src={props.imgSrc} onClick={toggleActive} ref={theImage} id="image-element" />
                <Form.Control ref={theUrl} defaultValue={props.imgSrc} />
                <div className="post-footer">
                <Form.Control ref={theText} defaultValue={props.text} rows={3} />
                <p className='post-date'>{props.date}</p>
                    <ButtonGroup>
                        <Button variant="secondary">Comments</Button>
                        <Button variant="secondary" onClick={savePost}>Save</Button>
                        <Button variant="primary" onClick={submitEdit}>Submit Edit</Button>
                        <Button variant="danger" onClick={deletePost}>Delete</Button>
                    </ButtonGroup>
                </div>
            </div>
        )
    }

    if(typeOfPost == 'edit-txt') {
        return (
            <div className="post">
                <Form.Control ref={theTitle} defaultValue={props.title} />
                <Form.Control ref={theText} defaultValue={props.text} rows={3} />
                <p className='post-date'>{props.date}</p>
                <div className="post-footer">
                    <ButtonGroup>
                        <Button variant="secondary">Comments</Button>
                        <Button variant="secondary" onClick={savePost}>Save</Button>
                        <Button variant="primary" onClick={submitEdit}>Submit Edit</Button>
                        <Button variant="danger" onClick={deletePost}>Delete</Button>
                    </ButtonGroup>
                </div>
            </div>
        );
    }

    if(typeOfPost == 'img') {
        return (
            <div className="post">
                <Link to={"/posts/" + props.postId}>
                    <h2>{props.title}</h2>
                </Link>
                <img src={props.imgSrc} onClick={toggleActive} ref={theImage} id="image-element" />
                <div className="post-footer">
                <p>{props.text}</p>
                <p className='post-date'>{props.date}</p>
                    <ButtonGroup>
                        <Button variant="secondary">Comments</Button>
                        <Button variant="secondary" onClick={savePost}>Save</Button>
                        <Button variant="secondary" onClick={() => setTypeOfPost('edit-img')}>Edit</Button>
                        <Button variant="danger" onClick={deletePost}>Delete</Button>
                    </ButtonGroup>
                </div>
            </div>
        )
    }
    return (
        <div className="post">
            <Link to={"/posts/" + props.postId}>
                <h2>{props.title}</h2>
            </Link>
            <p>{props.text}</p>
            <p className='post-date'>{props.date}</p>
            <div className="post-footer">
                <ButtonGroup>
                    <Button variant="secondary">Comments</Button>
                    <Button variant="secondary" onClick={savePost}>Save</Button>
                    <Button variant="secondary" onClick={() => setTypeOfPost('edit-txt')}>Edit</Button>
                    <Button variant="danger" onClick={deletePost}>Delete</Button>
                </ButtonGroup>
            </div>
        </div>
    );
}