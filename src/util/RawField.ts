export type RawField<
  This extends Record<Key, unknown>,
  Key extends string,
> = This extends Record<`${Key}_raw`, infer I extends This[Key]> ? I : never;
