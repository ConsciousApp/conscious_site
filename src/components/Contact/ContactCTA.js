import './Contact.css'

const ContactCTA = () => {
  return (
    <div className='rightContainer'>

      <div className='emailContainer'>
        <div className='email'>
          <img
            className='icon'
            src={require('../../assets/Mail.png')}
            alt='mail icon'
          />
          <div className='textSupportingText'>
            <div className='contactHeader'>
              Email
            </div>

            <div className='contactSubheader'>
              Our team is here to help.
            </div>
          </div>
          <div className='contactButton'>
            <a className='contactButtonText' href='mailto:support@consciousapp.io'>
              support@consciousapp.io
            </a>
          </div>
        </div>
      </div>

      <div className='phoneContainer'>
        <div className='phone'>
          <img
            className='icon'
            src={require('../../assets/Phone.png')}
            alt='phone icon'
          />
          <div className='textSupportingText'>
            <div className='contactHeader'>
              Phone
            </div>

            <div className='contactSubheader'>
              Mon-Fri from 8am to 5pm MST.
            </div>
          </div>

          <div className='contactButton'>
            <div className='contactButtonText'>
              +1 (555) 000-0000
            </div>
          </div>

        </div>
      </div>

    </div>

  )
}

export { ContactCTA }
