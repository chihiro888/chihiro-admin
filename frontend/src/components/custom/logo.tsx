interface LogoProps {
  width: number
  height: number
  path: string
}

const Logo = (props: LogoProps) => {
  return (
    <>
      <img
        src={props.path}
        alt="logo"
        style={{ width: `${props.width}px`, height: `${props.height}px` }}
      />
    </>
  )
}

export default Logo
