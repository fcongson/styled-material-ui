import React, { useState } from 'react'
import { Select } from './Select'

export default {
  title: 'Select',
  component: Select
}

export const Single = () => {
  const [value, setValue] = useState('lorem')
  const options = [
    { label: 'Lorem', value: 'lorem' },
    { label: 'Ipsum', value: 'ipsum' },
    { label: 'Dolor', value: 'dolor' },
    { label: 'Sit', value: 'sit' },
    { label: 'Amet', value: 'amet' }
  ]
  return <Select value={value} options={options} onChange={value => setValue(value)} />
}

export const SingleWithLabel = () => {
  const [value, setValue] = useState()
  const options = [
    { label: 'Lorem', value: 'lorem' },
    { label: 'Ipsum', value: 'ipsum' },
    { label: 'Dolor', value: 'dolor' },
    { label: 'Sit', value: 'sit' },
    { label: 'Amet', value: 'amet' }
  ]
  return <Select label={'Label'} value={value} options={options} onChange={value => setValue(value)} />
}

export const SingleWithPlaceholder = () => {
  const [value, setValue] = useState()
  const options = [
    { label: 'Lorem', value: 'lorem' },
    { label: 'Ipsum', value: 'ipsum' },
    { label: 'Dolor', value: 'dolor' },
    { label: 'Sit', value: 'sit' },
    { label: 'Amet', value: 'amet' }
  ]
  return <Select placeholder={'Placeholder'} value={value} options={options} onChange={value => setValue(value)} />
}

export const Multiple = () => {
  const [values, setValues] = useState(['lorem', 'ipsum'])
  const options = [
    { label: 'Lorem', value: 'lorem' },
    { label: 'Ipsum', value: 'ipsum' },
    { label: 'Dolor', value: 'dolor' },
    { label: 'Sit', value: 'sit' },
    { label: 'Amet', value: 'amet' }
  ]
  return <Select value={values} options={options} onChange={values => setValues(values)} multiple />
}

export const MultipleWithLabel = () => {
  const [values, setValues] = useState([])
  const options = [
    { label: 'Lorem', value: 'lorem' },
    { label: 'Ipsum', value: 'ipsum' },
    { label: 'Dolor', value: 'dolor' },
    { label: 'Sit', value: 'sit' },
    { label: 'Amet', value: 'amet' }
  ]
  return <Select label={'Label'} value={values} options={options} onChange={values => setValues(values)} multiple />
}

export const MultipleWithPlaceholder = () => {
  const [values, setValues] = useState([])
  const options = [
    { label: 'Lorem', value: 'lorem' },
    { label: 'Ipsum', value: 'ipsum' },
    { label: 'Dolor', value: 'dolor' },
    { label: 'Sit', value: 'sit' },
    { label: 'Amet', value: 'amet' }
  ]
  return (
    <Select
      placeholder={'Placeholder'}
      value={values}
      options={options}
      onChange={values => setValues(values)}
      multiple
    />
  )
}
