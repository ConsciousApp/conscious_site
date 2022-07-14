import './Logo.css'
const Logo = (props) => {
  return (
    <img
      src={require("../../assets/Logo.png")}
      className={props.classStyle || 'defaultLogo'}
      alt="Conscious Logo"
      height={props.height || 54}
      width={props.width || 253}
    >
    </img>
  )
}

export { Logo }
