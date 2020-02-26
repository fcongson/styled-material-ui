import { withStyles } from '@material-ui/core'
import { checkbox, icon, input, select, tag } from '../global.styles'

const muiAutoComplete = {
  '.MuiAutocomplete-inputRoot[class*="MuiInput-root"]': {
    ...input.size,
    ...input.spacing,
    ...input.text,
    '& .MuiAutocomplete-input.styled:first-child': {
      ...input.size,
      ...input.spacing,
      ...input.text
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
    '&.styled[data-focus="true"], &.styled[aria-selected="true"]': {
      ...select.options.item.selected,
      '& span.unchecked': {
        ...checkbox.focused
      },
      '& span.checked': {
        ...checkbox.focused
      }
    },
    '&.multiple, &.multiple[data-focus="true"], &.multiple[aria-selected="true"]': {
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
  },
  '.MuiInputLabel-root': {
    ...input.text
  },
  '.MuiInput-input': {
    ...input.text
  },
  '.MuiInputAdornment-root': {
    '& .MuiTypography-root': {
      ...input.text
    }
  }
}

const muiForm = {
  '.MuiFormLabel-root': {
    '&.Mui-focused': {
      ...input.label
    }
  }
}

const muiIcon = {
  '.MuiIconButton-root': {
    '&:hover': icon.button,
    '& svg': icon.svg
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

const muiCheckbox = {
  '.MuiCheckbox-root': {
    padding: 0,
    '& span.unchecked': {
      ...checkbox.default,
      ...checkbox.unchecked
    },
    '& span.checked': {
      ...checkbox.default,
      ...checkbox.checked
    },
    '&:hover': {
      '& span.unchecked': {
        ...checkbox.focused
      }
    },
    '& .MuiTouchRipple-root': {
      '& .MuiTouchRipple-rippleVisible': icon.animation
    }
  },
  '.MuiCheckbox-colorSecondary.Mui-checked:hover': {
    backgroundColor: 'transparent'
  }
}

export const MaterialStyles = withStyles({
  '@global': {
    ...muiAutoComplete,
    ...muiInput,
    ...muiForm,
    ...muiIcon,
    ...muiTouchRipple,
    ...muiChip,
    ...muiCheckbox
  }
})(() => null)
