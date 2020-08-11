import React from "react"
import "malextrap-react/src/framework.css"
import "../../style.css"

export default (props) => (
  <div className={"feature"}>
    {props.title}
    <div className={"content"}>{props.content}</div>
  </div>
)
