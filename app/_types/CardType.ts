export interface CardData {
  imageUrl: string;
  title: string;
  date?: string;
  time?: string;
  location?: string;
  description: string;
  onRegister?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  facebookUsername?: string;
  twitterUsername?: string;
  instagramUsername?: string;
  linkedinUsername?: string;
}
