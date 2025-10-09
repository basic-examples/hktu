import { Fn } from '../Fn';
import { Invoke } from '../Invoke';
import { IfInvoking, Input } from '../utils';

export type ToArrayInput<In, Out extends unknown[]> = {
  [K in keyof Out]: Fn<In, Out[K]>;
};

export interface ToArray<
  In,
  Out extends unknown[],
  Map extends ToArrayInput<In, Out>,
> extends Fn<In, Out> {
  out: IfInvoking<this, InvokeToArray<In, Out, Map, Input<this>>, Out>;
}

export type InvokeToArray<
  In,
  Out extends unknown[],
  Map extends ToArrayInput<In, Out>,
  Input extends In,
> = {
  [K in keyof Out]: Extract<Invoke<Map[K], Input>, Out[K]>;
};
