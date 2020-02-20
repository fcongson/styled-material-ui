import { shallow } from 'enzyme'
import React from 'react'
import { Toggle } from './Toggle'

describe('Toggle', () => {
  it('Renders', () => {
    const toggle = shallow(<Toggle />)
    expect(toggle).toMatchSnapshot()
  })
})
