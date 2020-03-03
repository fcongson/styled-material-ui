import { ThemeProvider } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import * as React from 'react'
import { theme } from '../../styles/material'

interface InputProps {
  name?: string
  label?: string
  value?: string
  defaultValue?: string
  placeholder?: string
  onChange?: (value: string) => void | undefined
  onBlur?: (value: string) => void | undefined
}

export const Input: React.FC<InputProps> = ({
  name,
  label,
  value,
  defaultValue,
  placeholder,
  onChange,
  onBlur,
  ...restProps
}) => (
  <ThemeProvider theme={theme}>
    <TextField
      name={name}
      label={label}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={event => {
        if (!!onChange) onChange(event.target.value)
      }}
      onBlur={event => {
        if (!!onBlur) onBlur(event.target.value)
      }}
      fullWidth
      {...restProps}
    />
  </ThemeProvider>
)
