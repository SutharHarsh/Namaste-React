import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    console.log(props);
  }

  render() {
    const { name } = this.props;
    const { count } = this.state;
    return (
      <div className="border-1 border-black p-3 flex flex-col gap-2">
        <h1 className="font-bold">-- Class Component --</h1>
        <h1>Count: {count}</h1>
        <button
        className="bg-gray-200 w-30 rounded-2xl"
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Increase
        </button>
        <h1>Name: {name}</h1>
        <h1>Contact: sutharharsh@gmail.com</h1>
        <h1>Location: Visnagar</h1>
      </div>
    );
  }
}

export default UserClass;
