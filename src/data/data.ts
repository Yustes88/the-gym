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
      link: 'https://web.facebook.com/search/top?q=the%20gym%20fitness%20center',
      id: randomId(),
      label: 'Facebook',
    },
  ]