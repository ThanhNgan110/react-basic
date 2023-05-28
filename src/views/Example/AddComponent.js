import React from "react";




class AddComponent extends React.Component {


    state = {
        title: '',
        salary: ''
    }


    handleOnChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value

        })
    }

    handleOnChangeSalary = (event) => {
        this.setState({
            salary: event.target.value


        })

    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.title === '' || this.state.salary === '') {
            alert('Nhập đầy đủ thông tin');
        }
        console.log('Show Data Input:', this.state);

        // gọi tới function cha 
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary

        });
        this.setState({
            title: '',
            salary: ''

        })
    }


    render() {
        return (
            <>
                <div>Hello add component</div>
                <form>
                    <label htmlFor="fname">Title job:</label><br />
                    <input type="text" onChange={(event) => this.handleOnChangeTitleJob(event)} value={this.state.title} /><br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input type="text" onChange={(event) => this.handleOnChangeSalary(event)} value={this.state.salary} /><br /><br />
                    <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)} />
                </form>
            </>


        )
    }
}

export default AddComponent