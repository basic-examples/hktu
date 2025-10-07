import { Fn } from '../Fn';
import { IfInvoking, Input } from '../utils';

export interface WrapBox<T> extends Fn<T, [T]> {
  out: IfInvoking<this, [Input<this>], [T]>;
}
