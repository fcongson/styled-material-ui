import { shallow } from 'enzyme'
import * as React from 'react'
import { CountrySelect } from './CountrySelect'

describe('CountrySelect', () => {
  it('Renders', () => {
    const countrySelect = shallow(<CountrySelect />)
    expect(countrySelect).toMatchSnapshot()
  })
})
