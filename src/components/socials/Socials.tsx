import { Button, rem } from '@mantine/core';
import { SocialsTypes } from '../team/types';
import { IconBrandFacebook, IconBrandInstagram, IconBrandTiktok } from '@tabler/icons-react';
import { useStyles } from './styles';

type SocialsProps = {
  social: SocialsTypes;
}

export function Socials({social}: SocialsProps) {
  const {classes} = useStyles();


  const getButtonStyles = (type: string) => {
    switch (type) {
        case 'Facebook':{
            return <IconBrandFacebook size={rem(18)} />
        }
        case 'Instagram':{
          return <IconBrandInstagram size={rem(18)} />
        }
        case 'TikTok' : {
          return <IconBrandTiktok size={rem(18)} />
        }
    }
  }


  return (
      <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href={social.link}
        className={classes.root}
      >
        {getButtonStyles(social.label)}
      </Button>
  );
}