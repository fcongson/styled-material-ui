import TextField from '@material-ui/core/TextField'
import * as React from 'react'
import { MaterialStyles } from '../../styles/material'

interface InputProps {
  label?: string
  value?: string
  placeholder?: string
  onChange?: (value: string) => void | undefined
}

export const Input: React.FC<InputProps> = ({ label, value, placeholder, onChange, ...restProps }) => (
  <>
    <MaterialStyles />
    <TextField
      label={label}
      value={value}
      placeholder={placeholder}
      onChange={event => onChange(event.target.value)}
      fullWidth
      {...restProps}
    />
  </>
)
