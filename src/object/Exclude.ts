import { Fn } from '../Fn';
import { IfInvoking, Input } from '../utils';

interface ExcludeFn<T, U> extends Fn<T, Exclude<T, U>> {
  out: IfInvoking<this, InvokeExclude<T, U, Input<this>>, Exclude<T, U>>;
}

export type InvokeExclude<T, U, Input extends T> = Exclude<Input, U>;

export { ExcludeFn as Exclude };
