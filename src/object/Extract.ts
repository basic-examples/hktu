import { Fn } from '../Fn';
import { IfInvoking, Input } from '../utils';

interface ExtractFn<T, U> extends Fn<T, Extract<T, U>> {
  out: IfInvoking<this, InvokeExtract<T, U, Input<this>>, Extract<T, U>>;
}

export type InvokeExtract<T, U, Input extends T> = Extract<Input, U>;

export { ExtractFn as Extract };
