import { Fn } from '../Fn';
import { IfInvoking, Input } from '../utils';

interface PickFn<T, U extends keyof T> extends Fn<T, Pick<T, U>> {
  out: IfInvoking<this, InvokePick<T, U, Input<this>>, Pick<T, U>>;
}

export type InvokePick<T, U extends keyof T, Input extends T> = Pick<Input, U>;

export { PickFn as Pick };
