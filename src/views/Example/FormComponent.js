import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class FormComponent extends React.Component {
    state = {
        arrJob: [
            { id: 'abcJob1', title: 'Developer', salary: '5000' },
            { id: 'abcJob2', title: 'Testers', salary: '400' },
            { id: 'abcJob3', title: 'Project managers', salary: '400' },

        ]
    }

    addNewJob = (job) => {
        console.log('check job from parent', job);
        // let currentJob = this.state.arrJob;
        // currentJob.push(job);
        this.setState({

            // add object job on state
            arrJob: [...this.state.arrJob, job]
            // arrJob: currentJob
        })
    }


    render() {
        console.log('Call', this.state);
        return (
            <>
                {/* Truyen function đi */}
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent
                    arrJob={this.state.arrJob}
                />


            </>
        )

    }

}
export default FormComponent