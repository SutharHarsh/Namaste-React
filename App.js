const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World from React!");

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading)

// root.render(heading);

const Parent = React.createElement("div", { id: "parent" }, 
    [React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "This is a h1 tag"),
        React.createElement("h2", {}, "This is a h2 tag")
    ]),
        React.createElement("div", { id: "child2" }, [
            React.createElement("h1", {}, "This is a h1 tag"),
            React.createElement("h2", {}, "This is a h2 tag")
        ])
    ]

)

root.render(Parent);

