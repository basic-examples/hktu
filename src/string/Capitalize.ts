import { Fn } from '../Fn';
import { IfInvoking, Input } from '../utils';
import { InvokeUppercase } from './Uppercase';

export interface Capitalize extends Fn<string, string> {
  out: IfInvoking<this, InvokeCapitalize<Input<this>>, string>;
}

export type InvokeCapitalize<S extends string> =
  S extends `${infer First extends string}${infer Rest extends string}`
    ? `${InvokeUppercase<First>}${Rest}`
    : S;
