import { Button } from '@mantine/core'
import { useRouter } from 'next/router'

const LocaleSwitcher = () => {
  const router = useRouter()
  const currentLocale = router.locale;

	return (
		<div>
			 <Button compact uppercase variant={currentLocale === 'th' ? 'filled' : 'default'}
      onClick={() => {
        router.push('/main', '/main', { locale: 'th' })
      }}
    >
      Thai
    </Button>

			 <Button compact uppercase variant={currentLocale === 'en' ? 'filled' : 'default'}
      onClick={() => {
        router.push('/main', '/main', { locale: 'en' })
      }}
    >
      Eng
    </Button>
		</div>
	)
}


export default LocaleSwitcher;