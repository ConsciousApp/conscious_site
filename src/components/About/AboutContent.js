// import { Image } from './Image'
import './About.css'
import { Value } from './Value'
const scales = require('../../assets/Compass.png')
const microscope = require('../../assets/Microscope.png')
const cooperation = require('../../assets/Cooperation.png')
const compass = require('../../assets/Compass.png')
const bank = require('../../assets/Bank.png')
const coins = require('../../assets/CoinsHand.png')
const settings = require('../../assets/Settings.png')
const card = require('../../assets/Card.png')
const AboutContent = () => {
  return (
    <div className="contentContainer">
      <div className="content">
        <div className="contentHeader">
          <div className="contentHeaderText">
            Our Values
          </div>
        </div>
        <Value
          valueName='Duty'
          valueText='We are called to improve the world around us.'
          imageSrc={scales}
          imageAlt=''
        />

        <Value
          valueName='Transparency'
          valueText="We don't keep secrets from ourselves or others."
          imageSrc={microscope}
        />
        <Value
          valueName='Cooperation'
          valueText='We go farther by going together.'
          imageSrc={cooperation}
        />
        <Value
          valueName='Pragmatism'
          valueText='We do what we can with the tools we have.'
          imageSrc={compass}
        />
      </div>
      <div className='content'>
        <div className="contentHeader">
          <div className="contentHeaderText">
            How it works
          </div>
        </div>

        <Value
          valueName='Connect your bank'
          valueText='We support most major banks and many smaller banks and credit unions.'
          imageSrc={bank}
          imageAlt=''
        />

        <Value
          valueName='Select your charity'
          valueText="Every charity on our platform is vetted so you can feel comfortable knowing your money is going to a good cause."
          imageSrc={coins}
        />
        <Value
          valueName='Setup your account'
          valueText="Round up your daily transactions or schedule regular donations to the charity of your choosing."
          imageSrc={settings}
        />
        <Value
          valueName='Use your card like always'
          valueText="'Set it and forget it'. You can rest assured knowing we'll take care of the hard work for you."
          imageSrc={card}
        />
      </div>
    </div>

  )
}

export { AboutContent }

