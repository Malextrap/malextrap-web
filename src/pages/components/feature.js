import React, { Component } from 'react';
import "malextrap-react/src/framework.css";
import "../css/home.css";

class Feature extends Component {


    render(){
        return <div className={"feature"}>
            {this.props.title}
            <div className={"content"}>
                {this.props.content}
            </div>
        </div>
    }


}

export default Feature;