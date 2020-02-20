import React, { useState } from 'react'
import { Toggle } from './Toggle'

export default {
  title: 'Toggle',
  component: Toggle
}

export const Default = () => {
  const [value, setValue] = useState(false)
  return <Toggle value={value} onChange={value => setValue(value)} />
}

export const DefaultWithLabel = () => {
  const [value, setValue] = useState(false)
  return <Toggle label={'Label'} value={value} onChange={value => setValue(value)} />
}
