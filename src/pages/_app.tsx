import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core'
import { CustomAppProps } from '../../page';
import { useLocalStorage } from '@mantine/hooks';
import { darkTheme, lightTheme } from '../../theme/theme';
import { appWithTranslation } from 'next-i18next'





function App({ Component, pageProps }: CustomAppProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'demo-color-scheme',
    defaultValue: 'dark',
    getInitialValueInEffect: true,
});

const toggleColorScheme = (value?: ColorScheme) =>
setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));


  const getLayout = Component.getLayout ?? ((page) => page);

  return(
    <MantineProvider
    theme={colorScheme === "light" ? lightTheme : darkTheme}
    withGlobalStyles withNormalizeCSS>
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
              {getLayout(<Component {...pageProps} />)}
    </ColorSchemeProvider>
</MantineProvider>
  )
}



export default appWithTranslation(App)
