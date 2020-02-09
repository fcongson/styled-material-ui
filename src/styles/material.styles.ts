import { withStyles } from '@material-ui/core'
import { palette } from './colors'
import { muiInput, muiSelect } from './global.styles'

export const MaterialStyles = withStyles({
  '@global': {
    '.MuiAutocomplete-inputRoot[class*="MuiInput-root"]': {
      ...muiSelect.size,
      ...muiSelect.spacing,
      ...muiSelect.text.input,
      '& .MuiAutocomplete-input:first-child': {
        ...muiSelect.size,
        ...muiSelect.spacing,
        ...muiSelect.text.input,
        paddingRight: 60
      },
      '&.multiple': {
        paddingRight: 64
      }
    },
    '.MuiInput-underline': {
      '&:not(.Mui-disabled):before, &:hover:not(.Mui-disabled):before': muiInput.underline.default,
      '&:after': muiInput.underline.focused
    },
    '.MuiAutocomplete-paper': muiSelect.options,
    '.MuiAutocomplete-listbox': muiSelect.text.option,
    '.MuiAutocomplete-option': {
      '& span.unchecked': {
        ...muiSelect.option.checkbox,
        border: `2px solid ${palette['grey-base']}`,
        backgroundColor: palette['grey-base']
      },
      '& span.checked': {
        ...muiSelect.option.checkbox,
        border: `2px solid ${palette['turquiose']}`,
        backgroundColor: palette['turquiose']
      },
      '&[data-focus="true"], &[aria-selected="true"]': {
        ...muiSelect.option.selected,
        '& span.unchecked': {
          border: `2px solid ${palette['turquiose']}`
        },
        '& span.checked': {
          border: `2px solid ${palette['turquiose']}`
        }
      },
      '&.multiple': {
        ...muiSelect.option.multiple,
        '& .MuiCheckbox-root': {
          padding: '4px 8px 4px 16px'
        },
        '& .MuiCheckbox-colorSecondary.Mui-checked:hover': {
          backgroundColor: 'transparent'
        }
      }
    },
    '.MuiIconButton-root': {
      '&:hover': muiSelect.icon.button,
      '& svg': muiSelect.icon.svg
    },
    '.MuiAutocomplete-clearIndicator': muiSelect.icon.button,
    '.MuiAutocomplete-popupIndicator': {
      ...muiSelect.icon.button,
      marginRight: 6
    },
    '.MuiTouchRipple-rippleVisible': muiSelect.icon.animation,
    '.MuiChip-root': {
      ...muiSelect.tag.root,
      '& svg': muiSelect.tag.svg
    },
    '.MuiChip-label': muiSelect.tag.label,
    '.MuiChip-deleteIcon': muiSelect.tag.delete
  }
})(() => null)
