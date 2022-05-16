const palette = {
  empty: "", // Fixes a bug with styled components that appends a coma
  // This variable is for capacitor use only, it represents the primary color.
  "primary-hex": "#4811d4",
  primary: "hsla(41, 97%, 54%, 1)",
  palidBlue: "#19306A",
  palidBlueLight: "#002CC7",
  palidBlueBorder: "#1353FF",
  palidGreen: "#DAF0D2",
  palidGray: "#E0E9F9",
  neutro: {
    custom: "#E1EAF3",
    custom2: "#F8FAFF",
    second1: "#CAE3FD",
    second2: "#F0F5FA",
    second3: "#B0C4D8",
    second4: "#BFD0E1",
    second5: "#CCDCEC",
    second6: "#B1B1CF",
    second7: "#D90AFC",
    second8: "#D9D9D9",
    second9: "#DEEFFF",
  },
  gray: {
    primary: "#0A427973",
    second1: "#3B546C",
    second2: "#6D87A0",
    second3: "#B0C4D8",
  },
  neon: "#00003C",
  neon2: "#1E00E6",
  borderColor: "#B0C4D8",
  grPrimary: {
    c1: "#01105B",
    c2: "#010028",
  },
  grSecond1: {
    c1: "#0857FC",
    c2: "#8E25FC",
    c3: "#D90AFC",
  },
  grSecond2: {
    c1: "#005AFF",
    c2: "#F000FF",
  },
  grSecond3: {
    c1: "#6F1AE3",
    c2: "#1D1BE8",
  },
  grCustom1: {
    c1: "#C1D8F9",
    c2: "#FBFCFE",
  },
  grCustom2: {
    c1: "#1B39A2",
    c2: "#020238",
    c3: "#367AA7",
  },
  red: "#FF003D",
  custom: "#559BFF",
  custom2: "#9BCDFF",
  // This variable is for capacitor use only, it represents the white color.
  "white-hex": "#ffffff",
  white: "hsla(0, 0%, 100%, 1)",
  text: {
    primary: "hsla(41, 97%, 54%, 1)",
    white: "hsla(0, 0%, 100%, 1)",
  },
  // Figma color's
  containerColor: "#001033",
  stateOk: "#00D8FF",
  statusFail: "#FF5F00",
  buttonColor: "#025AFF",
  textBlue: "#01003F",
  textPink: "#FF00FF",
  dark: "#000000",
  containerDetails: "#001952",
  borderColorBlue: "#1353FF",
  backgroundSubCell: "rgba(177, 177, 207, 0.3)",
  chipOrange: "#EA4335",
  chipAzul: "#00003B",
  chipSuccess: "#00DCB9",
  chipWarning: "#FBBC04",
  chipGrey: "#DFE0E8",
  colorDegraded: "#111F3D",
  colorDegradedTwo: "#2D374E",
  colorDegradedTree: "#595E69",
  colorDegradedFour: "#66668F",
  cardBodyColor: "#91A1BF",
  feriaColorBlue: "#0B152D",
  inputColorBlue: "rgba(25, 48, 106, 0.5)",
  colorBannerBlue: "rgba(25, 48, 106, 0.4);",
  colorBoxShadow: "rgba(99, 109, 156, 0.2)",
  cardButtonColor: "#636D9C",
  colorCardDegree: "rgba(145, 161, 191, 0.5);",
  colorButtonCard: "#00C8FB",
  colorImageGray: "#636d9c",
  colorImageGrayTwo: "rgba(99, 109, 156, 0)",
};

const fonts = {
  "Nova-Eb": ["Proxima Nova Eb"],
  "Nova-Rg": ["Proxima Nova Rg"],
  "Nova-Lt": ["Proxima Nova Lt"],
  "Nova-Sb": ["Proxima Nova Sb"],
};

const gradients = {
  primary:
    "linear-gradient(359.88deg, #01003F -10.29%, #010026 9.3%, #040D70 66.59%, #001252 103.58%)",
  second1:
    "linear-gradient(90deg, #005AFF 0%, #0757FF 9.3%, #1950FF 22.53%, #3845FF 38.12%, #6335FF 55.5%, #9A20FF 74.37%, #DB08FF 94.19%, #F000FF 100%)",
  second2:
    "linear-gradient(83.82deg, #001952 3.9%, #0524AD 37.51%, #0F53D0 52.66%, #6036FF 72.52%, #DB08FF 98.66%)",
  second3:
    "linear-gradient(50.2deg, #0A0A4C 12.64%, #3845FF 60.83%, #F000FF 101.71%)",
  custom1:
    "linear-gradient(260.35deg, #7B12F8 -0.32%, #00023A 44.68%, #000138 69.04%, #2854D6 101.33%)",
  custom2: "linear-gradient(0deg, #0B152D, #0B152D)",
  custom3: "linear-gradient(269.78deg, #F000FF -4.76%, #005AFF 106.64%)",
  custom4:
    "linear-gradient(10.3deg,rgba(25, 48, 106, 0)13.82%,rgba(25, 48, 106, 0.4) 95.73%)",
  custom5: "linear-gradient(0.29deg, #636D9C 3.68%, #000A58 116.38%);",
  custom6:
    "linear-gradient(0deg, rgba(145, 161, 191, 0.4), rgba(145, 161, 191, 0.4));",

  custom7: "linear-gradient(0deg, #0B152D, #0B152D);",
};

const sizes = {
  page: {
    minWidth:
      "calc(100vw - (100vw - 100%) - env(safe-area-inset-left) - env(safe-area-inset-right))",
    maxWidth:
      "calc(100vw - (100vw - 100%) - env(safe-area-inset-left) - env(safe-area-inset-right))",
    minHeight:
      "calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))",
    maxHeight:
      "calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))",
    columns:
      "minmax(1.6rem, 1fr) [content-start] minmax(0, 120rem) [content-end] minmax(1.6rem, 1fr)",
  },
  navbar: {
    height: "calc(7.6rem + env(safe-area-inset-top))",
    "height-mobile": "calc(10.8rem + env(safe-area-inset-top))",
    "height-mobile-without-search": "calc(5.8rem + env(safe-area-inset-top))",
  },
};

export const variables = { palette, fonts, gradients, sizes };
