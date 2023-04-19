import { JSXElementConstructor, ReactElement, ReactFragment, useEffect, useState } from 'react';
import {
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { HEADER_HEIGHT, useStyles } from '../header/styles';
import Logo from '../logo/Logo';
import { Translation, useTranslation } from 'next-i18next';
import { HeaderItemsTypes } from '@/data/data';




interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export function HeaderResponsive({ links }: HeaderResponsiveProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const [colorChange, setColorchange] = useState(false);
  const { t } = useTranslation('common');
  const { classes, cx } = useStyles();

 
  const nav: HeaderItemsTypes[] = (t('nav', {returnObjects: true}));
  console.log(nav)




  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);

    return () => window.removeEventListener('scroll', changeNavbarColor)
  })



     const items = nav.map((link) => (
      <a
        key={link.label}
        href={link.link}
        className={cx(classes.link, { [classes.linkActive]: active === link.link })}
        onClick={(event) => {
          event.preventDefault();
          setActive(link.link);
          close();
        }}
      >
        {link.label}
      </a>
    ));

  

  return (
    <Header height={HEADER_HEIGHT} className={colorChange ? cx(classes.root, classes.background) : classes.root}>
      <Container className={classes.header}>
        <Logo/>
        <Group spacing={8} className={classes.links}>
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} color='white' className={classes.burger} size="md" />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}