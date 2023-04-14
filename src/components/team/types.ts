export type TeamMembersTypes = {
  images: string[];
  name: string;
  title: string;
  quote: string;
  socials: SocialsTypes[]
}

export type SocialsTypes = {
  link: string,
  icon?: any,
  id: string,
  label: string,
}