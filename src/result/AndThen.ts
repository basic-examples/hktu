import { Fn } from '../Fn';
import { Invoke } from '../Invoke';
import { Result, ResultOk } from '../types';
import { IfInvoking, Input } from '../utils';

export interface AndThen<T extends Fn<unknown, Result<unknown, unknown>>>
  extends Fn<
    Result<T['in'], T['out']['e']>,
    Result<T['out']['t'], T['out']['e']>
  > {
  out: IfInvoking<
    this,
    InvokeAndThen<T, Input<this>>,
    Result<T['out']['t'], T['out']['e']>
  >;
}

export type InvokeAndThen<
  T extends Fn<unknown, Result<unknown, unknown>>,
  In extends Result<T['in'], T['out']['e']>,
> = [In] extends [ResultOk<infer I, unknown, unknown>] ? Invoke<T, I> : In;
