import React from "react"

import Util from "../../util"

import documentation from "../documentation/documentation.json"

import Button from "malextrap-react/lib/Button"
import Alert from "malextrap-react/lib/Alert"
import Card from "malextrap-react/lib/Card"
import Label from "malextrap-react/lib/Label"
import Modal from "malextrap-react/lib/Modal"
import Progress from "malextrap-react/lib/Progress"
import Selector from "malextrap-react/lib/Selector"
import Switcher from "malextrap-react/lib/Switcher"
import Tooltip from "malextrap-react/lib/Tooltip"

import Footer from "./Footer"

/**
 * This function search In documentation
 * @param {Component} component component
 * @param {String} obj objToSearch
 * @return {*} obj
 */
function searchInDocumentation(component, obj) {
  for (const element in documentation)
    if (Util.includesIgnoreCase(component.toString(), element)) {
      const elementObj = documentation[element]
      return elementObj[obj]
    }
}

/**
 * This function render the attributes for specific component
 * @param {Component} component component
 * @param {Array} styles styles
 * @returns {Array} html
 */
function renderAttributes(component, styles) {
  const attributes = searchInDocumentation(component, "attributes")
  const html = []
  let i = 0

  for (const attribute in attributes) {
    const style = Util.isEven(i) ? styles[1] : styles[2]
    const key = attributes[attribute]

    html.push(
      <tr>
        <td style={style}>{attribute}</td>
        {key.map((attr) => (
          <td style={style}>{attr}</td>
        ))}
      </tr>
    )

    i++
  }

  return html
}

/**
 * This function render the component example
 * @param {Component} component component
 * @return {Array} html
 */
function renderExample(component) {
  const code = searchInDocumentation(component, "code")
  const has = (char) =>
    Util.includesIgnoreCase(char, component.toString()) ||
    Util.includesIgnoreCase(component.toString(), char)

  const pre = (code) => <pre style={{ textAlign: "center" }}>{code}</pre>
  const forRender = [
    {
      label: "buttons",
      result: [pre(code), <Button animated text={"Hello world!"} />],
    },
    {
      label: "alerts",
      result: [pre(code), <Alert color={"info"} text={"Hello world!"} />],
    },
    {
      label: "cards",
      result: [
        pre(code),
        <Card
          color={"red"}
          text={[
            "Title",
            "Hello world",
            "Description",
            "This is a test description",
            "Date",
            "09/09/2011 19:26",
          ]}
        />,
      ],
    },
    {
      label: "labels",
      result: [pre(code), <Label text={"Hello world"} />],
    },
    {
      label: "modals",
      result: [
        pre(code),
        <Modal
          ref={(node) => {
            this.modal = node
          }}
          text={<p style={{ color: "#7a8599" }}>Hello world</p>}
        />,
        <Button
          onClick={() => this.modal.open()}
          animated
          color={"green"}
          text={"Open modal"}
        />,
      ],
    },
    {
      label: "progress",
      result: [pre(code), <Progress percent current={20} />],
    },
    {
      label: "selectors",
      result: [pre(code), <Selector options={["Alex", "Anna", "Rafa"]} />],
    },
    {
      label: "switch",
      result: [pre(code), <Switcher dataOn={"On"} dataOff={"Off"} />],
    },
    {
      label: "tooltips",
      result: [pre(code), <Tooltip text={"Hello"} hidden={"world!"} />],
    },
  ]

  for (const element of forRender) {
    if (has(element.label)) return element.result
  }
}

export default (props) => {
  const component = props.match.params.component
  const styles = [
    {
      fontFamily: "arial, sans-serif",
      borderCollapse: "collapse",
      width: "100%",
    },
    {
      backgroundColor: "rgba(121, 80, 242, .7)",
      border: "1px solid transparent",
      textAlign: "left",
      padding: "8px",
    },
    {
      backgroundColor: "rgba(121, 80, 242, 1)",
      border: "1px solid transparent",
      textAlign: "left",
      padding: "8px",
    },
    {
      backgroundColor: "#be4bdb",
      border: "1px solid transparent",
      textAlign: "center",
      padding: "8px",
    },
  ]

  return [
    <div id={"wrapper"}>
      <header className={"header"}>
        <div className={"title"}>
          <img alt={"logo"} src={"https://i.imgur.com/AHawQPd.png"} />
          <h1 className={"headline"}>{Util.firstUpperCase(component)}</h1>
        </div>
      </header>

      <div id={"main"} className={"container flex-container"}>
        <div className={"container"}>
          <div name={"features"}>
            <h2 style={{ textAlign: "center" }}>Component features</h2>
            <table style={styles[0]}>
              <tr>
                <th style={styles[3]}>Attribute</th>
                <th style={styles[3]}>Description</th>
                <th style={styles[3]}>Type</th>
              </tr>
              {renderAttributes(component, styles)}
            </table>
          </div>

          <div
            style={{ marginTop: "10%", paddingBottom: "10%" }}
            name={"example"}
          >
            <h2 style={{ textAlign: "center" }}>Component example</h2>
            {renderExample(component)}
          </div>
        </div>
      </div>
    </div>,
    <Footer />,
  ]
}
