import { Fn } from '../Fn';
import { Invoke } from '../Invoke';
import { Result, ResultErr } from '../types';
import { IfInvoking, Input } from '../utils';

export interface OrElse<T extends Fn<unknown, Result<unknown, unknown>>>
  extends Fn<
    Result<T['out']['t'], T['in']>,
    Result<T['out']['t'], T['out']['e']>
  > {
  out: IfInvoking<
    this,
    InvokeOrElse<T, Input<this>>,
    Result<T['out']['t'], T['out']['e']>
  >;
}

export type InvokeOrElse<
  T extends Fn<unknown, Result<unknown, unknown>>,
  In extends Result<T['out']['t'], T['in']>,
> = [In] extends [ResultErr<infer I, unknown, unknown>] ? Invoke<T, I> : In;
