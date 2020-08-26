import React from 'react';
//import './Post.css'
import {Card} from 'react-bootstrap';

class Post extends React.Component {
    render () {
        
        return (
            <Card border="primary" style={{margin:'20px'}}>
                <Card.Header as="h5">{this.props.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>  {this.props.body} </p>
                        <footer className="blockquote-footer">
                            Post by <cite title="Source Title">{this.props.author}</cite>
                        </footer>
                    </blockquote>
                    
                </Card.Body>
            </Card>
        );
    }
}

export default Post;