import { withStyles } from '@material-ui/core'
import { palette } from './colors'
import { icon, input, select, tag } from './global.styles'

export const MaterialStyles = withStyles({
  '@global': {
    '.MuiAutocomplete-inputRoot[class*="MuiInput-root"]': {
      ...input.size,
      ...input.spacing,
      ...input.text,
      '& .MuiAutocomplete-input:first-child': {
        ...input.size,
        ...input.spacing,
        ...input.text,
        paddingRight: 60
      },
      '&.multiple': {
        paddingRight: 64
      }
    },
    '.MuiInput-underline': {
      '&:not(.Mui-disabled):before, &:hover:not(.Mui-disabled):before': input.underline.default,
      '&:after': input.underline.focused
    },
    '.MuiAutocomplete-paper': select.options.container,
    '.MuiAutocomplete-listbox': select.options.item.text,
    '.MuiAutocomplete-option': {
      '& span.unchecked': {
        ...select.options.item.checkbox,
        border: `2px solid ${palette['grey-base']}`,
        backgroundColor: palette['grey-base']
      },
      '& span.checked': {
        ...select.options.item.checkbox,
        border: `2px solid ${palette['turquiose']}`,
        backgroundColor: palette['turquiose']
      },
      '&[data-focus="true"], &[aria-selected="true"]': {
        ...select.options.item.selected,
        '& span.unchecked': {
          border: `2px solid ${palette['turquiose']}`
        },
        '& span.checked': {
          border: `2px solid ${palette['turquiose']}`
        }
      },
      '&.multiple': {
        ...select.options.item.multiple,
        '& .MuiCheckbox-root': {
          padding: '4px 8px 4px 16px'
        },
        '& .MuiCheckbox-colorSecondary.Mui-checked:hover': {
          backgroundColor: 'transparent'
        }
      }
    },
    '.MuiIconButton-root': {
      '&:hover': icon.button,
      '& svg': icon.svg
    },
    '.MuiAutocomplete-clearIndicator': icon.button,
    '.MuiAutocomplete-popupIndicator': {
      ...icon.button,
      marginRight: 6
    },
    '.MuiTouchRipple-rippleVisible': icon.animation,
    '.MuiChip-root': {
      ...tag.root,
      '& svg': tag.svg
    },
    '.MuiChip-label': tag.label,
    '.MuiChip-deleteIcon': tag.delete
  }
})(() => null)
