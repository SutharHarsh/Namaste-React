import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World from React!");

const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(heading)

// root.render(heading);

const Parent = React.createElement("div", { id: "parent" , key: "parent-key" }, 
    [React.createElement("div", { id: "child1" , key: "child1-key"}, [
        React.createElement("h1", { id: "chile1_h1" , key: "h1-child1" }, "Hey, I am Harsh Suthar"),
        React.createElement("h2", { id: "chile1_h2" , key: "h2-child1" }, "Computer Enginnering Student")
    ]),
        React.createElement("div", { id: "child2" , key: "child2-key" }, [
            React.createElement("h1", { id: "chile2_h1" , key: "h1-child2" }, "This is a h1 tag"),
            React.createElement("h2", { id: "chile2_h2" , key: "h2-child2" }, "This is a h2 tag")
        ])
    ]

)

root.render(Parent);

