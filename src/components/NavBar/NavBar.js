const NavBar = (props) => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: 80,
        background: '#F0FDF9',
        borderBottom: '1px solid #F2F4F7',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
        padding: '0px 32px',
      }}
    >
      {props.children}
    </div>
  )
}

export { NavBar }
