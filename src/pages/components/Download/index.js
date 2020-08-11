import React from "react"
import Button from "malextrap-react/lib/Button"
import "malextrap-react/src/framework.css"
import "../../style.css"

export default () => (
  <div className={"download"}>
    <h1>
      Download malextrap <i className={"icons-download"} />
    </h1>
    <div className={"help-download"}>
      <Button animated color={"first-gradient"} text={"All framework"} />
      <Button animated color={"teal"} text={"Components"} />
    </div>
  </div>
)
