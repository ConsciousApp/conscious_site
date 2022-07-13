import './Contact.css'
import { Form } from './Form'
import { Body } from './Body'
import { ContactCTA } from './ContactCTA'
import { Star } from './Star'

const Contact = () => {
  return (
    <div className='contactContainer'>
      <Body/>
      <div className='lowerContainer'>
        <Form/>
        <ContactCTA/>
      </div>
      <Star/>
    </div>
  )
}

export { Contact }
