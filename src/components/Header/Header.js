import {
  NavLink,
  Router
} from "react-router-dom";

const Header = () => {
  return (
    <>
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
        Contact
      </NavLink>
    </>
  )
}

export { Header }

