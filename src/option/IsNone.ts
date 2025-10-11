import { Fn } from '../Fn';
import { Option } from '../types';
import { IfInvoking, Input, Negate } from '../utils';

export interface IsNone<T> extends Fn<Option<T>, boolean> {
  out: IfInvoking<this, InvokeIsNone<T, Input<this>>, boolean>;
}

export type InvokeIsNone<T, In extends Option<T>> = Negate<In['some']>;
