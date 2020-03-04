import { RadioGroup as MaterialRadioGroup, ThemeProvider } from '@material-ui/core'
import * as React from 'react'
import { theme } from '../../styles/material'

interface RadioGroupProps {
  name?: string
  value?: any
  onChange: (value: any) => void
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ name, value, onChange, children, ...rest }) => (
  <ThemeProvider theme={theme}>
    <MaterialRadioGroup
      name={name}
      value={value}
      onChange={event => {
        if (!!onChange) onChange(event.target.value)
      }}
      {...rest}>
      {children}
    </MaterialRadioGroup>
  </ThemeProvider>
)
