import React, {Component} from 'react';
import './styles.scss';
import Register from '../../layout/register';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


class Left extends Component{
  render(){
    return (
	    <div>
	      	<div className="col-md-12 Left">
				<div className="Login">
					<h2>LOGIN</h2>
					<form className="formLogin" action="/profile">
						Email:<br />
						<input className="Email" placeholder="" type="text"  name ="userEmail" required=""></input>
						<br />
						Password:<br />
						<input className="Pass" placeholder="" type="password"  name ="pws" required=""></input>
						<button type="submit" className="btn btn-default ">LOGIN</button>	
						<Link to ="/signup" className="register" ><button type="submit" className="btn btn-default register">SIGN UP</button></Link>
					</form>

					
					
					<p>&copy; 2019 Terralogic.Inc</p>
				</div>
			</div>
	    </div>
  );
  }
}

export default Left;