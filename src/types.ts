export interface SystemCard {
  id: string;
  number: string;
  title: string;
  description: string;
  visualType: 'discovery' | 'campaigns' | 'landing' | 'crm' | 'analytics';
  visualLabel: string;
  tag: string;
}

export interface IdealClientCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TerritoryCheckResult {
  searchedLocation: string;
  isAvailable: boolean;
  statusText: string;
  details: string;
}
