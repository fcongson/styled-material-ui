import { withStyles } from '@material-ui/core'
import { checkbox, icon, input, select, tag } from '../global.styles'

const muiAutoComplete = {
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
  '.MuiAutocomplete-paper': select.options.container,
  '.MuiAutocomplete-listbox': select.options.item.text,
  '.MuiAutocomplete-option': {
    '& span.unchecked': {
      ...checkbox.default,
      ...checkbox.unchecked
    },
    '& span.checked': {
      ...checkbox.default,
      ...checkbox.checked
    },
    '&[data-focus="true"], &[aria-selected="true"]': {
      ...select.options.item.selected,
      '& span.unchecked': {
        ...checkbox.focused
      },
      '& span.checked': {
        ...checkbox.focused
      }
    },
    '&.multiple': {
      padding: 0,
      ...select.options.item.multiple,
      '& .MuiCheckbox-root': {
        padding: '4px 8px 4px 16px'
      },
      '& .MuiCheckbox-colorSecondary.Mui-checked:hover': {
        ...select.options.item.multiple
      }
    }
  },
  '.MuiAutocomplete-clearIndicator': icon.button,
  '.MuiAutocomplete-popupIndicator': {
    ...icon.button,
    marginRight: 6
  }
}

const muiInput = {
  '.MuiInput-underline': {
    '&:not(.Mui-disabled):before, &:hover:not(.Mui-disabled):before': input.underline.default,
    '&:after': input.underline.focused
  }
}

const muiIcon = {
  '.MuiIconButton-root': {
    '&:hover': icon.button,
    '& svg': icon.svg
  },
  '.MuiInputLabel-root': {
    ...input.text
  }
}

const muiTouchRipple = {
  '.MuiTouchRipple-rippleVisible': icon.animation
}

const muiChip = {
  '.MuiChip-root': {
    ...tag.root,
    '& svg': tag.svg
  },
  '.MuiChip-label': tag.label,
  '.MuiChip-deleteIcon': tag.delete
}

export const MaterialStyles = withStyles({
  '@global': {
    ...muiAutoComplete,
    ...muiInput,
    ...muiIcon,
    ...muiTouchRipple,
    ...muiChip
  }
})(() => null)