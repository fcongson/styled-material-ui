import TextField from '@material-ui/core/TextField'
import * as React from 'react'
import { MaterialStyles } from '../../styles/material'

interface InputProps {
  name?: string
  label?: string
  value?: string
  placeholder?: string
  onChange?: (value: string) => void | undefined
  onBlur?: (value: string) => void | undefined
}

export const Input: React.FC<InputProps> = ({ name, label, value, placeholder, onChange, onBlur, ...restProps }) => (
  <>
    <MaterialStyles />
    <TextField
      name={name}
      label={label}
      value={value}
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
  </>
)
