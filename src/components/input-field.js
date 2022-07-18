import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Redirect } from 'react-router-dom';

const apiURL = 'https://crudcrud.com/api/91ba9e9f61e541de92c8e6d9b14465a5';

export default class InputField extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            redirect: <></>,
            textPost: true
        };
        this.submitPost = this.submitPost.bind(this);
        this.switchInput = this.switchInput.bind(this);
        this.theTitle = React.createRef();
        this.theText = React.createRef();
        this.theURL = React.createRef();
    }

    submitPost() {
        fetch(apiURL + '/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                type: (this.state.textPost ? "img" : "text"),
                title: this.theTitle.current.value,
                text: this.theText.current.value,
                url: this.theURL.current.value
            })
        });
        this.setState({redirect: <Redirect to="/" />});
    }

    switchInput() {
        if(this.state.textPost) {
            this.setState({textPost: false});
        } else {
            this.setState({textPost: true});
        }
        console.log(this.state.textPost)
    }

    render(){
        if(this.state.textPost){
            return (
                <div className='input-field'>
                    <div className='input-buttons'>
                        <button onClick={this.switchInput} className={this.state.textPost ? 'input-button' : 'input-button is-active'}>Text</button>
                        <button onClick={this.switchInput} className={this.state.textPost ? 'input-button is-active' : 'input-button'}>Image</button>
                    </div>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control ref={this.theTitle} placeholder="An interesting title" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label >Image URL</Form.Label>
                            <Form.Control ref={this.theURL} as="textarea" placeholder="https://..." rows={3} />
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
        } else {
            return (
                <div className='input-field'>
                    <div className='input-buttons'>
                        <button onClick={this.switchInput} className={this.state.textPost ? 'input-button' : 'input-button is-active'}>Text</button>
                        <button onClick={this.switchInput} className={this.state.textPost ? 'input-button is-active' : 'input-button'}>Image</button>
                    </div>
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
}