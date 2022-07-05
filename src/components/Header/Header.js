import { NavBar } from '../NavBar/NavBar';
import { NavLinks } from './NavLinks';
import { Logo } from '../Logo/Logo';

const Header = () => {
  return (
    <NavBar>
      <div
        style={{
          display: 'flex',
          height: 40,
          width: 593,
          alignItems: 'center',
          justifyContent: 'space-between',
          border: '1px solid black',
          gap: 32
        }}
      >
        <Logo>
        </Logo>
        <NavLinks/>
      </div>
    </NavBar>
  )
}

export { Header }

