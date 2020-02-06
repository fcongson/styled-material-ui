import { Checkbox, withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Close from "@material-ui/icons/Close";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Autocomplete from "@material-ui/lab/Autocomplete";
import * as React from "react";
import { Checked, RemoveTag, Unchecked } from "../../icons/Icons";
import { palette } from "../../styles/colors";
import { muiInput, muiSelect } from "../../styles/global.styles";
import { countries } from "./countries";

const mappedCountries: { label: string; value: string }[] = countries.map(
  country => ({
    label: country.name,
    value: country.alphaThree
  })
);

const mapCountry = (country?: string) => {
  const found = countries.filter(({ alphaThree }) => alphaThree === country)[0];
  return {
    label: found?.name ?? "",
    value: found?.alphaThree ?? ""
  };
};

interface CountrySelectProps {
  value?: string;
  onChange?: (value: string) => void | undefined;
}

export const CountrySelect: React.FC<CountrySelectProps> = ({
  value,
  onChange
}) => (
  <>
    <MaterialUiGlobalCss />
    <Autocomplete
      value={mapCountry(value)}
      autoHighlight
      onChange={(event: any, value: any) => {
        console.log(value);
        if (!!onChange) onChange(value?.value ?? "");
      }}
      options={mappedCountries}
      getOptionLabel={option => option.label}
      getOptionSelected={(option, value) => option.value === value.value}
      renderInput={params => <TextField {...params} fullWidth />}
      popupIcon={<ExpandMore />}
      closeIcon={<Close />}
    />
  </>
);

interface CountrySelectMultipleProps {
  value?: string[];
  onChange?: (value: string[]) => void | undefined;
}

export const CountrySelectMultiple: React.FC<CountrySelectMultipleProps> = ({
  value,
  onChange
}) => (
  <>
    <MaterialUiGlobalCss />
    <Autocomplete
      multiple
      disableCloseOnSelect
      value={value?.map(mapCountry)}
      onChange={(event, value) => {
        if (!!onChange)
          onChange(value.map(({ value }: { value: string }) => value));
      }}
      options={mappedCountries}
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

const MaterialUiGlobalCss = withStyles({
  "@global": {
    '.MuiAutocomplete-inputRoot[class*="MuiInput-root"]': {
      ...muiSelect.size,
      ...muiSelect.spacing,
      ...muiSelect.text.input,
      "& .MuiAutocomplete-input:first-child": {
        ...muiSelect.size,
        ...muiSelect.spacing,
        ...muiSelect.text.input,
        paddingRight: 60
      },
      "&.multiple": {
        paddingRight: 64
      }
    },
    ".MuiInput-underline": {
      "&:not(.Mui-disabled):before, &:hover:not(.Mui-disabled):before":
        muiInput.underline.default,
      "&:after": muiInput.underline.focused
    },
    ".MuiAutocomplete-paper": muiSelect.options,
    ".MuiAutocomplete-listbox": muiSelect.text.option,
    ".MuiAutocomplete-option": {
      "& span.unchecked": {
        ...muiSelect.option.checkbox,
        border: `2px solid ${palette["grey-base"]}`,
        backgroundColor: palette["grey-base"]
      },
      "& span.checked": {
        ...muiSelect.option.checkbox,
        border: `2px solid ${palette["turquioes"]}`,
        backgroundColor: palette["turquioes"]
      },
      '&[data-focus="true"], &[aria-selected="true"]': {
        ...muiSelect.option.selected,
        "& span.unchecked": {
          border: `2px solid ${palette["turquioes"]}`
        },
        "& span.checked": {
          border: `2px solid ${palette["turquioes"]}`
        }
      },
      "&.multiple": {
        ...muiSelect.option.multiple,
        "& .MuiCheckbox-root": {
          padding: "4px 8px 4px 16px"
        },
        "& .MuiCheckbox-colorSecondary.Mui-checked:hover": {
          backgroundColor: "transparent"
        }
      }
    },
    ".MuiIconButton-root": {
      "&:hover": muiSelect.icon.button,
      "& svg": muiSelect.icon.svg
    },
    ".MuiAutocomplete-clearIndicator": muiSelect.icon.button,
    ".MuiAutocomplete-popupIndicator": {
      ...muiSelect.icon.button,
      marginRight: 6
    },
    ".MuiTouchRipple-rippleVisible": muiSelect.icon.animation,
    ".MuiChip-root": {
      ...muiSelect.tag.root,
      "& svg": muiSelect.tag.svg
    },
    ".MuiChip-label": muiSelect.tag.label,
    ".MuiChip-deleteIcon": muiSelect.tag.delete
  }
})(() => null);
