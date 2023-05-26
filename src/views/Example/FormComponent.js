import React from "react";

class FormComponent extends React.Component {
    state = {
        firstName: '',
        lastName: ''

    }

    handleOnChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value

        })
    }

    handleOnchangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })

    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert('click');
    }

    render() {
        console.log('Call', this.state);
        return (
            <>
                <div>HTML FORM</div>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" onChange={(event) => this.handleOnChangeFirstName(event)} value={this.state.firstName} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" onChange={(event) => this.handleOnchangeLastName(event)} value={this.state.lastName} /><br /><br />
                    <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)} />
                </form>
            </>
        )

    }

}
export default FormComponent