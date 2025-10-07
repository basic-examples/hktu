import { Fn } from '../Fn';
import { Invoke } from '../Invoke';
import { IfInvoking, Input } from '../utils';

export interface ForAllVariants<F extends Fn<unknown, unknown>>
  extends Fn<F['in'], F['out']> {
  out: IfInvoking<this, InvokeForAllVariants<F, Input<this>>, F['out']>;
}

export type InvokeForAllVariants<
  F extends Fn<unknown, unknown>,
  I extends F['in'],
> = I extends F['in'] ? Invoke<F, I> : never;
