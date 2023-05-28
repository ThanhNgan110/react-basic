import React from "react";

class MyComponent extends React.Component {

    state = {
        name: '',
        age: 21
    }

    handleClickButton = () => {
        console.log('Hello');
    }

    handleOnchangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }




    render() {
        console.log('Call render', this.state);
        return (
            <>
                <div>
                    {console.log('My name is', this.state.name)}
                    hello, {this.state.name}
                </div>
                <div>Age {this.state.age}</div>
                <div className="third">
                    <button onClick={this.handleClickButton}>Click me</button>
                </div>
                <div>
                    <input type="text" value={this.state.name} onChange={(event) => this.handleOnchangeName(event)} />
                </div>
            </>
        );
    }
}

export default MyComponent;
