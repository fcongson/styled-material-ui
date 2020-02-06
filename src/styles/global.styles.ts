import { palette } from "./colors";
import "./fonts";

export const shadowLight = {
  subtle: "0px 4px 8px rgba(62, 67, 73, 0.2)",
  strong: "0px 8px 16px rgba(62, 67, 73, 0.25)",
  perspective: "0px 6px 12px rgba(62, 67, 73, 0.25)",
  distant: "0px 24px 32px rgba(62, 67, 73, 0.3)"
};

export const transition = "all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86) 0s";

export const muiInput = {
  underline: {
    default: {
      transition: "none",
      borderBottom: `1px solid ${palette["grey-base"]}`
    },
    focused: {
      transition: "none",
      borderBottom: `1px solid ${palette["black-base"]}`
    }
  }
};

export const muiSelect = {
  options: {
    borderRadius: 0,
    boxShadow: shadowLight.subtle
  },
  option: {
    default: {},
    focused: {
      backgroundColor: palette["turquioes"],
      color: palette["white-base"]
    },
    selected: {
      backgroundColor: palette["turquioes"],
      color: palette["white-base"]
    },
    checkbox: {
      height: 32,
      width: 32,
      boxSizing: "border-box" as
        | "-moz-initial"
        | "inherit"
        | "initial"
        | "revert"
        | "unset"
        | "border-box"
        | "content-box"
        | undefined,
      borderRadius: 4,
      transition: transition
    },
    multiple: {
      padding: 0,
      backgroundColor: "transparent",
      color: palette["black-base"]
    }
  },
  text: {
    input: {
      fontFamily: "Montserrat",
      fontSize: "14px",
      fontWeight: 500
    },
    option: {
      fontFamily: "Montserrat",
      fontSize: "16px",
      fontWeight: 500
    }
  },
  size: {
    minHeight: 28
  },
  spacing: {
    padding: 0
  },
  icon: {
    button: {
      backgroundColor: "transparent",
      color: palette["stone-base"]
    },
    svg: {
      fill: palette["stone-base"]
    },
    animation: {
      opacity: 0,
      animation: "none",
      transform: "none"
    }
  },
  tag: {
    root: {
      height: 24,
      backgroundColor: palette["black-base"],
      margin: "0px 16px 2px 0px"
    },
    svg: {
      fill: palette["black-base"],
      width: 12,
      height: 12,
      padding: "2px"
    },
    label: {
      fontFamily: "Montserrat",
      fontSize: "14px",
      fontWeight: 400,
      color: palette["white-base"]
    },
    delete: {
      width: "12px",
      height: "12px",
      margin: "0 4px 0 4px"
    }
  }
};
