import React from 'react'; 
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Home from './components/home'; 
import Login from './components/login'; 
import Posts from './components/posts'; 
import Register from './components/register';
import userDashboard from './components/user/userDashboard';

  
const App = () => { 
  
    return (
		<Router> 
           <div className="App"> 
				<div className="App-header" >
				<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
						<Navbar.Brand >PostsApp</Navbar.Brand>
							
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
							
						<Navbar.Collapse id="responsive-navbar-nav" >
							<Nav className="mr-auto">
								<Nav.Link> <Link to={"/"}>Home</Link></Nav.Link>
								<Nav.Link><Link to={"/posts"}>Posts</Link></Nav.Link>
								<Nav.Link><Link to={"/login"}>Login</Link></Nav.Link>
								<Nav.Link><Link to={"/register"}>Register</Link></Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</div>
				<Switch > 
					<Route exact path='/' component={Home}></Route> 
					<Route exact path='/login' component={Login}></Route> 
					<Route exact path='/posts' component={Posts}></Route> 
					<Route exact path='/register' component={Register}></Route>
					<Route exact path='/userDashboard' component={userDashboard}></Route> 
				</Switch> 
          </div> 
       </Router>
    );
} 
  
export default App; 
