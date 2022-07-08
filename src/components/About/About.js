import './About.css'

const About = () => {
  return (
    <div
      className="container"
    >
      <div
        className="headerContainer"
      >
        <div
          className="subHeaderContainer"
        >
          <div
            className="header"
          >
            Our Values
          </div>
          <p
            className="supportingText"
          >
            Conscious strives to be an ethical and transparent company.
          </p>
        </div>
      </div>
      <div
        className="contentContainer"
      >
        <div className="content">
          <div className="valueContainer">
            <div className="iconContainer">
              <img className="icon">
              </img>
            </div>
            <div className="textContainer">
              <div className="textHeader">
                Duty
              </div>
              <div className="subText">
                We are called to improve the world around us.
              </div>
            </div>
          </div>

          <div className="valueContainer">
            <div className="iconContainer">
              <img className="icon">
              </img>
            </div>
            <div className="textContainer">
              <div className="textHeader">
                Transparency
              </div>
              <div className="subText">
                We dont keep secrets from ourselves or others.
              </div>
            </div>
          </div>

          <div className="valueContainer">
            <div className="iconContainer">
              <img className="icon">
              </img>
            </div>
            <div className="textContainer">
              <div className="textHeader">
                Cooperation
              </div>
              <div className="subText">
              We are called to improve the world around us.
              </div>
            </div>
          </div>


          <div className="valueContainer">
            <div className="iconContainer">
              <img className="icon">
              </img>
            </div>
            <div className="textContainer">
              <div className="textHeader">
                Pragmatism
              </div>
              <div className="subText">
                We do what we can with the tools we have.
              </div>
            </div>
          </div>

        </div>
        <div className="imageContainer">
          <img className="aboutImage" src={require("../../assets/AboutImage.png")}/>
        </div>
      </div>
    </div>
  )
}

export { About }

