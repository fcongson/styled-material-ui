import styled from '@emotion/styled'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { palette, spacing, transition } from '../../styles'
import { toggle as toggleStyle } from '../../styles/global.styles'

interface ToggleProps {
  label?: string
  value?: boolean
  onChange?: (value: boolean) => void
}

export const Toggle: React.FC<ToggleProps> = ({ label, value, onChange, ...restProps }) => {
  const [toggle, setToggle] = useState(value)

  useEffect(() => {
    setToggle(value)
  }, [value])

  return (
    <LabelContainer {...restProps}>
      {label}
      <ToggleContainer
        label={label}
        onClick={() => {
          const value = !toggle
          if (!!onChange) onChange(value)
          setToggle(value)
        }}>
        <ToggleTrack toggle={toggle}>
          <ToggleTrackText yes>Yes</ToggleTrackText>
          <ToggleTrackText>No</ToggleTrackText>
        </ToggleTrack>
        <ToggleSelector toggle={toggle} />
      </ToggleContainer>
    </LabelContainer>
  )
}

const LabelContainer = styled.div({
  ...toggleStyle.container,
  ...toggleStyle.text.label
})

const ToggleContainer = styled.div((props: { label?: string }) => ({
  width: `${spacing.xxl}px`,
  height: `${spacing.lg}px`,
  position: 'relative',
  marginLeft: !!props.label && `${spacing.md}px`,
  '&:hover': {
    cursor: 'pointer'
  }
}))

const ToggleTrack = styled.div((props: { toggle: boolean }) => ({
  ...toggleStyle.text.track,
  width: `${spacing.xxl}px`,
  height: `${spacing.lg}px`,
  borderRadius: `${spacing.md}px`,
  display: 'flex',
  justifyContent: 'space-between',
  alignitems: 'center',
  boxSizing: 'border-box',
  padding: '0px 8px 0px 8px',
  background: props.toggle ? palette['turquoise'] : palette['grey-base'],
  transition: transition
}))

const ToggleTrackText = styled.span((props: { yes?: boolean }) => ({
  display: 'flex',
  alignItems: 'center',
  color: props.yes && palette['white-base']
}))

const ToggleSelector = styled.div((props: { toggle: boolean }) => ({
  width: '24px',
  height: '24px',
  borderRadius: '12px',
  position: 'absolute',
  margin: '4px',
  top: '0px',
  background: props.toggle ? palette['white-base'] : palette['stone-base'],
  left: props.toggle ? '32px' : '0px',
  transition: transition
}))
