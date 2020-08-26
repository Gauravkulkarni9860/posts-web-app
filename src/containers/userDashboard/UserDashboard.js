import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './UserDashboard.css';
import { useHistory } from 'react-router-dom';
import Post from '../postsContainer/post/Post';


const UserDashboard = (props) => {
    
    const history = useHistory();
    const openNewPost = () => history.push('/new-post');
    
    let username = localStorage.getItem('token');
    username = JSON.parse(username);
    
    let posts = localStorage.getItem('post');
    if(posts === null) {
        posts = <p style={{color:'red'}}>Sorry! No post created yet.... Please create post</p>
    }
    else {
        posts = JSON.parse(posts);
        
        posts = posts.map((post,index) =>{
            return (
                posts[index].author === username ? 
                <Post
                    key= {index} 
                    title = {posts[index].title}
                    body = {posts[index].body}
                    author = {posts[index].author}
                /> : null
            );
        });
    }

    

    return (
            <div className="head">
                <Container>
                    <Row>
                        <Col xs={7} md={10}>
                            <h4>Welcome {username} </h4>
                        </Col>
                        <Col xs={5} md={2}>
                            <Button 
                              variant="primary" 
                              onClick={openNewPost}
                            >
                              New Post
                            </Button>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        {posts}
                    </Row>
                </Container>
                
                
            </div>
        );
    
}

export default UserDashboard;