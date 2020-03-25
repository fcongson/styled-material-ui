import * as React from 'react'
import { useState } from 'react'
import { Tab } from './Tab'
import { Tabs } from './Tabs'

export default {
  title: 'Tab',
  component: Tab
}

export const Default = () => {
  const [value, setValue] = useState('lorem')
  return (
    <Tabs
      value={value}
      onChange={value => {
        setValue(value)
      }}>
      <Tab value='lorem' label='Lorem' />
      <Tab value='ipsum' label='Ipsum' />
      <Tab value='dolor' label='Dolor' />
    </Tabs>
  )
}
