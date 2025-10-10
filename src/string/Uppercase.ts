import { Map } from '../array';
import { Join } from '../array/Join';
import { Fn } from '../Fn';
import { I } from '../I';
import { If } from '../If';
import { Pipe } from '../Pipe';
import { IfInvoking, Input } from '../utils';
import { IsLowerAlpha } from './IsLowerAlpha';
import { Split } from './Split';

interface UppercaseFn extends Fn<string, string> {
  out: IfInvoking<this, InvokeUppercase<Input<this>>, string>;
}

export type InvokeUppercase<S extends string> = Pipe<
  S,
  Split,
  Map<If<IsLowerAlpha, Internal, I<string>>>,
  Join
>;

interface Internal extends Fn<string, string> {
  out: IfInvoking<this, InvokeInternal<Input<this>>, string>;
}

type InvokeInternal<S extends string> = Uppercase<S>;

export { UppercaseFn as Uppercase };
