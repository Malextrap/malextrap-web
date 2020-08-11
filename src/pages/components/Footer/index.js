import React from "react"
import "malextrap-react/src/framework.css"
import "../../style.css"
import "./style.css"

export default () => {
  const website = "https://framework.clonalejandro.me"
  const github = "https://github.com/Malextrap"
  const gitlab = "https://gitlab.com/Malextrap"
  const twitter = "https://twitter.com/Malextrap"
  const rss = "#"

  return (
    <footer>
      <div className={"footer-container"}>
        <div className={"footer-body"}>
          <p>
            © <strong>clonalejandro </strong>powered with{" "}
            <a
              className={"label label-rainbow no-decoration"}
              target={"_blank"}
              href={website}
            >
              {" "}
              <i className={"icons-rocket"} /> malextrap
            </a>
          </p>
          <ul>
            <li>
              <a className="no-decoration" href="mailto:undefined">
                Mail
              </a>
            </li>
            <li>
              <a
                className="no-decoration"
                href="https://github.com/Malextrap"
                target="_blank"
              >
                Malextrap
              </a>
            </li>
            <li>
              <a className="no-decoration" href="/tos">
                Terms & License
              </a>
            </li>
          </ul>
          <ul className={"social"}>
            <li>
              <a
                className={"pi img-replace github"}
                href={github}
                target={"_blank"}
              >
                Github
              </a>
            </li>
            <li>
              <a
                className={"img-replace g gitlab"}
                href={gitlab}
                target={"_blank"}
              >
                Gitlab
              </a>
            </li>
            <li>
              <a
                className={"pi img-replace twitter"}
                href={twitter}
                target={"_blank"}
              >
                Twitter
              </a>
            </li>
            <li>
              <a className={"pi img-replace rss"} href={rss} target={"_blank"}>
                RSS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
