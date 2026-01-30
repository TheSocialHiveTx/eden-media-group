
export interface Brand {
  id: string;
  name: string;
  mission: string;
  description: string;
  values: string[];
  tone: string;
  image: string;
  logoUrl?: string;
  externalLink: string;
}

export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}
