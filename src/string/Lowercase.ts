import { Map } from '../array';
import { Join } from '../array/Join';
import { Fn } from '../Fn';
import { I } from '../I';
import { If } from '../If';
import { Pipe } from '../Pipe';
import { IfInvoking, Input } from '../utils';
import { IsLowerAlpha } from './IsLowerAlpha';
import { Split } from './Split';

interface LowercaseFn extends Fn<string, string> {
  out: IfInvoking<this, InvokeLowercase<Input<this>>, string>;
}

export type InvokeLowercase<S extends string> = Pipe<
  S,
  Split,
  Map<If<IsLowerAlpha, Internal, I<string>>>,
  Join
>;

interface Internal extends Fn<string, string> {
  out: IfInvoking<this, InvokeInternal<Input<this>>, string>;
}

type InvokeInternal<S extends string> = Lowercase<S>;

export { LowercaseFn as Lowercase };
