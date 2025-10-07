import { Fn } from '../Fn';
import { IfInvoking, Input } from '../utils';

export interface Prepend<P extends string> extends Fn<string, string> {
  out: IfInvoking<this, InvokePrepend<P, Input<this>>, string>;
}

export type InvokePrepend<P extends string, S extends string> = `${P}${S}`;
