import { Fn } from '../Fn';
import { IfInvoking, Input } from '../utils';
import { InvokeLowercase } from './Lowercase';

export interface Uncapitalize extends Fn<string, string> {
  out: IfInvoking<this, InvokeUncapitalize<Input<this>>, string>;
}

export type InvokeUncapitalize<S extends string> =
  S extends `${infer First extends string}${infer Rest extends string}`
    ? `${InvokeLowercase<First>}${Rest}`
    : S;
