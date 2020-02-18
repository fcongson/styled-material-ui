import * as React from 'react'
import { shallow } from 'enzyme'
import { Select } from './Select'

describe('Select', () => {
  it('Renders', () => {
    const select = shallow(<Select />)
    expect(select).toMatchSnapshot()
  })
})
