import React from 'react'; 
import './home.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Home = () => { 
    const history = useHistory();
    const handleClick = () => history.push('/login');
    const openPosts = () => history.push('/posts');
    
    return (
        <Container className="home-body">
            <Row>
                <Col xs={1} md={3}></Col>
                <Col xs={10} md={6}>
                    <h2>Welcome to Post's App</h2>
                </Col>
                <Col xs={1} md={3}></Col>
            </Row>
            <Row>
                <Col><p>Bootstrap is the most popular HTML, CSS, and JavaScript 
                    framework for developing responsive, mobile-first websites.
                    Bootstrap is completely free to download and use!</p></Col>
            </Row>
            <hr />
            <Row>
            <Col xs={2} md={4}></Col>
                <Col xs={8} md={4}>
                    <Button variant="primary" onClick={openPosts}>
                        Explore Posts
                    </Button>
                    <Button variant="outline-primary" style={{marginLeft : '10px'}} 
                        onClick={handleClick} >
                        Login Here
                    </Button>
                </Col>
                <Col xs={2} md={4}></Col>
            
            </Row>
        </Container>
    );
} 
  
export default Home; 