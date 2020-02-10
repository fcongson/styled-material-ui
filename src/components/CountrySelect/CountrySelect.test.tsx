import * as React from 'react'
import { shallow } from 'enzyme'
import { CountrySelect } from './CountrySelect'

describe('CountrySelect', () => {
  it('Renders', () => {
    const countrySelect = shallow(<CountrySelect />)
    expect(countrySelect).toMatchSnapshot()
  })
})
