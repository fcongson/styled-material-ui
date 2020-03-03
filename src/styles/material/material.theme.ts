import { createMuiTheme } from '@material-ui/core/styles'
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
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  },
  overrides: {
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
    MuiChip: {
      root: { ...tag.root, '& svg': tag.svg },
      label: { ...tag.label },
      deleteIcon: { ...tag.delete }
    }
  }
})
