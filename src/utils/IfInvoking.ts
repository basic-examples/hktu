import { Fn } from '../Fn';

export type IfInvoking<
  This extends Fn<unknown, unknown>,
  ActualType extends TypeForChecking,
  TypeForChecking,
> = 'in_raw' extends keyof This ? ActualType : TypeForChecking;
