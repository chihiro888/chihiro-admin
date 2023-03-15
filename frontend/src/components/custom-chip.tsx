interface Props {
  label: string
  color: 'green' | 'blue' | 'purple' | 'orange' | 'red'
  fontSize?: number
}

const CustomChip = ({ label, color, fontSize }: Props) => {
  let colorStyle = ''
  let backgroundColorStyle = ''
  if (color === 'green') {
    colorStyle = 'rgb(27, 206, 107)'
    backgroundColorStyle = 'rgb(232, 250, 240)'
  } else if (color === 'blue') {
    colorStyle = 'rgb(21, 123, 255)'
    backgroundColorStyle = 'rgb(232, 242, 255)'
  } else if (color === 'purple') {
    colorStyle = 'rgb(109, 85, 255)'
    backgroundColorStyle = 'rgb(241, 238, 252)'
  } else if (color === 'orange') {
    colorStyle = 'rgb(255, 151, 0)'
    backgroundColorStyle = 'rgb(255, 245, 230)'
  } else if (color === 'red') {
    colorStyle = 'rgb(234, 71, 70)'
    backgroundColorStyle = 'rgb(253, 237, 237)'
  }

  return (
    <span
      style={{
        borderRadius: '8px',
        color: colorStyle,
        backgroundColor: backgroundColorStyle,
        border: '1px solid rgb(241, 238, 252)',
        padding: '8px',
        fontSize: fontSize
      }}
    >
      {label}
    </span>
  )
}

export default CustomChip
