import WebFont from 'webfontloader'
import { palette } from './colors'

WebFont.load({
  google: {
    families: ['Montserrat:400,400i,500,500i,600,600i,700']
  }
})

export const title = [
  {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '36px',
    lineHeight: '40px'
  },
  {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '30px',
    lineHeight: '34px'
  }
]

export const header = [
  {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '28px',
    lineHeight: '32px'
  },
  {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: '27px'
  },
  {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '20px',
    lineHeight: '22px'
  }
]

export const subhead = [
  {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '20px'
  },
  {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '18px'
  },
  {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '16px'
  },
  {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '14px',
    textTransform: 'uppercase'
  }
]

export const subheadLight = [
  {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '20px'
  },
  {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '18px'
  },
  {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '16px'
  },
  {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '14px'
  }
]

export const paragraph = {
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '24px',
  color: palette['stone-base']
}

export const paragraphLink = {
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '16px',
  lineHeight: '24px',
  color: palette['blueHighlight']
}

export const paragraphSmall = {
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '20px',
  color: palette['stone-base']
}

export const paragraphLinkSmall = {
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '14px',
  lineHeight: '20px',
  color: palette['coralHighlight']
}

export const label = {
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '12px',
  lineHeight: '16px',
  color: palette['black-base']
}

export const labelHighlight = {
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '12px',
  lineHeight: '16px',
  color: palette['gold-base']
}

export const helpText = {
  primary: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '16px',
    color: palette['coral-base']
  },
  secondary: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '16px',
    color: palette['turquoise']
  }
}
