import { Fn } from '../Fn';
import { Invoke } from '../Invoke';
import { Reducer } from '../types';
import { HandleNever, IfInvoking, Input } from '../utils';

export type ReducerFn<Item, Accumulator> = Fn<
  Reducer<Item, Accumulator>,
  Accumulator
>;

export interface Reduce<
  F extends ReducerFn<unknown, unknown>,
  InitialValue extends F['out'],
> extends Fn<F['in']['current'][], F['out']> {
  out: IfInvoking<this, InvokeReduce<F, InitialValue, Input<this>>, F['out']>;
}

export type InvokeReduce<
  F extends ReducerFn<unknown, unknown>,
  InitialValue extends F['out'],
  List extends F['in']['current'][],
> = List extends [
  infer First extends F['in']['current'],
  ...infer Rest extends F['in']['current'][],
]
  ? InvokeReduce<
      F,
      Invoke<F, Reducer<InitialValue, HandleNever<First, List[0]>>>,
      Rest
    >
  : InitialValue;
