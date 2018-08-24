import React from "react";

class Contxt extends React.Component{
    render(){
        return(
            <p>
                {
                    this.props.children
                }
            </p>
        )
    }
}

export  default Contxt;