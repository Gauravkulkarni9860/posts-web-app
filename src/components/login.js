import React, { useState } from 'react'; 
import './login.css';
import { useHistory } from 'react-router-dom';
import { 
    Button, Container, Row, Col,Form
 } from 'react-bootstrap';




const Login = () => { 
    const reg = useHistory();
    const openRegister = () => reg.push('/register');

    const [userName, setUserName] = useState('');
    const [pass, setPassword] = useState('');
    
    const openDashboard = () => reg.push('/userDashboard');

    const validate = () => {
        let data = localStorage.getItem('user');
        
        // alert(data);
        if(data === undefined){
            alert('error');
        }
        else {
            data = JSON.parse(data);
            console.log(data);
            let flag = 0;
            for(let i = 0;i<data.length;i++){
                if(data[i].email === userName && data[i].password === pass){
                    alert(userName);
                    openDashboard();
                    flag = 1;
                }   
            }
            if(flag === 0){
                alert('user not found.')
            }
            
        }
            
    }
    

    return (
        <Container style={{marginTop:'40px'}}>
            <Row>
                <Col xs={1} md={3}></Col>
                <Col xs={10} md={6}>
                    <div className="form">
                        <Form>
                            <div className="form-header">
                                <p>Login Form</p>
                            </div>
                            <div className="form-body">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email Address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email address"
                                            onChange={ (e) => setUserName(e.target.value)} />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password"
                                        onChange={ (e) => setPassword(e.target.value)} />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" 
                                    onClick={validate}>
                                    Submit
                                </Button>
                            </div>
                            <div className="form-header">
                                <Form.Label style={{margin:'10px'}}>
                                    New here ? <Button variant="link" onClick={openRegister}>Register Now</Button>
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
  
export default Login; 