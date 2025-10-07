import { Fn } from '../Fn';
import { IfInvoking, Input } from '../utils';

export interface UnwrapBox<T extends [unknown, ...unknown[]]>
  extends Fn<T, T[0]> {
  out: IfInvoking<this, Input<this>, T[0]>;
}
