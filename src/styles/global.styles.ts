import { transition } from './animations'
import { palette } from './colors'
import './fonts'
import { shadowLight } from './shadows'

// inputs

export const input_text = {
  fontFamily: 'Montserrat',
  fontSize: '14px',
  fontWeight: 500
}
export const input_underline_default = { borderBottom: `1px solid ${palette['stone-lighter-40']}` }
export const input_underline_focused = { borderBottom: `1px solid ${palette['black-base']}` }
export const input_underline_transition = { transition: 'none' }
export const input_height = { minHeight: 28 }
export const input_spacing = { padding: 0 }

export const input = {
  text: {
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontWeight: 500
  },
  underline: {
    default: {
      transition: 'none',
      borderBottom: `1px solid ${palette['stone-lighter-40']}`
    },
    focused: {
      transition: 'none',
      borderBottom: `1px solid ${palette['black-base']}`
    }
  },
  size: {
    minHeight: 28
  },
  spacing: {
    padding: 0
  }
}

// selects

export const select = {
  options: {
    container: {
      borderRadius: 0,
      boxShadow: shadowLight.subtle
    },
    item: {
      text: {
        fontFamily: 'Montserrat',
        fontSize: '16px',
        fontWeight: 500
      },
      default: {
        backgroundColor: 'transparent',
        color: palette['black-base']
      },
      focused: {
        backgroundColor: palette['turquoise'],
        color: palette['white-base']
      },
      selected: {
        backgroundColor: palette['turquoise'],
        color: palette['white-base']
      },
      multiple: {
        backgroundColor: 'transparent',
        color: palette['black-base']
      }
    }
  }
}

// checkboxes

export const checkbox = {
  default: {
    height: 32,
    width: 32,
    boxSizing: 'border-box' as
      | '-moz-initial'
      | 'inherit'
      | 'initial'
      | 'revert'
      | 'unset'
      | 'border-box'
      | 'content-box'
      | undefined,
    borderRadius: 4,
    transition: transition
  },
  unchecked: {
    border: `2px solid ${palette['grey-base']}`,
    backgroundColor: palette['grey-base']
  },
  checked: {
    border: `2px solid ${palette['turquoise']}`,
    backgroundColor: palette['turquoise']
  },
  focused: {
    border: `2px solid ${palette['turquoise']}`
  }
}

// icons

export const icon = {
  button: {
    backgroundColor: 'transparent',
    color: palette['stone-base']
  },
  svg: {
    fill: palette['stone-base']
  },
  animation: {
    opacity: 0,
    animation: 'none',
    transform: 'none'
  }
}

// tags

export const tag = {
  root: {
    height: 24,
    backgroundColor: palette['black-base'],
    margin: '0px 16px 2px 0px'
  },
  svg: {
    fill: palette['black-base'],
    width: 12,
    height: 12,
    padding: '2px'
  },
  label: {
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontWeight: 400,
    color: palette['white-base']
  },
  delete: {
    width: '12px',
    height: '12px',
    margin: '0 4px 0 4px'
  }
}
