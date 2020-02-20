import * as React from 'react'
import { useState } from 'react'
import { CountrySelect } from './CountrySelect'

export default {
  title: 'Country Select',
  component: CountrySelect
}

export const Single = () => {
  const [value, setValue] = useState('ATA')
  return <CountrySelect value={value} onChange={value => setValue(value)} />
}

export const SingleWithLabel = () => {
  const [value, setValue] = useState()
  return <CountrySelect label={'Country'} value={value} onChange={value => setValue(value)} />
}

export const Multiple = () => {
  const [values, setValues] = useState(['ATA', 'GRL'])
  return <CountrySelect label={'Countries'} value={values} onChange={values => setValues(values)} multiple />
}

export const MultipleWithLabel = () => {
  const [values, setValues] = useState([])
  return <CountrySelect label={'Countries'} value={values} onChange={values => setValues(values)} multiple />
}
