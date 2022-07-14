import './Logo.css'
const Logo = (props) => {
  return (
    <img
      src={require("../../assets/Logo.png")}
      className={props.classStyle || 'defaultLogo'}
      alt="Conscious Logo"
    >
    </img>
  )
}

export { Logo }
