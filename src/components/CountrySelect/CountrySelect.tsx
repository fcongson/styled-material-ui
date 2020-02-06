import { Checkbox } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Close from "@material-ui/icons/Close";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Autocomplete from "@material-ui/lab/Autocomplete";
import * as React from "react";
import { MaterialStyles } from "../../styles/material.styles";
import { Checked, RemoveTag, Unchecked } from "../../icons/Icons";
import { countries } from "./countries";

const countryOptions: { label: string; value: string }[] = countries.map(
  country => ({
    label: country.name,
    value: country.alphaThree
  })
);

const countryOption = (country?: string) => {
  const found = countries.filter(({ alphaThree }) => alphaThree === country)[0];
  return {
    label: found?.name ?? "",
    value: found?.alphaThree ?? ""
  };
};

interface CountrySelectProps<T> {
  value?: T;
  onChange?: (value: T) => void | undefined;
}

export const CountrySelect: React.FC<CountrySelectProps<string>> = ({
  value,
  onChange
}) => (
  <>
    <MaterialStyles />
    <Autocomplete
      value={countryOption(value)}
      autoHighlight
      onChange={(event: any, value: any) => {
        if (!!onChange) onChange(value?.value ?? "");
      }}
      options={countryOptions}
      getOptionLabel={option => option.label}
      getOptionSelected={(option, value) => option.value === value.value}
      renderInput={params => <TextField {...params} fullWidth />}
      popupIcon={<ExpandMore />}
      closeIcon={<Close />}
    />
  </>
);

export const CountrySelectMultiple: React.FC<CountrySelectProps<string[]>> = ({
  value,
  onChange
}) => (
  <>
    <MaterialStyles />
    <Autocomplete
      multiple
      disableCloseOnSelect
      value={value?.map(countryOption)}
      onChange={(event, value) => {
        if (!!onChange)
          onChange(value.map(({ value }: { value: string }) => value));
      }}
      options={countryOptions}
      getOptionLabel={option => option.label}
      getOptionSelected={(option, value) => option.value === value.value}
      renderOption={(option, { selected }) => (
        <>
          <Checkbox
            icon={Unchecked}
            checkedIcon={Checked}
            style={{}}
            checked={selected}
          />
          {option.label}
        </>
      )}
      renderInput={params => <TextField {...params} fullWidth />}
      popupIcon={<ExpandMore />}
      closeIcon={<Close />}
      ChipProps={{
        deleteIcon: RemoveTag
      }}
      classes={{ option: "multiple", inputRoot: "multiple" }}
    />
  </>
);
