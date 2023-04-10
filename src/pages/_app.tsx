import '@/styles/globals.css'
import { MantineProvider } from '@mantine/core'
import { CustomAppProps } from '../../page';

export default function App({ Component, pageProps }: CustomAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return(
    <MantineProvider
    withGlobalStyles withNormalizeCSS>
    {getLayout(<Component {...pageProps} />)}
</MantineProvider>
  )
}
