import './Logo.css'
const Logo = (props) => {
  return (
    <img
      src={require("../../assets/Logo.png")}
      className={props.classStyle || 'defaultLogo'}
      alt="Conscious Logo"
      height={props.height || 253}
      width={props.width || 54}
    >
    </img>
  )
}

export { Logo }
