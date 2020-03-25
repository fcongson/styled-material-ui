import * as React from 'react'
import { useState } from 'react'
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

export const SingleGrouped = () => {
  const [value, setValue] = useState('apple')
  /**
   * Note:
   *
   * the order of the options need to match the order of the groupBy
   *
   * in this case we have
   *
   *  Fruits
   *    - Apple
   *    - Mango
   *    - Grape
   *
   *  Veggies
   *    - Cucumber
   *    - Capsicum
   */
  const options = [
    { label: 'Apple', value: 'apple' },
    { label: 'Mango', value: 'mango' },
    { label: 'Grape', value: 'grape' },
    { label: 'Cucumber', value: 'cucumber' },
    { label: 'Capsicum', value: 'capsicum' }
  ]
  const fruits = ['apple', 'mango', 'grape']
  const veggies = ['cucumber', 'capsicum']
  const groupBy = (option: { label: string; value: string }) => {
    if (fruits.includes(option.value)) return 'Fruits'
    if (veggies.includes(option.value)) return 'Veggies'
  }
  return <Select value={value} options={options} groupBy={groupBy} onChange={value => setValue(value)} />
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

export const MultipleGrouped = () => {
  const [value, setValue] = useState(['apple'])
  /**
   * Note:
   *
   * the order of the options need to match the order of the groupBy
   *
   * in this case we have
   *
   *  Fruits
   *    - Apple
   *    - Mango
   *    - Grape
   *
   *  Veggies
   *    - Cucumber
   *    - Capsicum
   */
  const options = [
    { label: 'Apple', value: 'apple' },
    { label: 'Mango', value: 'mango' },
    { label: 'Grape', value: 'grape' },
    { label: 'Cucumber', value: 'cucumber' },
    { label: 'Capsicum', value: 'capsicum' }
  ]
  const fruits = ['apple', 'mango', 'grape']
  const veggies = ['cucumber', 'capsicum']
  const groupBy = (option: { label: string; value: string }) => {
    if (fruits.includes(option.value)) return 'Fruits'
    if (veggies.includes(option.value)) return 'Veggies'
  }
  return <Select value={value} options={options} groupBy={groupBy} onChange={value => setValue(value)} multiple />
}
