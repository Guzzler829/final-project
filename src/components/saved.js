import { useState, useEffect } from 'react';
import Post from './post';

const apiURL = 'https://crudcrud.com/api/91ba9e9f61e541de92c8e6d9b14465a5';

export default function SavedPosts(props) {

    let [postJSONs, setPostJSONs] = useState([]);
    let [postIds, setPostIds] = useState([]);

    useEffect( () => {
        getSaved();
        getPosts()
    }, []);

    async function getSaved() {
        await fetch(apiURL + '/saved-posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then( res => res.json() )
            .then( res => setPostIds(res) )
            .catch( err => console.error(err) );
    }

    async function getPosts() {

        let postArray = [];

        for(let i = 0; i < postIds.length; i++) {
            await fetch(apiURL + '/posts/' + postIds[i].savedPostId, {     
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then( res => res.json() )
                .then( res => postArray.push(res) )
                .catch( err => console.error(err) );
            
        }
        setPostJSONs(postArray);
        console.log(postJSONs);
    }

    return (
        <div className="home-screen">
            {postJSONs.map( (post) => 
                <Post 
                    typeOfPost={post.type}
                    title={post.title}
                    text={post.text}
                    imgSrc={post.url}
                    myHref={post.url}
                    date={post.date}
                    key={post._id}
                    postId={postJSONs._id}
                />
            )}   
        </div>
    );
}