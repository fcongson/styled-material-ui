import React, { useState } from 'react'
import { CountrySelectMultiple } from './CountrySelect'

export default {
  title: 'Country Select Multiple',
  component: CountrySelectMultiple
}

export const Default = () => {
  const [values, setValues] = useState(['ATA'])
  return <CountrySelectMultiple value={values} onChange={values => setValues(values)} />
}
