import { Fn } from '../Fn';
import { Invoke } from '../Invoke';
import { IfInvoking, Input } from '../utils';

export type ToObjectInput<In, Out extends object> = {
  [K in keyof Out]: Fn<In, Out[K]>;
};

export interface ToObject<
  In,
  Out extends object,
  Map extends ToObjectInput<In, Out>,
> extends Fn<In, Out> {
  out: IfInvoking<this, InvokeToObject<In, Out, Map, Input<this>>, Out>;
}

export type InvokeToObject<
  In,
  Out extends object,
  Map extends ToObjectInput<In, Out>,
  Input extends In,
> = {
  [K in keyof Out]: Extract<Invoke<Map[K], Input>, Out[K]>;
};
