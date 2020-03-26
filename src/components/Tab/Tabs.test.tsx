import { shallow } from 'enzyme'
import * as React from 'react'
import { Tabs } from './Tabs'

describe('Tabs', () => {
  it('Renders', () => {
    const tabs = shallow(<Tabs value='value' onChange={value => {}} />)
    expect(tabs).toMatchSnapshot()
  })
})
