export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="contain">
            <div className="intro-text">
              <h1>{props.data ? props.data.title : "Loading"}</h1>
              <p>{props.data ? props.data.paragraph : "Loading"}</p>
              <a href="https://discord.gg/ctb3zkWk" className="btn btn-custom">
                Join our Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
