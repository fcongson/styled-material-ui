import { Checkbox as MaterialCheckbox } from '@material-ui/core'
import * as React from 'react'
import { Checked, Unchecked } from '../../icons'

interface CheckboxProps {
  label?: string
  checked?: boolean
  onChange?: (checked: boolean) => void
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => (
  <MaterialCheckbox
    icon={Unchecked}
    checkedIcon={Checked}
    checked={checked}
    onChange={event => {
      if (!!onChange) onChange(event.target.checked)
    }}
  />
)
