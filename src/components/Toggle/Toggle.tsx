/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useEffect, useState } from 'react'
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
    <div css={{ ...toggleStyle.container, ...toggleStyle.text.label }} {...restProps}>
      {label}
      <div
        css={style}
        onClick={() => {
          const value = !toggle
          onChange(value)
          setToggle(value)
        }}>
        <div css={[css(toggleStyle.text.track), options, toggle ? optionsYes : optionsNo]}>
          <span
            css={{
              display: 'flex',
              alignItems: 'center',
              color: palette['white-base']
            }}>
            Yes
          </span>
          <span
            css={{
              display: 'flex',
              alignItems: 'center'
            }}>
            No
          </span>
        </div>
        <div css={[selected, toggle ? selectedYes : selectedNo]}></div>
      </div>
    </div>
  )
}

const style = css({
  width: `${spacing.xxl}px`,
  height: `${spacing.lg}px`,
  position: `relative`,
  marginLeft: `${spacing.md}px`,
  '&:hover': {
    cursor: 'pointer'
  }
})

const options = css({
  width: `${spacing.xxl}px`,
  height: `${spacing.lg}px`,
  borderRadius: `${spacing.md}px`,
  display: 'flex',
  justifyContent: 'space-between',
  alignitems: 'center',
  boxSizing: 'border-box',
  padding: '0px 8px 0px 8px'
})

const optionsYes = css({
  background: palette['turquoise'],
  transition: transition
})

const optionsNo = css({
  background: palette['grey-base'],
  transition: transition
})

const selected = css({
  width: '24px',
  height: '24px',
  borderRadius: '12px',
  position: 'absolute',
  margin: '4px',
  top: '0px'
})

const selectedYes = css({
  background: palette['white-base'],
  left: '32px',
  transition: transition
})

const selectedNo = css({
  background: palette['stone-base'],
  left: '0px',
  transition: transition
})
