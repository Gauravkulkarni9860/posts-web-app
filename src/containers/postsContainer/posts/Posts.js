import React, { Component } from 'react';
import Post from '../post/Post';
import './Posts.css';

class Posts extends Component {
    render () {

        let posts = localStorage.getItem('post');
        if(posts === null) {
            posts = <p style={{color:'red'}}>Sorry! No post created yet.... Please create post</p>
        }
        else {
            posts = JSON.parse(posts);
            
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
        }

        return (
            <div className="Posts">
                {posts}
            </div>
            
        );
    }
}

export default Posts;