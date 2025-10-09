import { Fn } from '../Fn';
import { IfInvoking, Input } from '../utils';

interface OmitFn<T, U extends keyof T> extends Fn<T, Omit<T, U>> {
  out: IfInvoking<this, InvokeOmit<T, U, Input<this>>, Omit<T, U>>;
}

export type InvokeOmit<T, U extends keyof T, Input extends T> = Omit<Input, U>;

export { OmitFn as Omit };
