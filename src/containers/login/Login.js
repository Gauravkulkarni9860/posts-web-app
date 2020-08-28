import React, { Component } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import './Login.css';

class Login extends Component {
    
    constructor(props) {
        super(props)
        let loggedIn = false
        
        this.state = {
            userName : '',
            password : '',
            loggedIn,
            
        }
        this.onChange = this.onChange.bind(this)
        this.loginUser = this.loginUser.bind(this)
        this.openRegister = this.openRegister.bind(this)
    }

    openRegister(e) {
        e.preventDefault();
        this.props.history.push("/register");
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    

    loginUser(e) {
        e.preventDefault();
        const { userName, password } = this.state;
        
        let data = localStorage.getItem('user');

        if(data === null || data === undefined){
            alert("Account not found! Please register yourself");
            console.log(data)
        }
        else {
            data = JSON.parse(data);
            let i ;
            let accountFound = false;
            for( i = 0; i < data.length; i++){
                if(data[i].email === userName){
                    accountFound = true;
                    break
                }
            }
            
            if ( accountFound ) {
                if(data[i].email === userName && data[i].pass === password ) {
                    this.setState({
                        loggedIn: true,
                    })
                    localStorage.setItem('token',JSON.stringify(data[i].name));    
                }
                else{
                    alert("Login failed! Please try again");
                    this.setState({
                        userName:'',
                        password:''
                    })
                }
            }
            else {
                alert("Account not found! Please register yourself");
                this.props.history.replace("/register");
            }
        }
    }



    render () {

        if(this.state.loggedIn) {
            return <Redirect to="/userDashboard" /> 
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
                                        Login Form
                                    </Form.Label>
                                </div>    
                                <div className="form-body">
                                    <Form.Group>
                                        <Form.Label>Email Address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email address"
                                                name = "userName"
                                                value={this.state.userName}                                   
                                                onChange={this.onChange} 
                                            />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password"
                                            name = "password"
                                            value={this.state.password}
                                            onChange={this.onChange}
                                         />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group>
                                    <Button variant="primary"
                                        onClick= {this.loginUser} >
                                        Submit
                                    </Button>
                                </div>
                                <div className="form-header">
                                    <Form.Label style={{margin:'10px'}}>
                                        New here ? 
                                        <Button variant="link" 
                                            onClick={this.openRegister}
                                        >
                                            Register Now
                                        </Button>
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
}

export default Login;