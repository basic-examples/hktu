import { Fn } from '../Fn';
import { Invoke } from '../Invoke';
import { Result, ResultOk } from '../types';
import { IfInvoking, Input } from '../utils';

export interface AndThenEx<T extends Fn<unknown, Result<unknown, unknown>>, E>
  extends Fn<Result<T['in'], E>, Result<T['out']['t'], E | T['out']['e']>> {
  out: IfInvoking<
    this,
    InvokeAndThenEx<T, E, Input<this>>,
    Result<T['out']['t'], E | T['out']['e']>
  >;
}

export type InvokeAndThenEx<
  T extends Fn<unknown, Result<unknown, unknown>>,
  E,
  In extends Result<T['in'], E>,
> = [In] extends [ResultOk<infer I, unknown, unknown>] ? Invoke<T, I> : In;
