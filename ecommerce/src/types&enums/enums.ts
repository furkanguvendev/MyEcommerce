export const Roles = {
  Admin: 1,
  Store: 2,
  Customer: 3,
} as const;

export type Roles = typeof Roles[keyof typeof Roles];
