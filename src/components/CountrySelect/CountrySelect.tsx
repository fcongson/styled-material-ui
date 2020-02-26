import { Checkbox } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Close from '@material-ui/icons/Close'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Autocomplete from '@material-ui/lab/Autocomplete'
import * as React from 'react'
import { Checked, RemoveTag, Unchecked } from '../../icons'
import { MaterialStyles } from '../../styles/material'
import { countries } from './countries'

const countryOptions: { label: string; value: string }[] = countries.map(country => ({
  label: country.name,
  value: country.alphaThree
}))

const countryOption = (country?: string) => {
  const found = countries.filter(({ alphaThree }) => alphaThree === country)[0]
  return {
    label: found?.name ?? '',
    value: found?.alphaThree ?? ''
  }
}

type CountryValue = string | string[]

interface CountrySelectProps<T extends CountryValue> {
  label?: string
  value?: T
  onChange?: (value: T) => void | undefined
  multiple?: boolean
}

interface CountrySelectSingleProps {
  label?: string
  value?: string
  onChange?: (value: string) => void | undefined
  multiple?: false
}

interface CountrySelectMultipleProps {
  label?: string
  value?: string[]
  onChange?: (value: string[]) => void | undefined
  multiple: true
}

export const CountrySelect: <T extends CountryValue>(props: CountrySelectProps<T>) => JSX.Element = ({
  label,
  value,
  onChange,
  multiple,
  ...restProps
}) => (
  <>
    <MaterialStyles />
    {multiple ? (
      <CountrySelectMultiple
        label={label}
        value={value as string[]}
        onChange={onChange as (value: string[]) => void | undefined}
        multiple
        {...restProps}
      />
    ) : (
      <CountrySelectSingle
        label={label}
        value={value as string}
        onChange={onChange as (value: string) => void | undefined}
        {...restProps}
      />
    )}
  </>
)

export const CountrySelectSingle: React.FC<CountrySelectSingleProps> = ({ label, value, onChange, ...restProps }) => (
  <Autocomplete
    value={countryOption(value)}
    autoHighlight
    onChange={(event: any, value: any) => {
      if (!!onChange) onChange(value?.value ?? '')
    }}
    options={countryOptions}
    getOptionLabel={option => option.label}
    getOptionSelected={(option, value) => option.value === value.value}
    renderInput={params => <TextField label={label} {...params} fullWidth />}
    popupIcon={<ExpandMore />}
    closeIcon={<Close />}
    classes={{ input: 'styled', option: 'styled' }}
    {...restProps}
  />
)

export const CountrySelectMultiple: React.FC<CountrySelectMultipleProps> = ({
  label,
  value,
  onChange,
  ...restProps
}) => (
  <Autocomplete
    multiple
    disableCloseOnSelect
    value={value?.map(countryOption)}
    onChange={(event, value) => {
      if (!!onChange) onChange(value.map(({ value }: { value: string }) => value))
    }}
    options={countryOptions}
    getOptionLabel={option => option.label}
    getOptionSelected={(option, value) => option.value === value.value}
    renderOption={(option, { selected }) => (
      <>
        <Checkbox icon={Unchecked} checkedIcon={Checked} checked={selected} />
        {option.label}
      </>
    )}
    renderInput={params => <TextField label={label} {...params} fullWidth />}
    popupIcon={<ExpandMore />}
    closeIcon={<Close />}
    ChipProps={{
      deleteIcon: RemoveTag
    }}
    classes={{ input: 'styled', option: 'multiple', inputRoot: 'multiple' }}
    {...restProps}
  />
)
