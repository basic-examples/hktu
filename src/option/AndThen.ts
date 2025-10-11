import { Fn } from '../Fn';
import { Invoke } from '../Invoke';
import { Option, OptionSome } from '../types';
import { IfInvoking, Input } from '../utils';

export interface AndThen<T extends Fn<unknown, Option<unknown>>>
  extends Fn<Option<T['in']>, Option<T['out']['t']>> {
  out: IfInvoking<this, InvokeAndThen<T, Input<this>>, Option<T['out']['t']>>;
}

export type InvokeAndThen<
  T extends Fn<unknown, Option<unknown>>,
  In extends Option<T['in']>,
> = [In] extends [OptionSome<infer I, unknown>] ? Invoke<T, I> : In;
