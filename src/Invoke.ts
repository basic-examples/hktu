import { Fn } from './Fn';

export type Invoke<
  Function extends Fn<unknown, unknown>,
  Value extends Function['in'],
> = (Function & { in_raw: Value })['out'];
