export const Launch = (props) => {
  return (
    <div id="launch">
      <div className="contain">
        <div className="launch-text">
          <h1>{props.data ? props.data.title : "Loading"}</h1>
          <p>{props.data ? props.data.paragraph : "Loading"}</p>
          <a href className="btn btn-custom">
            Launch sample
          </a>
        </div>
      </div>
    </div>
  )
}
