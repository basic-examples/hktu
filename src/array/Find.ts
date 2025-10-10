import { Fn } from '../Fn';
import { Invoke } from '../Invoke';
import { Result, ResultErr, ResultOk } from '../types';
import { HandleNever, IfInvoking, Input } from '../utils';

export interface Find<
  K extends Fn<unknown, boolean>,
  OnError extends OnErrorTypeConstraint = never,
  OnErrorTypeConstraint = OnError,
> extends Fn<K['in'][], Result<K['in'], OnErrorTypeConstraint>> {
  out: IfInvoking<
    this,
    InvokeFind<K, Input<this>, OnError, OnErrorTypeConstraint>,
    Result<K['in'], OnErrorTypeConstraint>
  >;
}

export type InvokeFind<
  K extends Fn<unknown, boolean>,
  List extends K['in'][],
  OnError extends OnErrorTypeConstraint = never,
  OnErrorTypeConstraint = OnError,
> = List extends [infer First extends K['in'], ...infer Rest extends K['in'][]]
  ? Invoke<K, HandleNever<First, List[0]>> extends true
    ? ResultOk<HandleNever<First, List[0]>, K['in'], OnErrorTypeConstraint>
    : InvokeFind<K, Rest>
  : ResultErr<OnError, K['in'], OnErrorTypeConstraint>;
