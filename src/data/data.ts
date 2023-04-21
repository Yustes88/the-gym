import { SocialsTypes } from "@/components/team/types";
import { randomId } from "@mantine/hooks";

export type HeaderItemsTypes = {
  link: string,
  label: string,
}


export const HeaderItems: HeaderItemsTypes[] =  [
    {
      "link": "/about",
      "label": "Features"
    },
    {
      "link": "/pricing",
      "label": "Pricing"
    },
    {
      "link": "/learn",
      "label": "Learn"
    },
    {
      "link": "/community",
      "label": "Community"
    }
  ];

  export const GymSocials: SocialsTypes[] = [
    {
      link: 'https://web.facebook.com/fitness.Studio.at.lampang',
      id: randomId(),
      label: 'Facebook',
    },
  ]