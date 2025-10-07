import { Fn } from './Fn';
import { Invoke } from './Invoke';
import { IsNever } from './utils/IsNever';

export type Pipe<
  Value extends T1['in'],
  T1 extends Fn<unknown, unknown> = never,
  T2 extends Fn<T1['out'], unknown> = never,
  T3 extends Fn<T2['out'], unknown> = never,
  T4 extends Fn<T3['out'], unknown> = never,
  T5 extends Fn<T4['out'], unknown> = never,
  T6 extends Fn<T5['out'], unknown> = never,
  T7 extends Fn<T6['out'], unknown> = never,
  T8 extends Fn<T7['out'], unknown> = never,
  T9 extends Fn<T8['out'], unknown> = never,
  T10 extends Fn<T9['out'], unknown> = never,
  T11 extends Fn<T10['out'], unknown> = never,
  T12 extends Fn<T11['out'], unknown> = never,
  T13 extends Fn<T12['out'], unknown> = never,
  T14 extends Fn<T13['out'], unknown> = never,
  T15 extends Fn<T14['out'], unknown> = never,
  T16 extends Fn<T15['out'], unknown> = never,
  T17 extends Fn<T16['out'], unknown> = never,
  T18 extends Fn<T17['out'], unknown> = never,
  T19 extends Fn<T18['out'], unknown> = never,
  T20 extends Fn<T19['out'], unknown> = never,
  T21 extends Fn<T20['out'], unknown> = never,
  T22 extends Fn<T21['out'], unknown> = never,
  T23 extends Fn<T22['out'], unknown> = never,
  T24 extends Fn<T23['out'], unknown> = never,
  T25 extends Fn<T24['out'], unknown> = never,
  T26 extends Fn<T25['out'], unknown> = never,
  T27 extends Fn<T26['out'], unknown> = never,
  T28 extends Fn<T27['out'], unknown> = never,
  T29 extends Fn<T28['out'], unknown> = never,
  T30 extends Fn<T29['out'], unknown> = never,
  T31 extends Fn<T30['out'], unknown> = never,
  T32 extends Fn<T31['out'], unknown> = never,
  T33 extends Fn<T32['out'], unknown> = never,
  T34 extends Fn<T33['out'], unknown> = never,
  T35 extends Fn<T34['out'], unknown> = never,
  T36 extends Fn<T35['out'], unknown> = never,
  T37 extends Fn<T36['out'], unknown> = never,
  T38 extends Fn<T37['out'], unknown> = never,
  T39 extends Fn<T38['out'], unknown> = never,
  T40 extends Fn<T39['out'], unknown> = never,
  T41 extends Fn<T40['out'], unknown> = never,
  T42 extends Fn<T41['out'], unknown> = never,
> = IsNever<T42> extends false
  ? // prettier-ignore
    Invoke<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41>>
  : IsNever<T41> extends false
  ? // prettier-ignore
    Invoke<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40>>
  : IsNever<T40> extends false
  ? // prettier-ignore
    Invoke<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39>>
  : IsNever<T39> extends false
  ? // prettier-ignore
    Invoke<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38>>
  : IsNever<T38> extends false
  ? // prettier-ignore
    Invoke<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37>>
  : IsNever<T37> extends false
  ? // prettier-ignore
    Invoke<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36>>
  : IsNever<T36> extends false
  ? // prettier-ignore
    Invoke<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35>>
  : IsNever<T35> extends false
  ? // prettier-ignore
    Invoke<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34>>
  : IsNever<T34> extends false
  ? // prettier-ignore
    Invoke<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33>>
  : IsNever<T33> extends false
  ? // prettier-ignore
    Invoke<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32>>
  : IsNever<T32> extends false
  ? // prettier-ignore
    Invoke<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31>>
  : IsNever<T31> extends false
  ? // prettier-ignore
    Invoke<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30>>
  : IsNever<T30> extends false
  ? // prettier-ignore
    Invoke<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29>>
  : IsNever<T29> extends false
  ? // prettier-ignore
    Invoke<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28>>
  : IsNever<T28> extends false
  ? // prettier-ignore
    Invoke<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27>>
  : IsNever<T27> extends false
  ? // prettier-ignore
    Invoke<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26>>
  : IsNever<T26> extends false
  ? // prettier-ignore
    Invoke<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25>>
  : IsNever<T25> extends false
  ? // prettier-ignore
    Invoke<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24>>
  : IsNever<T24> extends false
  ? // prettier-ignore
    Invoke<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23>>
  : IsNever<T23> extends false
  ? // prettier-ignore
    Invoke<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22>>
  : IsNever<T22> extends false
  ? // prettier-ignore
    Invoke<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21>>
  : IsNever<T21> extends false
  ? // prettier-ignore
    Invoke<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20>>
  : IsNever<T20> extends false
  ? // prettier-ignore
    Invoke<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19>>
  : IsNever<T19> extends false
  ? // prettier-ignore
    Invoke<T42, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18>>
  : IsNever<T18> extends false
  ? // prettier-ignore
    Invoke<T17, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17>>
  : IsNever<T17> extends false
  ? // prettier-ignore
    Invoke<T17, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>>
  : IsNever<T16> extends false
  ? // prettier-ignore
    Invoke<T16, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>>
  : IsNever<T15> extends false
  ? // prettier-ignore
    Invoke<T15, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>>
  : IsNever<T14> extends false
  ? // prettier-ignore
    Invoke<T14, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>>
  : IsNever<T13> extends false
  ? Invoke<T13, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>>
  : IsNever<T12> extends false
  ? Invoke<T12, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>>
  : IsNever<T11> extends false
  ? Invoke<T11, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>>
  : IsNever<T10> extends false
  ? Invoke<T10, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8, T9>>
  : IsNever<T9> extends false
  ? Invoke<T9, Pipe<Value, T1, T2, T3, T4, T5, T6, T7, T8>>
  : IsNever<T8> extends false
  ? Invoke<T8, Pipe<Value, T1, T2, T3, T4, T5, T6, T7>>
  : IsNever<T7> extends false
  ? Invoke<T7, Pipe<Value, T1, T2, T3, T4, T5, T6>>
  : IsNever<T6> extends false
  ? Invoke<T6, Pipe<Value, T1, T2, T3, T4, T5>>
  : IsNever<T5> extends false
  ? Invoke<T5, Pipe<Value, T1, T2, T3, T4>>
  : IsNever<T4> extends false
  ? Invoke<T4, Pipe<Value, T1, T2, T3>>
  : IsNever<T3> extends false
  ? Invoke<T3, Pipe<Value, T1, T2>>
  : IsNever<T2> extends false
  ? Invoke<T2, Pipe<Value, T1>>
  : IsNever<T1> extends false
  ? Invoke<T1, Value>
  : Value;
