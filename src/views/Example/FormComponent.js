import React from "react";
import ChildComponent from "./ChildComponent";

class FormComponent extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        arrJob: [
            { id: 'abcJob1', title: 'Developer', salary: '5000' },
            { id: 'abcJob2', title: 'Testers', salary: '400' },
            { id: 'abcJob3', title: 'Project managers', salary: '400' },

        ]
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
                <ChildComponent name={'child one'}
                    age={'25'}
                    arrJob={this.state.arrJob}
                />


            </>
        )

    }

}
export default FormComponent