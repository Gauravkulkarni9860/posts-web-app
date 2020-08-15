import React, { useState } from 'react';
import { Button, Container, Row, Col, Modal, Form } from 'react-bootstrap';
import './userDashboard.css';


const UserDashboard = () => {
   const [modalShow, setModalShow] = useState(false);
   const [ title, setTitle ]  = useState("");
    
    const set = () => {
        // let title = document.getElementsById('title').nodeValue;
        console.log(title);
        
    }

    
    
function MydModal(props) {
    
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create Post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Form>
                <Form.Group controlId="formPlaintext">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title here"
                        onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formPlaintext">
                    <Form.Label>Body</Form.Label>
                    <Form.Control as="textarea" rows='3' placeholder="Post message" />
                </Form.Group>
            </Form> 
          </Container>
        </Modal.Body>
        <Modal.Footer>
          
          <Button 
            variant="primary" 
            style={{width:'100%'}}
            onClick={set}
            >
              Create Post
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }


    return (
        <div className="head">
            <Container>
                <Row>
                    <Col xs={7} md={10}>
                        <h3>Hello</h3>
                    </Col>
                    <Col xs={5} md={2}>
                        <Button variant="primary" onClick={() => setModalShow(true)}>New Post</Button>
                        <MydModal show={modalShow} onHide={() => setModalShow(false)} />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <div className="content">
                        <h4 className="content-header">title</h4>
                        
                        <p style={{fontSize: '20px'}}>body</p>
                        <p>- post by</p>
                    </div>
                </Row>
            </Container>
            
            
        </div>
    );
}

export default UserDashboard;