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
  ...toggleStyle.container,
  position: 'relative',
  marginLeft: !!props.label && `${spacing.md}px`
}))

const ToggleTrack = styled.div((props: { toggle: boolean }) => ({
  ...toggleStyle.text.track,
  ...toggleStyle.track,
  background: props.toggle ? palette['turquoise'] : palette['grey-base'],
  transition: transition
}))

const ToggleTrackText = styled.span((props: { yes?: boolean }) => ({
  ...toggleStyle.text.track,
  color: props.yes && palette['white-base']
}))

const ToggleSelector = styled.div((props: { toggle: boolean }) => ({
  ...toggleStyle.selector,
  background: props.toggle ? palette['white-base'] : palette['stone-base'],
  left: props.toggle ? '32px' : '0px',
  transition: transition
}))
