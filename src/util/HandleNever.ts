export type HandleNever<Inferred, Original> = [Original] extends [never]
  ? never
  : Inferred;
