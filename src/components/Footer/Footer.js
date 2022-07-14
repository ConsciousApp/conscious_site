import { Logo } from '../Logo/Logo'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <Logo classStyle='footerLogo' />
      <div className='copyright'>
        © 2022 Conscious. All rights reserved
      </div>
    </div>
  )
}

export { Footer }
