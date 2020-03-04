import { Checkbox as MaterialCheckbox, FormControlLabel, ThemeProvider } from '@material-ui/core'
import * as React from 'react'
import { Checked, Unchecked } from '../../icons'
import { theme } from '../../styles/material'

interface CheckboxProps {
  label?: string
  checked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, checked, disabled, onChange, ...rest }) => (
  <ThemeProvider theme={theme}>
    <FormControlLabel
      label={label}
      disabled={disabled}
      control={
        <MaterialCheckbox
          icon={Unchecked}
          checkedIcon={Checked}
          checked={checked}
          onChange={event => {
            if (!!onChange) onChange(event.target.checked)
          }}
        />
      }
      {...rest}
    />
  </ThemeProvider>
)
