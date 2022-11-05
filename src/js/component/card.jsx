//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

const Card = () => {
	return (
		<div className="card m-5">
			<img className="card-img-top" src="" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">Card Title</h5>
				<p className="card-text">
					Hello
				</p>
				<a href="https://en.wikipedia.org/wiki/Bob_Dylan" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
};
export default Card;