export type IfHasRaw<
  This extends Record<Key, unknown>,
  Key extends string,
  Value extends Type,
  Type,
> = `${Key}_raw` extends keyof This ? Value : Type;
