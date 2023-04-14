import { Button, rem } from '@mantine/core';
import { SocialsTypes } from '../team/types';
import { IconBrandFacebook, IconBrandInstagram, IconBrandTiktok } from '@tabler/icons-react';

type SocialsProps = {
  social: SocialsTypes;
}

export function Socials({social}: SocialsProps) {

  const getButtonStyles = (link: string) => {
    switch (link) {
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
        styles={(theme) => ({
          root: {
            backgroundColor: theme.colors.red[7],
            border: 0,
            height: rem(42),
            paddingLeft: rem(20),
            paddingRight: rem(20),
            '&:not([data-disabled])': theme.fn.hover({
              backgroundColor: theme.fn.darken(theme.colors.red[8], 0.05),
            }),
          },

          leftIcon: {
            marginRight: theme.spacing.md,
          },
        })}
      >
        {getButtonStyles(social.label)}
      </Button>
  );
}