import { Addon, Plan, PlanOption } from 'types';

export const addons: Addon[] = [
  {
    id: 'OnlineService',
    title: 'Online service',
    content: 'Access to multiplayer games',
    price: {
      Yearly: 10,
      Monthly: 1,
    },
    checked: false,
  },
  {
    id: 'LargerStorage',
    title: 'Larger storage',
    content: 'Extra 1TB of cloud save storage',
    price: { Yearly: 20, Monthly: 2 },
    checked: false,
  },
  {
    id: 'CustomizableProfile',
    title: 'Customizable profile',
    content: 'Custom theme on your profile',
    price: { Yearly: 20, Monthly: 2 },
    checked: false,
  },
];

export const plans: Plan[] = [
  {
    id: PlanOption.Arcade,
    img: '/images/icon-arcade.svg',
    price: {
      Yearly: 90,
      Monthly: 9,
    },
  },
  {
    id: PlanOption.Advanced,
    img: '/images/icon-advanced.svg',
    price: {
      Yearly: 120,
      Monthly: 12,
    },
  },
  {
    id: PlanOption.Pro,
    img: '/images/icon-pro.svg',
    price: {
      Yearly: 150,
      Monthly: 15,
    },
  },
];
