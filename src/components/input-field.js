import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Redirect } from 'react-router-dom';

const apiURL = 'https://crudcrud.com/api/91ba9e9f61e541de92c8e6d9b14465a5';

export default class InputField extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            redirect: <></>
        };
        this.submitPost = this.submitPost.bind(this);
        this.theTitle = React.createRef();
        this.theText = React.createRef();
    }

    submitPost() {
        fetch(apiURL + '/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.theTitle.current.value,
                text: this.theText.current.value
            })
        });
        this.setState({redirect: <Redirect to="/" />});
    }

    render(){
        return (
            <div className='input-field'>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control ref={this.theTitle} placeholder="An interesting title" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label >Text</Form.Label>
                        <Form.Control ref={this.theText} as="textarea" placeholder="..." rows={3} />
                    </Form.Group>
                </Form>
                <Button onClick={this.submitPost}>Submit</Button>
                {this.state.redirect}
            </div>
        );
    }
}