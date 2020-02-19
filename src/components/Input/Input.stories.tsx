import React, { useState } from 'react'
import { Input } from './Input'

export default {
  title: 'Input',
  component: Input
}

export const TextInput = () => {
  const [value, setValue] = useState('Lorem ipsum')
  return <Input value={value} onChange={value => setValue(value)} />
}

export const TextInputWithLabel = () => {
  const [value, setValue] = useState()
  return <Input label={'Label'} value={value} onChange={value => setValue(value)} />
}

export const TextInputWithPlaceholder = () => {
  const [value, setValue] = useState()
  return <Input placeholder={'Placeholder'} value={value} onChange={value => setValue(value)} />
}

export const TextInputWithUncontrolledValue = () => <Input defaultValue={'Lorem ipsum'} />
