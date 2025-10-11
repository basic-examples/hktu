import { Fn } from '../Fn';
import { Option } from '../types';
import { IfInvoking, Input } from '../utils';

export interface IsSome<T> extends Fn<Option<T>, boolean> {
  out: IfInvoking<this, InvokeIsSome<T, Input<this>>, boolean>;
}

export type InvokeIsSome<T, In extends Option<T>> = In['some'];
