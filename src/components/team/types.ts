export type TeamMembersTypes = {
  images: string[];
  name: string;
  title: string;
  quote: string;
  socials: SocialsTypes[]
  id: string,
}

export type SocialsTypes = {
  link: string,
  id: string,
  label: string,
}