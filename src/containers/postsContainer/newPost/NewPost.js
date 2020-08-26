import React, { Component } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import './NewPost.css';
//import { Redirect } from 'react-router-dom';


class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: ''
    }
    
    componentDidMount() {
        let username = localStorage.getItem('token');
        username = JSON.parse(username);
        this.setState({
            author : username
        });
    }
    postDataHandler = () => {
        

        const post = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author,
        };
        //console.log(this.state.author)
        let postArray= localStorage.getItem('post');
        let posts = [];
        if (postArray !== null){
            posts = JSON.parse(postArray);
        }
        posts.push(post);
        localStorage.setItem('post', JSON.stringify(posts));
        alert("Post created successfully");
        this.props.history.replace("/userDashboard");
    }

    render () {
        return (
            <div className="NewPost">
                <Container>
                    <Row>
                        <Col xs={2} md={3}></Col>
                        <Col xs={8} md={6}>
                            <h3 style={{textAlign:'center'}}>Create New Post</h3>
                            <Form>
                                <Form.Group controlId="formPlaintext">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Enter title here"
                                        value={this.state.title} 
                                        onChange={(event) => this.setState({title: event.target.value})} 
                                    />
                                </Form.Group>
                                <Form.Group controlId="formPlaintext">
                                    <Form.Label>Body</Form.Label>
                                    <Form.Control as="textarea" rows='3' placeholder="Post message"
                                        value={this.state.content} 
                                        onChange={(event) => this.setState({content: event.target.value})}
                                    />
                                </Form.Group>
                            </Form>
                            <Button 
                                variant="primary" 
                                style={{width:'100%'}}
                                onClick={this.postDataHandler}
                            > 
                                Add Post
                            </Button>
                        </Col>
                        <Col xs={2} md={3}></Col>
                    </Row>
                    
                </Container>
            </div>
        );
    }
}

export default NewPost;