export enum PlanType {
  Arcade = 'arcade',
  Advanced = 'advanced',
  Pro = 'pro',
}

export enum PlanFrequency {
  Yearly = 0,
  Monthly = 1,
}

// export type SelectedAddons = {
//   onlineService: boolean;
//   largerStorage: boolean;
//   customizableProfile: boolean;
// };

// export enum AddonType {
//   OnlineService = 'onlineService',
//   LargerStorage = 'largerStorage',
//   CustomizableProfile = 'customizableProfile',
// }
export type AddonName = 'OnlineService' | 'LargerStorage' | 'CustomizableProfile';
export type AddonType = Record<AddonName, boolean>;

// export type PersonalInfo = {
//   name: string,
//   email: string,
//   phone: string,
// }

export type PersonalInfo = 'name' | 'email' | 'phone';
export type PersonalInfoType = Record<PersonalInfo, string>;
