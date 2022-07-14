import {
  NavLink,
} from "react-router-dom";

const NavLinks = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 0,
        gap: 32,
        width: 300,
        height: 32,
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 24,
        fontStyle: 'normal',
        color: '#3538CD'
      }}
    >
    <NavLink
      to="/"
      className={isActive =>
        "nav-link" + (!isActive ? " unselected" : "")
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/about"
      className={isActive =>
        "nav-link" + (!isActive ? " unselected" : "")
      }
    >
      About
    </NavLink>

    <NavLink
      to="/contact"
      className={isActive =>
        "nav-link" + (!isActive ? " unselected" : "")
      }
    >
      Work with us
    </NavLink>
    </div>
  )
}

export { NavLinks }
