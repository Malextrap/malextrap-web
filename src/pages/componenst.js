import React, { Component } from 'react';
import Util from "../util";
import documentation from "./documentation.json";

class Components extends Component {


    /** REST **/

    render(){
        const component = this.props.match.params.component;

        return ([
            <div id={"wrapper"}>
                <header className={"header"}>
                    <div className={"title"}>
                        <img alt={"logo"} src={"https://i.imgur.com/AHawQPd.png"} />
                        <h1 className={"headline"}>{Util.firstUppercase(component)}</h1>
                    </div>
                </header>

                <div id={"main"} className={"container flex-container"}>
                    <div className={"container"}>
                        {this.searchInDocumentation(component, "code")}
                    </div>
                </div>
            </div>
        ])
    }


    /**
     * This function search In documentation
     * @param component component
     * @param obj objToSearch
     * @return {*} obj
     */
    searchInDocumentation(component, obj){
        for (const element in documentation)
            if (Util.includesIgnoreCase(component, element)){
                const elementObj = documentation[element];
                return elementObj[obj];
            }
    }


}

export default Components;