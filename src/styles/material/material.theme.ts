import { createMuiTheme } from '@material-ui/core/styles'
import { paragraph } from '../../styles'
import { checkbox, icon, input, select, tag } from '../global.styles'

const muiPaper = {
  ...select.options.container,
  '& li': {
    ...select.options.item.text,
    '&[data-focus="true"], &[aria-selected="true"]': { ...select.options.item.selected },
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
  }
}

export const theme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat'
  },
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [paragraph]
      }
    },
    MuiIconButton: {
      root: {
        '&:hover': icon.button,
        '& svg': icon.svg
      }
    },
    MuiInput: {
      root: {
        ...input.size,
        ...input.spacing,
        ...input.text
      },
      underline: {
        '&:not(.Mui-disabled):before, &:hover:not(.Mui-disabled):before': input.underline.default,
        '&:after': input.underline.focused
      }
    },
    MuiTextField: {
      root: {
        '& .MuiAutocomplete-inputRoot[class*="MuiInput-root"] .MuiAutocomplete-input:first-child': {
          padding: 0
        }
      }
    },
    MuiInputLabel: {
      root: {
        ...input.text,
        ...input.label
      }
    },
    MuiInputAdornment: {
      root: {
        '& .MuiTypography-root': {
          ...input.text
        }
      }
    },
    MuiFormLabel: {
      root: {
        '&.Mui-focused': {
          ...input.text,
          ...input.label
        }
      }
    },
    MuiFormGroup: {
      root: {
        '& label:not(:last-of-type)': {
          paddingBottom: 8
        }
      }
    },
    MuiPaper: {
      root: muiPaper,
      rounded: muiPaper,
      outlined: muiPaper
    },
    MuiCheckbox: {
      root: {
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
          cursor: 'pointer',
          '& span.unchecked': {
            ...checkbox.focused
          }
        }
      },
      colorSecondary: {
        '&:hover': {
          backgroundColor: 'transparent'
        }
      }
    },
    MuiRadio: {
      root: {
        padding: '0 8px 0 0'
      },
      colorSecondary: {
        '&:hover': {
          backgroundColor: 'transparent !important'
        }
      }
    },
    MuiFormControlLabel: {
      root: {
        marginLeft: 0,
        marginRight: 0,
        '&.Mui-disabled': {
          cursor: 'not-allowed'
        }
      },
      label: {
        fontWeight: 500
      }
    },
    MuiChip: {
      root: { ...tag.root, '& svg': tag.svg },
      label: { ...tag.label },
      deleteIcon: { ...tag.delete }
    }
  }
})
