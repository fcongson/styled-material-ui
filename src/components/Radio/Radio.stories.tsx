import * as React from 'react'
import { Radio } from './Radio'
import { RadioGroup } from './RadioGroup'
import { useState } from 'react'

export default {
  title: 'Radio',
  component: Radio
}

export const Default = () => {
  const [value, setValue] = useState()
  return (
    <RadioGroup name='group' value={value} onChange={value => setValue(value)}>
      <Radio label='Lorem' value='Lorem' />
      <Radio label='Ipsum' value='Ipsum' />
      <Radio label='Dolor' value='Dolor' />
      <Radio label='Sit' value='Sit' />
      <Radio label='Amet' value='Amet' />
    </RadioGroup>
  )
}

export const Disabled = () => {
  const [value, setValue] = useState()
  return (
    <RadioGroup name='group' value={value} onChange={value => setValue(value)}>
      <Radio label='Lorem' value='Lorem' disabled />
      <Radio label='Ipsum' value='Ipsum' disabled />
      <Radio label='Dolor' value='Dolor' disabled />
      <Radio label='Sit' value='Sit' disabled />
      <Radio label='Amet' value='Amet' disabled />
    </RadioGroup>
  )
}
