export type TeamMembersTypes = {
  images: string[];
  name: string;
  title: string;
  quote: string;
  socials: [
    {facebook: string},
    {instagram: string},
    {tiktok? : string}
  ]
}