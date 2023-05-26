import React from "react";

class MyComponent extends React.Component {
    render() {
        let name = 'Thanh Ngan';
        let birthday = '01-10-2002';


        return (
            <div className="wrapper">

                <div>
                    {console.log('My name is', name)}

                    hello, {name}</div>
                <div>Age {birthday}</div>
            </div>

        )

    }

}

export default MyComponent;
