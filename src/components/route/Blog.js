import React, { Component } from 'react';
import './Blog.css';
import Login from '../../containers/login/Login';
import Home from '../home/Home';
import Posts from '../../containers/postsContainer/posts/Posts';
import Register from '../../containers/register/Register'
import NewPost from '../../containers/postsContainer/newPost/NewPost';
import UserDashboard from '../../containers/userDashboard/UserDashboard';
import { Route, Switch, NavLink } from 'react-router-dom';



class Blog extends Component {
    render () {
        return (
            
            <div>
                <header className="Blog">
                    <nav>
                        <div>
                            <div style={{textAlign:'left'}}>
                                <li style={{color:'white', fontSize:'22px'}}>PostsApp</li>    
                                <div style={{float:'right'}}>
                                    <ul>
                                        <li><NavLink exact to="/">Home</NavLink></li>
                                        <li><NavLink to="/posts">Posts</NavLink></li>
                                        <li><NavLink to="/login">Login</NavLink></li>
                                        <li><NavLink to="/register">Register</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </nav>
                </header>
                
                <Switch>
                    <Route path="/" exact component={Home} />    
                    <Route path="/login" exact component={Login} />   
                    <Route path="/posts" exact component={Posts} /> 
                    <Route path="/register" exact component={Register} /> 
                    <Route path="/new-post" exact component={NewPost} />
                    <Route path="/userDashboard" exact component={UserDashboard} />
                </Switch>
                
            </div>
            
        );
    }
}

export default Blog;