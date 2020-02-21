import { shallow } from 'enzyme'
import * as React from 'react'
import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('Renders', () => {
    const checkbox = shallow(<Checkbox />)
    expect(checkbox).toMatchSnapshot()
  })
})
