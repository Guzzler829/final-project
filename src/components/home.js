import React from 'react';

const apiURL = '';

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };

    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts() {
        fetch(apiURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then( res => res.json() )
            .then( res => console.log(res) );
    }

    render(){
        return (
            <div class="home-screen">
                <h1>Home screen!!!</h1>
            </div>
        );
    }
}