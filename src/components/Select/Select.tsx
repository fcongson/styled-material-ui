import { Checkbox, ThemeProvider } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Close from '@material-ui/icons/Close'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Autocomplete from '@material-ui/lab/Autocomplete'
import * as React from 'react'
import { Checked, RemoveTag, Unchecked } from '../../icons'
import { theme } from '../../styles/material'

type SelectValue = string | string[]

type SelectOption = {
  label: string
  value: string
}

interface SelectProps<T extends SelectValue, U extends SelectOption> {
  label?: string
  placeholder?: string
  value?: T
  options?: U[]
  groupBy?: (option: U) => string
  onChange?: (value: T) => void | undefined
  multiple?: boolean
}

interface SelectSingleProps {
  label?: string
  placeholder?: string
  value?: string
  options?: {
    label: string
    value: string
  }[]
  groupBy?: (option: { label: string; value: string }) => string
  onChange?: (value: string) => void | undefined
  multiple?: false
}

interface SelectMultipleProps {
  label?: string
  placeholder?: string
  value?: string[]
  options?: {
    label: string
    value: string
  }[]
  groupBy?: (option: { label: string; value: string }) => string
  onChange?: (value: string[]) => void | undefined
  multiple: true
}

export const Select: <T extends SelectValue, U extends SelectOption>(props: SelectProps<T, U>) => JSX.Element = ({
  label,
  placeholder,
  value,
  options,
  groupBy,
  onChange,
  multiple,
  ...restProps
}) => (
  <ThemeProvider theme={theme}>
    {multiple ? (
      <SelectMultiple
        label={label}
        placeholder={placeholder}
        value={value as string[]}
        options={options}
        groupBy={groupBy}
        onChange={onChange as (value: string[]) => void | undefined}
        multiple
        {...restProps}
      />
    ) : (
      <SelectSingle
        label={label}
        placeholder={placeholder}
        value={value as string}
        options={options}
        groupBy={groupBy}
        onChange={onChange as (value: string) => void | undefined}
        {...restProps}
      />
    )}
  </ThemeProvider>
)

export const SelectSingle: React.FC<SelectSingleProps> = ({
  label,
  placeholder,
  value,
  options,
  groupBy,
  onChange,
  ...restProps
}) => (
  <Autocomplete
    value={options.find(option => option.value === value)}
    autoHighlight
    onChange={(event: any, value: any) => {
      if (!!onChange) onChange(value?.value ?? '')
    }}
    options={options}
    groupBy={groupBy}
    getOptionLabel={option => option?.label}
    getOptionSelected={(option, value) => option?.value === value?.value}
    renderInput={params => <TextField label={label} placeholder={placeholder} {...params} fullWidth />}
    popupIcon={<ExpandMore />}
    closeIcon={<Close />}
    {...restProps}
  />
)

export const SelectMultiple: React.FC<SelectMultipleProps> = ({
  label,
  placeholder,
  value,
  options,
  groupBy,
  onChange,
  ...restProps
}) => (
  <Autocomplete
    multiple
    disableCloseOnSelect
    value={value?.map(v => options.find(option => option.value === v))}
    onChange={(event, value) => {
      if (!!onChange) onChange(value.map(({ value }: { value: string }) => value))
    }}
    options={options}
    groupBy={groupBy}
    getOptionLabel={option => option?.label}
    getOptionSelected={(option, value) => option?.value === value?.value}
    renderOption={(option, { selected }) => (
      <>
        <Checkbox icon={Unchecked} checkedIcon={Checked} checked={selected} />
        {option?.label}
      </>
    )}
    renderInput={params => <TextField label={label} placeholder={placeholder} {...params} fullWidth />}
    popupIcon={<ExpandMore />}
    closeIcon={<Close />}
    ChipProps={{
      deleteIcon: RemoveTag
    }}
    classes={{ option: 'multiple', inputRoot: 'multiple' }}
    {...restProps}
  />
)
