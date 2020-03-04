import { shallow } from 'enzyme'
import * as React from 'react'
import { Radio } from './Radio'

describe('Radio', () => {
  it('Renders', () => {
    const radio = shallow(<Radio />)
    expect(radio).toMatchSnapshot()
  })
})
