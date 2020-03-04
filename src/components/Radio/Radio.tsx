import styled from '@emotion/styled'
import { FormControlLabel, Radio as MaterialRadio, ThemeProvider } from '@material-ui/core'
import * as React from 'react'
import { palette, transition } from '../../styles'
import { theme } from '../../styles/material'

interface RadioProps {
  label?: string
  value?: any
  disabled?: boolean
}

export const Radio: React.FC<RadioProps> = ({ label, value, disabled, ...rest }) => (
  <ThemeProvider theme={theme}>
    <FormControlLabel
      label={label}
      value={value}
      disabled={disabled}
      control={<MaterialRadio icon={<RadioIcon />} checkedIcon={<RadioIcon checked />} />}
      {...rest}
    />
  </ThemeProvider>
)

const RadioIcon = styled.span((props: { checked?: boolean }) => ({
  height: 32,
  width: 32,
  backgroundColor: props.checked ? palette['white'] : palette['grey-base'],
  border: props.checked ? `8px solid ${palette['turquoise']}` : '2px solid transparent',
  borderRadius: '50%',
  boxSizing: 'border-box',
  transition: transition,
  'input:hover ~ &': {
    backgroundColor: palette['white-base'],
    border: props.checked ? `8px solid ${palette['turquoise']}` : `2px solid ${palette['turquoise']}`
  },
  'input:disabled ~ &': {
    backgroundColor: palette['grey-base'],
    border: '8px solid transparent'
  }
}))
