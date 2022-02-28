import { Link } from "react-router-dom"

export const About = (props) => {
  return (
    <div id="about">
      <div className="contain">
        <div className="about-text">
          <div className="col-xs-6 content">
            <h1>{props.data ? props.data.paragraph : "loading..."}</h1>
            <a className="btn btn-custom">
              <Link to="sommer">Pre-sale is live now</Link>
            </a>
          </div>
          <div className="col-xs-6 img">
            <img src="img/about.png" />
          </div>
        </div>
      </div>
    </div>
  )
}
