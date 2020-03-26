import { shallow } from 'enzyme'
import * as React from 'react'
import { Tab } from './Tab'

describe('Tab', () => {
  it('Renders', () => {
    const tab = shallow(<Tab value='value' label='label' />)
    expect(tab).toMatchSnapshot()
  })
})
