import './About.css'
import { AboutHeader } from './AboutHeader'
import { AboutContent } from './AboutContent'
// import { Image } from './Image'

const About = () => {
  return (
    <div className="container">
      <AboutHeader/>
      <AboutContent/>
      {/* <Image/> */}
    </div>
  )
}

export { About }

