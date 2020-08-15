import React, { useState } from 'react'; 
import { useHistory } from 'react-router-dom';
import './login.css';
import { Button, Container, Row, Col,Form } from 'react-bootstrap';


const Register = () => { 
    const log = useHistory();
    const openLogin = () => log.push('/login');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    
    function setData () {
        const user = {
           email,
            name,
            password, 
           }
        let userArray = localStorage.getItem('user');
        let users = [];
        if(userArray !== null){
            users = JSON.parse(userArray);
        }
        users.push(user)
        localStorage.setItem('user', JSON.stringify(users));
    }


    return (
        <Container style={{marginTop:'40px'}}>
            <Row>
                <Col xs={1} md={3}></Col>
                <Col xs={10} md={6}>
                    <div className="form">
                        <Form>
                            <div className="form-header">
                                <p>Registration Form</p>
                            </div>
                            <div className="form-body">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email Address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email address"
                                            onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>

                                <Form.Group controlId="formPlaintext">
                                    <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your full name"
                                            onChange={(e) => setName(e.target.value)} />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password"
                                        onChange={(e) => setPass(e.target.value)} />
                                </Form.Group>
                                
                                <Button variant="primary" 
                                    onClick={() => setData()}>
                                    Submit
                                </Button>
                            </div>
                            <div className="form-header">
                                <Form.Label style={{margin:'10px'}}>
                                    Already have an account ? 
                                    <Button variant="link" onClick={openLogin}>Login Here</Button>
                                </Form.Label>
                            </div>
                            
                        </Form>
                    </div>
                </Col>
                <Col xs={1} md={3}></Col>
            </Row>
        </Container>
        
    );
} 
  
export default Register; 