import { Fn } from '../Fn';
import { Invoke } from '../Invoke';
import { Result, ResultOk } from '../types';
import { IfInvoking, Input } from '../utils';

export interface Map<T extends Fn<unknown, unknown>, E>
  extends Fn<Result<T['in'], E>, Result<T['out'], E>> {
  out: IfInvoking<this, InvokeMap<T, E, Input<this>>, Result<T['out'], E>>;
}

export type InvokeMap<
  T extends Fn<unknown, unknown>,
  E,
  In extends Result<T['in'], E>,
> = [In] extends [ResultOk<infer I, unknown, unknown>]
  ? ResultOk<Invoke<T, I>, T['out'], E>
  : In;
