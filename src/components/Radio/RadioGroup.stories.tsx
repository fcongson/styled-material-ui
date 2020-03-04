import * as React from 'react'
import { Radio } from './Radio'
import { RadioGroup } from './RadioGroup'
import { useState } from 'react'

export default {
  title: 'Radio Group',
  component: RadioGroup
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
