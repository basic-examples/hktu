import { Fn } from '../Fn';
import { Result } from '../types';
import { IfInvoking, Input, Negate } from '../utils';

export interface IsErr<T, E> extends Fn<Result<T, E>, boolean> {
  out: IfInvoking<this, InvokeIsErr<T, E, Input<this>>, boolean>;
}

export type InvokeIsErr<T, E, In extends Result<T, E>> = Negate<In['ok']>;
