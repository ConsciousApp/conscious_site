import { NavBar } from '../NavBar/NavBar';
import { NavLinks } from './NavLinks';
import { Logo } from '../Logo/Logo';

const Header = () => {
  return (
    <div style={{
        position: 'absolute',
        zIndex:1
      }}>
    <NavBar>
      <div
        style={{
          display: 'flex',
          height: 40,
          width: 593,
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 32
        }}
      >
        <Logo>
        </Logo>
        <NavLinks/>
      </div>
    </NavBar>
    </div>
  )
}

export { Header }

