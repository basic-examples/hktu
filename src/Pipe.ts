import { Transformer } from './Transformer';
import { InvokeTransformer } from './Transformer/InvokeTransformer';
import { IsNever } from './util/IsNever';

export type Pipe<
  Value extends T1['input'],
  T1 extends Transformer<unknown, unknown> = never,
  T2 extends Transformer<T1['output'], unknown> = never,
  T3 extends Transformer<T2['output'], unknown> = never,
  T4 extends Transformer<T3['output'], unknown> = never,
  T5 extends Transformer<T4['output'], unknown> = never,
  T6 extends Transformer<T5['output'], unknown> = never,
  T7 extends Transformer<T6['output'], unknown> = never,
  T8 extends Transformer<T7['output'], unknown> = never,
  T9 extends Transformer<T8['output'], unknown> = never,
  T10 extends Transformer<T9['output'], unknown> = never,
  T11 extends Transformer<T10['output'], unknown> = never,
  T12 extends Transformer<T11['output'], unknown> = never,
  T13 extends Transformer<T12['output'], unknown> = never,
  T14 extends Transformer<T13['output'], unknown> = never,
  T15 extends Transformer<T14['output'], unknown> = never,
  T16 extends Transformer<T15['output'], unknown> = never,
  T17 extends Transformer<T16['output'], unknown> = never,
  T18 extends Transformer<T17['output'], unknown> = never,
  T19 extends Transformer<T18['output'], unknown> = never,
  T20 extends Transformer<T19['output'], unknown> = never,
  T21 extends Transformer<T20['output'], unknown> = never,
  T22 extends Transformer<T21['output'], unknown> = never,
  T23 extends Transformer<T22['output'], unknown> = never,
  T24 extends Transformer<T23['output'], unknown> = never,
  T25 extends Transformer<T24['output'], unknown> = never,
  T26 extends Transformer<T25['output'], unknown> = never,
  T27 extends Transformer<T26['output'], unknown> = never,
  T28 extends Transformer<T27['output'], unknown> = never,
  T29 extends Transformer<T28['output'], unknown> = never,
  T30 extends Transformer<T29['output'], unknown> = never,
  T31 extends Transformer<T30['output'], unknown> = never,
  T32 extends Transformer<T31['output'], unknown> = never,
  T33 extends Transformer<T32['output'], unknown> = never,
  T34 extends Transformer<T33['output'], unknown> = never,
  T35 extends Transformer<T34['output'], unknown> = never,
  T36 extends Transformer<T35['output'], unknown> = never,
  T37 extends Transformer<T36['output'], unknown> = never,
  T38 extends Transformer<T37['output'], unknown> = never,
  T39 extends Transformer<T38['output'], unknown> = never,
  T40 extends Transformer<T39['output'], unknown> = never,
  T41 extends Transformer<T40['output'], unknown> = never,
  T42 extends Transformer<T41['output'], unknown> = never,
> = IsNever<T42> extends false
  ? // prettier-ignore
    InvokeTransformer<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41>>
  : IsNever<T41> extends false
  ? // prettier-ignore
    InvokeTransformer<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40>>
  : IsNever<T40> extends false
  ? // prettier-ignore
    InvokeTransformer<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39>>
  : IsNever<T39> extends false
  ? // prettier-ignore
    InvokeTransformer<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38>>
  : IsNever<T38> extends false
  ? // prettier-ignore
    InvokeTransformer<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37>>
  : IsNever<T37> extends false
  ? // prettier-ignore
    InvokeTransformer<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36>>
  : IsNever<T36> extends false
  ? // prettier-ignore
    InvokeTransformer<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35>>
  : IsNever<T35> extends false
  ? // prettier-ignore
    InvokeTransformer<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34>>
  : IsNever<T34> extends false
  ? // prettier-ignore
    InvokeTransformer<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33>>
  : IsNever<T33> extends false
  ? // prettier-ignore
    InvokeTransformer<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32>>
  : IsNever<T32> extends false
  ? // prettier-ignore
    InvokeTransformer<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31>>
  : IsNever<T31> extends false
  ? // prettier-ignore
    InvokeTransformer<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30>>
  : IsNever<T30> extends false
  ? // prettier-ignore
    InvokeTransformer<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29>>
  : IsNever<T29> extends false
  ? // prettier-ignore
    InvokeTransformer<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28>>
  : IsNever<T28> extends false
  ? // prettier-ignore
    InvokeTransformer<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27>>
  : IsNever<T27> extends false
  ? // prettier-ignore
    InvokeTransformer<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26>>
  : IsNever<T26> extends false
  ? // prettier-ignore
    InvokeTransformer<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25>>
  : IsNever<T25> extends false
  ? // prettier-ignore
    InvokeTransformer<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24>>
  : IsNever<T24> extends false
  ? // prettier-ignore
    InvokeTransformer<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23>>
  : IsNever<T23> extends false
  ? // prettier-ignore
    InvokeTransformer<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22>>
  : IsNever<T22> extends false
  ? // prettier-ignore
    InvokeTransformer<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21>>
  : IsNever<T21> extends false
  ? // prettier-ignore
    InvokeTransformer<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20>>
  : IsNever<T20> extends false
  ? // prettier-ignore
    InvokeTransformer<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19>>
  : IsNever<T19> extends false
  ? // prettier-ignore
    InvokeTransformer<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18>>
  : IsNever<T18> extends false
  ? // prettier-ignore
    InvokeTransformer<T17, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17>>
  : IsNever<T17> extends false
  ? // prettier-ignore
    InvokeTransformer<T17, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>>
  : IsNever<T16> extends false
  ? // prettier-ignore
    InvokeTransformer<T16, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>>
  : IsNever<T15> extends false
  ? // prettier-ignore
    InvokeTransformer<T15, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>>
  : IsNever<T14> extends false
  ? // prettier-ignore
    InvokeTransformer<T14, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>>
  : IsNever<T13> extends false
  ? // prettier-ignore
    InvokeTransformer<T13, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>>
  : IsNever<T12> extends false
  ? // prettier-ignore
    InvokeTransformer<T12, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>>
  : IsNever<T11> extends false
  ? InvokeTransformer<T11, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>>
  : IsNever<T10> extends false
  ? InvokeTransformer<T10, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9>>
  : IsNever<T9> extends false
  ? InvokeTransformer<T9, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8>>
  : IsNever<T8> extends false
  ? InvokeTransformer<T8, Pipe<Value, T1, T2, T3, T4, T5, T6, T7>>
  : IsNever<T7> extends false
  ? InvokeTransformer<T7, Pipe<Value, T1, T2, T3, T4, T5, T6>>
  : IsNever<T6> extends false
  ? InvokeTransformer<T6, Pipe<Value, T1, T2, T3, T4, T5>>
  : IsNever<T5> extends false
  ? InvokeTransformer<T5, Pipe<Value, T1, T2, T3, T4>>
  : IsNever<T4> extends false
  ? InvokeTransformer<T4, Pipe<Value, T1, T2, T3>>
  : IsNever<T3> extends false
  ? InvokeTransformer<T3, Pipe<Value, T1, T2>>
  : IsNever<T2> extends false
  ? InvokeTransformer<T2, Pipe<Value, T1>>
  : IsNever<T1> extends false
  ? InvokeTransformer<T1, Value>
  : Value;
