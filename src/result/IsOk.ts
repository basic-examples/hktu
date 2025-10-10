import { Fn } from '../Fn';
import { Result } from '../types';
import { IfInvoking, Input } from '../utils';

export interface IsOk<T, E> extends Fn<Result<T, E>, boolean> {
  out: IfInvoking<this, InvokeIsOk<T, E, Input<this>>, boolean>;
}

export type InvokeIsOk<T, E, In extends Result<T, E>> = In['ok'];
