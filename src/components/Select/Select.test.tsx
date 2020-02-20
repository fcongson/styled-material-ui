import { shallow } from 'enzyme'
import * as React from 'react'
import { Select } from './Select'

describe('Select', () => {
  it('Renders', () => {
    const select = shallow(<Select />)
    expect(select).toMatchSnapshot()
  })
})
