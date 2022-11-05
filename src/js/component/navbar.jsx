import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

const content =
    [
	<li className="nav-item">
		<a className="nav-link" href="#">
			Home
		</a>
	</li>,
	<li className="nav-item">
		<a className="nav-link" href="#">
			About
		</a>
	</li>,
	<li className="nav-item">
		<a className="nav-link" href="#">
			Services
		</a>
	</li>,
	<li className="nav-item">
		<a className="nav-link" href="#">
			Contact
		</a>
	</li>,
];

const Navbar =() =>
 <ul className="nav">{content}</ul>;


export default Navbar