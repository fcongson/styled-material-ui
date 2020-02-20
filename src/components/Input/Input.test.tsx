import { shallow } from 'enzyme'
import * as React from 'react'
import { Input } from './Input'

describe('Input', () => {
  it('Renders', () => {
    const input = shallow(<Input />)
    expect(input).toMatchSnapshot()
  })
})
