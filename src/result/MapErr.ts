import { Fn } from '../Fn';
import { Invoke } from '../Invoke';
import { Result, ResultErr } from '../types';
import { IfInvoking, Input } from '../utils';

export interface MapErr<T extends Fn<unknown, unknown>, V>
  extends Fn<Result<V, T['in']>, Result<V, T['out']>> {
  out: IfInvoking<this, InvokeMapErr<T, V, Input<this>>, Result<V, T['out']>>;
}

export type InvokeMapErr<
  T extends Fn<unknown, unknown>,
  V,
  In extends Result<V, T['in']>,
> = [In] extends [ResultErr<infer I, unknown, unknown>]
  ? ResultErr<Invoke<T, I>, V, T['out']>
  : In;
