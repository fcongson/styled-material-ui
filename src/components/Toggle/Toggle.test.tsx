import { shallow } from 'enzyme'
import * as React from 'react'
import { Toggle } from './Toggle'

describe('Toggle', () => {
  it('Renders', () => {
    const toggle = shallow(<Toggle />)
    expect(toggle).toMatchSnapshot()
  })
})
