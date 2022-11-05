//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Jumbotron from "./component/jumbotron.jsx";
import Navbar from "./component/navbar.jsx";
import Card from "./component/card.jsx"


//render your react application
ReactDOM.render(
    <div>
        <Navbar/>
        <Jumbotron title="A Warm Welcome!" description="Hello" buttonLabel="Call to action!"/>
        <Card title="Hey"/>
        <Card/>
        <Card/>
        <Card/>
    </div>
, document.querySelector("#app"));



