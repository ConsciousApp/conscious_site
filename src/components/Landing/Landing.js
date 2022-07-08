import { LandingBody } from './LandingBody';
import { LandingImage } from './LandingImage';

const Landing = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'ro',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '64px 0px 96px',
        gap: 64,
        isolation: 'isolate',
        width: '100%',
        height: '800px',
        textAlign: 'left'

      }}
    >
      <LandingBody/>
      <LandingImage/>
    </div>
  )
}

export { Landing }
