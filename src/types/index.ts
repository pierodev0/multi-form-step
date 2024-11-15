export enum PlanOption {
  Arcade = 'arcade',
  Advanced = 'advanced',
  Pro = 'pro',
}

export enum PlanFrequency {
  Yearly = 'Yearly',
  Monthly = 'Monthly',
}
type Price = { [K in keyof typeof PlanFrequency]: number };
export type Plan = {
  id: PlanOption;
  img: string;
  price: Price;
};
export type Addon = {
  id: string;
  title: string;
  content: string;
  price: Price;
  checked: boolean;
};
export type AddonFeature = 'OnlineService' | 'LargerStorage' | 'CustomizableProfile';
export type AddonType = Record<AddonFeature, boolean>;

export type PersonalInfo = 'name' | 'email' | 'phone';
export type PersonalInfoType = Record<PersonalInfo, string>;
