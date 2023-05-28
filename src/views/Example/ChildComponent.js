import React from "react";

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnclickDelelte = (job) => {
        console.log(job);



    }


    render() {
        console.log('check props', this.props);
        let { arrJob } = this.props;
        let { showJobs } = this.state;
        let checkShowHide = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        console.log('CheckShowHide', checkShowHide);


        return (
            <>
                {showJobs === false
                    ? <div> <button onClick={() => { this.handleShowHide() }}>SHOW</button></div>
                    :
                    showJobs === true &&
                    <>
                        <div className="list-job">
                            {
                                arrJob.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}  <></>
                                            <span onClick={() => { this.handleOnclickDelelte(item) }}>x</span>


                                        </div>
                                    )

                                })

                            }
                        </div>
                        <div><button onClick={() => { this.handleShowHide() }}>HIDE</button></div>
                    </>

                }


            </>
        );
    }
}

// const ChildComponent = (props) => {

//     let { arrJob } = props;
//     console.log('>>check child props', props)
//     return (
//         <>
//             <div>HEllo test arrow function</div>
//             <div className="list-job">
//                 {
//                     arrJob.map((item, index) => {
//                         if (item.salary >= 500) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )
//                         }

//                     })
//                 }

//             </div>
//         </>

//     )

// }

export default ChildComponent;
