import { Tabs as MaterialTabs, ThemeProvider } from '@material-ui/core'
import * as React from 'react'
import { theme } from '../../styles/material'

interface TabsProps {
  value: string
  onChange: (value: string) => void
}

export const Tabs: React.FC<TabsProps> = ({ value, onChange, children, ...rest }) => (
  <ThemeProvider theme={theme}>
    <MaterialTabs
      value={value}
      onChange={(event, value) => {
        if (!!onChange) onChange(value)
      }}
      {...rest}>
      {children}
    </MaterialTabs>
  </ThemeProvider>
)
