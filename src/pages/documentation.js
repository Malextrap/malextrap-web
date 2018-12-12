import React, { Component } from 'react';

import Util from "../util";
import documentation from "./documentation.json";
import Footer from "./components/footer";


class Documentation extends Component {


    /** REST **/

    render(){
        const css = [
            {
                fontWeight: "600",
                textDecoration: "none",
                color: "#c8e1ff"
            },
            {
                fontWeight: "600",
                textDecoration: "none",
                color: "#f03e3e"
            }
        ];

        return ([
            <div id={"wrapper"}>
                <header className={"header"}>
                    <div className={"title"}>
                        <img alt={"logo"} src={"https://i.imgur.com/AHawQPd.png"} />
                        <h1 className={"headline"}>Documentation page</h1>
                    </div>
                </header>

                <div id={"main"} className={"container flex-container"}>
                    <ul>
                        {
                            Object.keys(documentation).map(key => {
                                return <li><a style={Util.includesIgnoreCase(key, "tooltip") ? css[1] : css[0]} href={document.location + `/${key}`}>{key}</a></li>
                            })
                        }
                    </ul>
                </div>
            </div>,
            <Footer />
        ])
    }


}

export default Documentation;