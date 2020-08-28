import React, { Component } from 'react';
import Post from '../post/Post';
import './Posts.css';

class Posts extends Component {
    render () {

        let posts = localStorage.getItem('post');
        posts = JSON.parse(posts);
            posts.reverse();
            
            posts = posts.map((post,index) =>{
                return (
                    <Post
                        key= {index} 
                        title = {posts[index].title}
                        body = {posts[index].body}
                        author = {posts[index].author}
                    /> 
                );
            });

        return (
            <div className="Posts">
                {posts}
            </div>
            
        );
    }
}

export default Posts;