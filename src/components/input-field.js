import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default class InputField extends React.Component {
    render(){
        return (
            <div className='input-field'>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control placeholder="An interesting title" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Text</Form.Label>
                        <Form.Control as="textarea" placeholder="..." rows={3} />
                    </Form.Group>
                </Form>
                <Button>Submit</Button>
            </div>
        );
    }
}