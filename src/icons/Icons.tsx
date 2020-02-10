import Check from '@material-ui/icons/Check'
import Close from '@material-ui/icons/Close'
import * as React from 'react'
import { palette, transition } from '../styles'

export const Unchecked = (
  <span className='unchecked'>
    <Check
      style={{
        fill: palette['white-base'],
        padding: 2,
        transform: 'scale(0)',
        transition: transition
      }}
    />
  </span>
)

export const Checked = (
  <span className='checked'>
    <Check
      style={{
        fill: palette['white-base'],
        padding: 2,
        transform: 'scale(1)',
        transition: transition
      }}
    />
  </span>
)

export const RemoveTag = (
  <span
    style={{
      height: 16,
      width: 16,
      borderRadius: 8,
      backgroundColor: palette['white-base']
    }}>
    <Close />
  </span>
)
