interface LogoProps {
  width: number
  height: number
}

const Logo = (props: LogoProps) => {
  const logoPath = '/images/logos/logo.png'

  return (
    <>
      <img
        src={logoPath}
        alt="logo"
        style={{ width: `${props.width}px`, height: `${props.height}px` }}
      />
    </>
  )
}

export default Logo
