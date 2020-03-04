import { shallow } from 'enzyme'
import * as React from 'react'
import { RadioGroup } from './RadioGroup'

describe('RadioGroup', () => {
  it('Renders', () => {
    const radioGroup = shallow(<RadioGroup onChange={() => {}} />)
    expect(radioGroup).toMatchSnapshot()
  })
})
