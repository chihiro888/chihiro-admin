// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Slider from '@mui/material/Slider'

const valuetext = (value: number) => {
  return `${value}°C`
}

const minDistance = 10

const SliderMinimumDistance = () => {
  // ** States
  const [value1, setValue1] = useState<number[]>([20, 37])
  const [value2, setValue2] = useState<number[]>([20, 37])

  const handleChange1 = (event: Event, newValue: number | number[], activeThumb: number) => {
    if (!Array.isArray(newValue)) {
      return
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]])
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)])
    }
  }

  const handleChange2 = (event: Event, newValue: number | number[], activeThumb: number) => {
    if (!Array.isArray(newValue)) {
      return
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance)
        setValue2([clamped, clamped + minDistance])
      } else {
        const clamped = Math.max(newValue[1], minDistance)
        setValue2([clamped - minDistance, clamped])
      }
    } else {
      setValue2(newValue as number[])
    }
  }

  return (
    <div>
      <Slider
        disableSwap
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay='auto'
        getAriaValueText={valuetext}
        getAriaLabel={() => 'Minimum distance'}
      />
      <Slider
        disableSwap
        value={value2}
        onChange={handleChange2}
        valueLabelDisplay='auto'
        getAriaValueText={valuetext}
        getAriaLabel={() => 'Minimum distance shift'}
      />
    </div>
  )
}

export default SliderMinimumDistance
