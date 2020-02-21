import * as React from 'react'
import { useState } from 'react'
import { MaterialStyles } from '../../styles/material'
import { Checkbox } from './Checkbox'

export default {
  title: 'Checkbox',
  component: Checkbox
}

export const Default = () => {
  const [checked, setChecked] = useState(false)
  return (
    <>
      <MaterialStyles />
      <Checkbox checked={checked} onChange={checked => setChecked(checked)} />
    </>
  )
}
