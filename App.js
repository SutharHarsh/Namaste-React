import React from "react";
import ReactDOM from "react-dom/client";


const Title = () => (
    <div>
        <h1 className="head">Hello</h1>
        <h2>My name is Harsh</h2>
    </div>
);

const num = 1000;

const HeadingComponent = () => (
    <div id="container">
        {num}
        <Title />
        {Title()}
        <h1 id="heading"> Namste-React </h1>
    </div>
); 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

