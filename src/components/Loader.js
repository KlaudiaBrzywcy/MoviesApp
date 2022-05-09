import React from "react";

class Loader extends React.Component {
   

    render () { 
        const info = this.props.info
        return (
            
            <div className="ui active dimmer">
                <div className="ui text loader">{this.props.info || 'Loading...' }</div>
            </div>
           
        )
    }
}

export default Loader;