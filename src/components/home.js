import React from 'react';
import Post from './post';

const apiURL = 'https://crudcrud.com/api/91ba9e9f61e541de92c8e6d9b14465a5';

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            postJSONs: []
        };

    }

    componentDidMount() {
        this.getPosts();
    }

    async getPosts() {
        await fetch(apiURL + '/posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then( res => res.json() )
            .then( res => this.setState({postJSONs: res}) )
            .catch( err => console.error(err) );
    }

    render(){
        return (
            <div className="home-screen">
                {this.state.postJSONs.map( (post) => 
                    <Post 
                        typeOfPost={post.type}
                        title={post.title}
                        text={post.text}
                        imgSrc={post.url}
                        myHref={post.url}
                        date={post.date}
                        key={post._id}
                        postId={post._id}
                    /> 
                )}
            </div>
        );
    }
}