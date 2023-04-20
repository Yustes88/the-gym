import { Button } from '@mantine/core'
import { useRouter } from 'next/router'

const LocaleSwitcher = () => {
  const router = useRouter()

	return (
		<div>
			 <Button compact uppercase variant='default'
      onClick={() => {
        router.push('/main', '/main', { locale: 'th' })
      }}
    >
      Thai
    </Button>

			 <Button compact uppercase
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