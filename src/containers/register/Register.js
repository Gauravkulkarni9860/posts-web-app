import React, {useState} from 'react'; 
import { useHistory } from 'react-router-dom';
import './Register.css';
import { Button, Container, Row, Col,Form } from 'react-bootstrap';


const Register = () => { 
    const log = useHistory();
    const openLogin = () => log.push('/login');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    
    const setData = () => {
        const user = { email, name, pass }
        let valid = checkValidity();
        
        if (valid !== false){
            let userArray = localStorage.getItem('user');
            let users = [];
            if(userArray !== null){
                users = JSON.parse(userArray);
            }
            users.push(user)
            localStorage.setItem('user', JSON.stringify(users));
            alert('User Registered Successfully....');
            log.push('/login');
        }

        
    }

    const checkValidity = () => {
        var isValid = true;
        var nameRgex = /^[a-zA-Z]/;
        var passRgex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        var emailRgex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        
        if(email === "" || email === null) {
            alert("Please enter email address");
            isValid = false;
            return isValid
        } 
        else {
            if(emailRgex.test(email) && isValid) {
                isValid = true;
            }
            else {
                alert("Enter valid email address");
                isValid = false;
                return isValid
            }
        }

        if(name === "" || name === null) {
            alert("Please enter name");
            isValid = false;
            return isValid
        } 
        else {
            if(nameRgex.test(name) && isValid) {
                isValid = true;
                
            }
            else {
                alert("Enter valid name");
                isValid = false;
                return isValid
            }
        }

        if(pass === "" || pass === null) {
            alert("Please enter password");
            isValid = false;
            return isValid
        } 
        else {
            if(passRgex.test(pass) && isValid) {
                isValid = true;
            }
            else {
                alert("Password must contain 8 or more characters that are of at least one number, and one uppercase and lowercase letter");
                isValid = false;
                return isValid
            }
        }

        return isValid;
    }


    return (
        <Container style={{marginTop:'40px'}}>
            <Row>
                <Col xs={1} md={3}></Col>
                <Col xs={10} md={6}>
                    <div className="form">
                        <Form>
                            <div className="form-header">
                                <Form.Label style={{margin:'10px', fontSize:'20px', fontWeight:'bold'}}>
                                    Registeration Form
                                </Form.Label>
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


        