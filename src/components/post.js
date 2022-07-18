import { useEffect, useRef } from 'react';
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup"
import { Link } from 'react-router-dom';

const apiURL = 'https://crudcrud.com/api/91ba9e9f61e541de92c8e6d9b14465a5';

export default function Post(props) {

    const theImage = useRef(null);

    function deletePost() {
        fetch(apiURL + '/posts/' + props.postId, { method: 'DELETE' });
    }

    function toggleActive() {
        theImage.current.classList.toggle("is-active");
    }

    if(props.typeOfPost == 'img') {
        return (
            <div className="post">
                <Link to={"/posts/" + props.postId}>
                    <h2>{props.title}</h2>
                </Link>
                <img src={props.imgSrc} onClick={toggleActive} ref={theImage} id="image-element" />
                <div className="post-footer">
                <p>{props.text}</p>
                    <ButtonGroup>
                        <Button variant="secondary">Commments</Button>
                        <Button variant="secondary">Share</Button>
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
            <div className="post-footer">
                <ButtonGroup>
                    <Button variant="secondary">Commments</Button>
                    <Button variant="secondary">Share</Button>
                    <Button variant="danger" onClick={deletePost}>Delete</Button>
                </ButtonGroup>
            </div>
        </div>
    );
}