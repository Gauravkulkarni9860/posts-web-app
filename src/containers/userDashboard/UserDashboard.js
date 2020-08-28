import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './UserDashboard.css';
import { useHistory, Redirect } from 'react-router-dom';
import Post from '../postsContainer/post/Post';


const UserDashboard = (props) => {
    
    const history = useHistory();
    const openNewPost = () => history.push('/new-post');
    const logOut = () => {
        localStorage.removeItem('token');
        history.push("/login");
    }
    
    let username = localStorage.getItem('token');
    username = JSON.parse(username);
    
    if(username === null) {
        return (<Redirect to="/login" /> )
    }

    let posts = localStorage.getItem('post');
    //console.log(posts)

    if (posts === null){
        posts = <h4>Please Create Posts</h4>
    }
    else {
        posts = JSON.parse(posts);
        posts.reverse();
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
                        <Col xs={7} md={9}>
                            <h4>Welcome {username} </h4>
                        </Col>
                        <Col xs={5} md={3}>
                            
                            <Button 
                              variant="primary" 
                              onClick={openNewPost}
                            >
                              New Post
                            </Button>
                            
                            <Button 
                              variant="danger" 
                              onClick={logOut}
                              style={{marginLeft:'5px'}}
                            >
                              Logout
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