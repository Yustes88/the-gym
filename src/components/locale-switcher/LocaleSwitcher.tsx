import { Button } from '@mantine/core'
import { useRouter } from 'next/router'

const LocaleSwitcher = () => {
  const router = useRouter()
  const currentLocale = router.locale;

	return (
		<Button.Group>
			 <Button compact uppercase variant={currentLocale === 'th' ? 'filled' : 'default'}
      onClick={() => {
        router.push('/', '/', { locale: 'th' })
      }}
    >
      Th
    </Button>

			 <Button compact uppercase variant={currentLocale === 'en' ? 'filled' : 'default'}
      onClick={() => {
        router.push('/', '/', { locale: 'en' })
      }}
    >
      En
    </Button>
		</Button.Group>
	)
}


export default LocaleSwitcher;