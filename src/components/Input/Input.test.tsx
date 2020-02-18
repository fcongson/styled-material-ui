import * as React from 'react'
import { shallow } from 'enzyme'
import { Input } from './Input'

describe('Input', () => {
  it('Renders', () => {
    const input = shallow(<Input />)
    expect(input).toMatchSnapshot()
  })
})
