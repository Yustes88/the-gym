import { IconBrandFacebook, IconBrandInstagram, IconBrandTiktok, IconBrandTwitter } from "@tabler/icons-react";
import { TeamMembersTypes } from "./types";
import { randomId } from "@mantine/hooks";

export const TeamMembers: TeamMembersTypes[] = [
  {
    images: ["team/boat/boat-1.jpg", "team/boat/boat-2.jpg", "team/boat/boat-3.jpg", "team/boat/boat-4.jpg"],
    name: "Kanisond Sinma (Boat)",
    title: "Personal trainer, model, influencer",
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    socials: [
      {
        link: '/',
        icon: IconBrandFacebook,
        id: randomId(),
        label: 'Facebook',
      },
      {
        link: '/',
        icon: IconBrandInstagram,
        id: randomId(),
        label: 'Instagram',
      },
      {
        link: '/',
        icon: IconBrandTiktok,
        id: randomId(),
        label: 'TikTok',
      },
      
    ]
  }
]