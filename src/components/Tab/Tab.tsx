import { Tab as MaterialTab, ThemeProvider } from '@material-ui/core'
import * as React from 'react'
import { theme } from '../../styles/material'

interface TabProps {
  value: string
  label: string
}

export const Tab: React.FC<TabProps> = ({ value, label, ...rest }) => (
  <ThemeProvider theme={theme}>
    <MaterialTab value={value} label={label} {...rest} />
  </ThemeProvider>
)
