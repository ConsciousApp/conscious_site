import './About.css'
const Value = (props) => {
  return (
    <div className="valueContainer">
      <img className="valueIcon" src={`${props.imageSrc}`} alt={props.imageAlt}/>
      <div className="textContainer">
        <div className="textHeader">
          {props.valueName}
        </div>
        <div className="subText">
          {props.valueText}
        </div>
      </div>
    </div>

  )
}

export { Value }
