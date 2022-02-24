export const Announce = (props) => {
  return (
    <div id="announce">
      <div className="contain">
        <div className="announce-text">
          <h1>{props.data ? props.data.title : "loading..."}</h1>
          <p>{props.data ? props.data.paragraph : "loading..."}</p>
        </div>
      </div>
    </div>
  )
}
