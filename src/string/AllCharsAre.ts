import { Fn } from '../Fn';
import { Invoke } from '../Invoke';
import { IfInvoking, Input } from '../utils';

export interface AllCharsAre<K extends Fn<string, boolean>>
  extends Fn<string, boolean> {
  out: IfInvoking<this, AllCharsAreRaw<K, Input<this>>, boolean>;
}

export type AllCharsAreRaw<
  K extends Fn<string, boolean>,
  S extends string,
> = S extends `${infer FirstLetter extends string}${infer Rest extends string}`
  ? Invoke<K, FirstLetter> extends true
    ? AllCharsAreRaw<K, Rest>
    : false
  : true;
