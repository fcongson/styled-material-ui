import styled from '@emotion/styled'
import { Checkbox as MaterialCheckbox } from '@material-ui/core'
import * as React from 'react'
import { Checked, Unchecked } from '../../icons'
import { palette } from '../../styles'
import { MaterialStyles } from '../../styles/material'

interface CheckboxProps {
  label?: string
  checked?: boolean
  onChange?: (checked: boolean) => void
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => (
  <>
    <MaterialStyles />
    <LabelContainer>
      <MaterialCheckbox
        icon={Unchecked}
        checkedIcon={Checked}
        checked={checked}
        onChange={event => {
          if (!!onChange) onChange(event.target.checked)
        }}
      />
      {!!label && <Label>{label}</Label>}
    </LabelContainer>
  </>
)

const LabelContainer = styled.div({
  display: 'flex',
  alignItems: 'center'
})

const Label = styled.span({
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '20px',
  color: palette['black-base']
})
