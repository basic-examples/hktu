import { Fn } from '../Fn';

export type Input<This extends Fn<unknown, unknown>> = This extends Record<
  'in_raw',
  infer I extends This['in']
>
  ? I
  : never;
