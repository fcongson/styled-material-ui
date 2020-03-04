import * as React from 'react'
import { useState } from 'react'
import { Checkbox } from './Checkbox'

export default {
  title: 'Checkbox',
  component: Checkbox
}

export const Default = () => {
  const [checked, setChecked] = useState(false)
  return <Checkbox checked={checked} onChange={checked => setChecked(checked)} />
}

export const CheckboxWithLabel = () => {
  const [checked, setChecked] = useState(false)
  return <Checkbox label='Lorem ipsum dolor sit amet' checked={checked} onChange={checked => setChecked(checked)} />
}

export const CheckboxDisabled = () => {
  const [checked, setChecked] = useState(false)
  return (
    <Checkbox label='Lorem ipsum dolor sit amet' checked={checked} onChange={checked => setChecked(checked)} disabled />
  )
}
