import { Fn } from '../Fn';
import { IfInvoking, Input } from '../utils';

export interface Append<P extends string> extends Fn<string, string> {
  out: IfInvoking<this, InvokeAppend<P, Input<this>>, string>;
}

export type InvokeAppend<P extends string, S extends string> = `${S}${P}`;
