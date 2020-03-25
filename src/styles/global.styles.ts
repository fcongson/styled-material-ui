import { transition } from './animations'
import { palette } from './colors'
import './fonts'
import { shadowLight } from './shadows'
import { spacing } from './spacing'

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
  label: {
    color: palette['stone-base']
  },
  text: {
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontWeight: 500,
    color: palette['black-base']
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
    boxSizing: 'border-box' as 'border-box',
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

// toggles

export const toggle = {
  label: {
    container: {
      display: 'flex',
      alignItems: 'center'
    }
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    width: `${spacing.xxl}px`,
    height: `${spacing.lg}px`,
    '&:hover': {
      cursor: 'pointer'
    }
  },
  track: {
    width: `${spacing.xxl}px`,
    height: `${spacing.lg}px`,
    borderRadius: `${spacing.md}px`,
    display: 'flex',
    justifyContent: 'space-between',
    alignitems: 'center',
    boxSizing: 'border-box' as 'border-box',
    padding: '0px 8px 0px 8px'
  },
  selector: {
    width: '24px',
    height: '24px',
    borderRadius: '12px',
    position: 'absolute' as 'absolute',
    margin: '4px',
    top: '0px'
  },
  text: {
    label: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '24px'
    },
    track: {
      display: 'flex',
      alignItems: 'center',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '18px'
    }
  }
}

// tabs

export const tab = {
  label: {
    selected: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '12px',
      lineHeight: '16px',
      color: palette['black-base']
    },
    unselected: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '16px',
      color: palette['stone-base']
    }
  },
  indicator: {
    height: 4,
    backgroundColor: palette['gold-base']
  },
  size: {
    height: 16
  },
  spacing: {
    paddingBottom: 8
  }
}
