import {ButtonStylesParams, DEFAULT_THEME, MantineThemeOverride,} from "@mantine/core";

const primaryColor = "#AA2525";

const sharedThemeStyles: MantineThemeOverride = {
  globalStyles: (theme) => ({
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },
    body: {
      height: "100vh",
      overflowY: "hidden",
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    },
    '#__next': {
      height: "100vh",
      overflowY: "hidden",
      overflowX: "hidden",
    }
  }),
  fontFamily: "Roboto",
  headings: {
    fontFamily: "Roboto",
    fontWeight: 400,
    sizes: {
      h1: {
        fontSize: "48px",
        fontWeight: 700,
        lineHeight: "54px",
      },
      h2: {
        fontSize: "40px",
        fontWeight: 500,
        lineHeight: "44px",
      },
      h3: {
        fontSize: "32px",
        fontWeight: 400,
        lineHeight: "36px",
      },
      h4: {
        fontSize: "28px",
        fontWeight: 300,
        lineHeight: "32px",
      },
      h5: {
        fontSize: "24px",
        fontWeight: 300,
        lineHeight: "28px",
      },
      h6: {
        fontSize: "20px",
        fontWeight: 300,
        lineHeight: "24px",
      },
    },
  },
// fontFamily: "Heijmans-BoldCon, sans-serif",
  primaryShade: 7,
  colors: {
    main: [
        "#E9D6D6",
        "#D9A9A9",
        "#D37A7A",
        "#D74848",
        "#E11616",
        "#AA2525",
        "#832C2C",
        "#662D2D",
        "#502B2B",
        "#402727",
    ]
  },
  primaryColor: "main",
  other: {
    primaryColor: primaryColor,
    maxWidth: 1800,
    components: {
      sidebar: {
        body:{
          dark: DEFAULT_THEME.colors.dark[6],
          light: DEFAULT_THEME.colors.gray[1],
        },
        links:{
          hover:{
            dark: DEFAULT_THEME.colors.dark[7],
            light: DEFAULT_THEME.colors.gray[2],
          }
        }
      },
    }
  },
  components: {
    Button: {
      styles: (theme, params: ButtonStylesParams) => {
        return ({
          root: {
            borderRadius: "5px",
          },
        });
      }
    },
  }
};

export const darkTheme: MantineThemeOverride = {
  colorScheme: "dark",
  ...sharedThemeStyles,
  other: {
    ...sharedThemeStyles.other,
  },
};

export const lightTheme: MantineThemeOverride = {
  colorScheme: "light",
  ...sharedThemeStyles,
  other: {
    ...sharedThemeStyles.other,
  },
};