import { Anchor, Group } from '@mantine/core';
import Logo from '../logo/Logo';
import { GymSocials, HeaderItemsTypes } from '@/data/data';
import { useTranslation } from 'next-i18next';
import { useStyles } from './styles';
import { Socials } from '../socials/Socials';


export function FooterCentered() {
  const { classes } = useStyles();
  const { t } = useTranslation('common')
  const nav: HeaderItemsTypes[] = (t('nav', {returnObjects: true}));

  
  const items = nav.map((link) => (
    <Anchor<'a'>
      color="dimmed"
      key={link.label}
      href={link.link}
      sx={{ lineHeight: 1 }}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Logo/>

        <Group className={classes.links}>{items}</Group>

        {GymSocials.map((social) => {
          return(<Socials key={social.id} social={social}/>)
        })}

      </div>
    </div>
  );
}