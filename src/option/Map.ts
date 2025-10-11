import { Fn } from '../Fn';
import { Invoke } from '../Invoke';
import { Option, OptionSome } from '../types';
import { IfInvoking, Input } from '../utils';

export interface Map<T extends Fn<unknown, unknown>>
  extends Fn<Option<T['in']>, Option<T['out']>> {
  out: IfInvoking<this, InvokeMap<T, Input<this>>, Option<T['out']>>;
}

export type InvokeMap<
  T extends Fn<unknown, unknown>,
  In extends Option<T['in']>,
> = [In] extends [OptionSome<infer I, unknown>]
  ? OptionSome<Invoke<T, I>, T['out']>
  : In;
