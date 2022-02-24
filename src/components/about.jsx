export const About = (props) => {
  return (
    <div id="about">
      <div className="contain">
        <div className="about-text">
          <div className="col-xs-6 content">
            <h1>{props.data ? props.data.paragraph : "loading..."}</h1>
            <a
              href="http://www.thememorymint.com/sommer"
              className="btn btn-custom"
            >
              Pre-sale is live now
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
