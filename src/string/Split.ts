import { Fn } from '../Fn';
import { IfInvoking, Input } from '../utils';

export interface Split<Separator extends string = never>
  extends Fn<string, string[]> {
  out: IfInvoking<this, InvokeSplit<Input<this>, Separator>, string[]>;
}

export type InvokeSplit<S extends string, Separator extends string> = [
  Separator,
] extends [never]
  ? InternalForNever<S, []>
  : InternalForSep<S, Separator, []>;

type InternalForNever<
  S extends string,
  Acc extends string[],
> = S extends `${infer First}${infer Rest}`
  ? InternalForNever<Rest, [...Acc, First]>
  : Acc;

type InternalForSep<
  S extends string,
  Separator extends string,
  Acc extends string[],
> = S extends `${infer First}${Separator}${infer Rest}`
  ? InternalForSep<Rest, Separator, [...Acc, First]>
  : [...Acc, S];
