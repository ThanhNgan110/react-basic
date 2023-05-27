import React from "react";

// class ChildComponent extends React.Component {


//     render() {
//         console.log('check props', this.props);
//         let { name, age, arrJob } = this.props;


//         return (
//             <>
//                 <div className="list-job">
//                     {
//                         arrJob.map((item, index) => {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )

//                         })

//                     }
//                 </div>



//             </>
//         );
//     }
// }

const ChildComponent = (props) => {

    let { arrJob } = props;
    console.log('>>check child props', props)
    return (
        <>
            <div>HEllo test arrow function</div>
            <div className="list-job">
                {
                    arrJob.map((item, index) => {
                        if (item.salary >= 500) {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        }

                    })
                }

            </div>
        </>

    )

}

export default ChildComponent;
