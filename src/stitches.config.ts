import { createStitches } from "@stitches/react";
import {
  blue,
  cyan,
  teal,
  indigo,
  indigoDark,
  blueDark,
  cyanDark,
  tealDark,
  red,
  redDark,
  tomato,
  tomatoDark,
  mauve,
  mauveDark,
  blackA,
} from "@radix-ui/colors";

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  theme: {
    space: {
      0: "0px",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },
    sizes: {
      0: "0rem",
      none: " none",
      xs: " 20rem",
      sm: " 24rem",
      md: " 28rem",
      lg: " 32rem",
      xl: " 36rem",
      xl2: " 42rem",
      xl3: " 48rem",
      xl4: " 56rem",
      xl5: " 64rem",
      xl6: " 72rem",
      xl7: " 80rem",
      full: "100%",
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      xl2: "1.5rem",
      xl3: "1.875rem",
      xl4: "2.25rem",
      xl5: "3rem",
      xl6: "3.75rem",
      xl7: "4.5rem",
      xl8: "6rem",
      xl9: "8rem",
    },
    radii: {
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      xl2: "1rem",
      xl3: "1.5rem",
      full: "9999px",
    },
    zIndices: {
      1: "100",
      2: "200",
      3: "300",
      4: "400",
      max: "999",
    },
    fonts: {
      system: "system-ui",
    },
    colors: {
      ...indigo,
      ...blue,
      ...cyan,
      ...teal,
      ...red,
      ...tomato,
      ...mauve,
      ...blackA,

      //Aliases
      primaryBg: "$mauve1",
      secondaryBg: "$mauve2",
      primaryText: "$mauve12",
      secondarytext: "mauve11",
    },
  },
  utils: {
    p: (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (value: any) => ({
      paddingTop: value,
    }),
    pr: (value: any) => ({
      paddingRight: value,
    }),
    pb: (value: any) => ({
      paddingBottom: value,
    }),
    pl: (value: any) => ({
      paddingLeft: value,
    }),
    px: (value: any) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: any) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (value: any) => ({
      marginTop: value,
    }),
    mr: (value: any) => ({
      marginRight: value,
    }),
    mb: (value: any) => ({
      marginBottom: value,
    }),
    ml: (value: any) => ({
      marginLeft: value,
    }),
    mx: (value: any) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: any) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (value: any) => ({ textAlign: value }),

    fd: (value: any) => ({ flexDirection: value }),
    fw: (value: any) => ({ flexWrap: value }),

    ai: (value: any) => ({ alignItems: value }),
    ac: (value: any) => ({ alignContent: value }),
    jc: (value: any) => ({ justifyContent: value }),
    as: (value: any) => ({ alignSelf: value }),
    fg: (value: any) => ({ flexGrow: value }),
    fs: (value: any) => ({ flexShrink: value }),
    fb: (value: any) => ({ flexBasis: value }),

    bs: (value: any) => ({ boxShadow: value }),

    lh: (value: any) => ({ lineHeight: value }),

    ox: (value: any) => ({ overflowX: value }),
    oy: (value: any) => ({ overflowY: value }),

    pe: (value: any) => ({ pointerEvents: value }),
    us: (value: any) => ({ userSelect: value }),

    linearGradient: (value: any) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
  },
  media: {
    bp1: `@media (min-width: 520px)`,
    bp2: `@media (min-width: 900px)`,
    bp3: `@media (min-width: 1200px)`,
    bp4: `@media (min-width: 1800px)`,
    motion: `@media (prefers-reduced-motion)`,
    hover: `@media (hover: hover)`,
    dark: `@media (prefers-color-scheme: dark)`,
    light: `@media (prefers-color-scheme: light)`,
  },
});

export const darkTheme: { [key: string]: any } = createTheme({
  colors: {
    ...blueDark,
    ...tealDark,
    ...redDark,
    ...cyanDark,
    ...tomatoDark,
    ...mauveDark,
    ...indigoDark,

    primaryBg: "$mauve1",
    secondaryBg: "$mauve2",
    primaryText: "$mauve12",
    secondarytext: "mauve11",
  },
});

// https://rude.im/blog/dark-theme-with-stitches-and-next-js
export const globalStyles = globalCss({
  "@dark": {
    ":root:not(.light)": {
      ...Object.keys(darkTheme.colors).reduce((varSet, currentColorKey) => {
        const currentColor = darkTheme.colors[currentColorKey];
        const currentColorValue =
          currentColor.value.substring(0, 1) === "$"
            ? `colors${currentColor.value}`
            : currentColor.value;

        return {
          [currentColor.variable]: currentColorValue,
          ...varSet,
        };
      }, {}),
    },
  },
});
