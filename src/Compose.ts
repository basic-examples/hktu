import { FilterTransformed } from './Filter/FilterTransformed';
import { IsAssignable } from './Filter/IsAssignable';
import { Not } from './Filter/Not';
import { Pipe } from './Pipe';
import { Transformer } from './Transformer';
import { ArrayMapRaw } from './Transformer/array/t1/array/t2/ArrayMap';
import { ArrayFindRaw } from './Transformer/array/t1/t1/ArrayFind';
import { InvokeTransformer } from './Transformer/InvokeTransformer';
import { WrapTuple } from './Transformer/t1/tuple1/t1/WrapTuple';
import { UnwrapTuple } from './Transformer/tuple1e/t1/t1/UnwrapTuple';
import { IfHasRaw } from './util/IfHasRaw';
import { RawField } from './util/RawField';

export interface Compose<
  K1 extends Transformer<unknown, unknown>,
  K2 extends Transformer<K1['output'], unknown> = never,
  K3 extends Transformer<K2['output'], unknown> = never,
  K4 extends Transformer<K3['output'], unknown> = never,
  K5 extends Transformer<K4['output'], unknown> = never,
  K6 extends Transformer<K5['output'], unknown> = never,
  K7 extends Transformer<K6['output'], unknown> = never,
  K8 extends Transformer<K7['output'], unknown> = never,
  K9 extends Transformer<K8['output'], unknown> = never,
  K10 extends Transformer<K9['output'], unknown> = never,
  K11 extends Transformer<K10['output'], unknown> = never,
  K12 extends Transformer<K11['output'], unknown> = never,
  K13 extends Transformer<K12['output'], unknown> = never,
  K14 extends Transformer<K13['output'], unknown> = never,
  K15 extends Transformer<K14['output'], unknown> = never,
  K16 extends Transformer<K15['output'], unknown> = never,
  K17 extends Transformer<K16['output'], unknown> = never,
  K18 extends Transformer<K17['output'], unknown> = never,
  K19 extends Transformer<K18['output'], unknown> = never,
  K20 extends Transformer<K19['output'], unknown> = never,
  K21 extends Transformer<K20['output'], unknown> = never,
  K22 extends Transformer<K21['output'], unknown> = never,
  K23 extends Transformer<K22['output'], unknown> = never,
  K24 extends Transformer<K23['output'], unknown> = never,
  K25 extends Transformer<K24['output'], unknown> = never,
  K26 extends Transformer<K25['output'], unknown> = never,
  K27 extends Transformer<K26['output'], unknown> = never,
  K28 extends Transformer<K27['output'], unknown> = never,
  K29 extends Transformer<K28['output'], unknown> = never,
  K30 extends Transformer<K29['output'], unknown> = never,
  K31 extends Transformer<K30['output'], unknown> = never,
  K32 extends Transformer<K31['output'], unknown> = never,
  K33 extends Transformer<K32['output'], unknown> = never,
  K34 extends Transformer<K33['output'], unknown> = never,
  K35 extends Transformer<K34['output'], unknown> = never,
  K36 extends Transformer<K35['output'], unknown> = never,
  K37 extends Transformer<K36['output'], unknown> = never,
  K38 extends Transformer<K37['output'], unknown> = never,
  K39 extends Transformer<K38['output'], unknown> = never,
  K40 extends Transformer<K39['output'], unknown> = never,
  K41 extends Transformer<K40['output'], unknown> = never,
  K42 extends Transformer<K41['output'], unknown> = never,
> extends Transformer<K1['input'], K2['output']> {
  output: 'input_raw' extends keyof this
    ? Pipe<
        RawField<this, 'input'>,
        K1,
        K2,
        K3,
        K4,
        K5,
        K6,
        K7,
        K8,
        K9,
        K10,
        K11,
        K12,
        K13,
        K14,
        K15,
        K16,
        K17,
        K18,
        K19,
        K20,
        K21,
        K22,
        K23,
        K24,
        K25,
        K26,
        K27,
        K28,
        K29,
        K30,
        K31,
        K32,
        K33,
        K34,
        K35,
        K36,
        K37,
        K38,
        K39,
        K40,
        K41,
        K42
      >
    : ArrayFindRaw<
        Not<
          FilterTransformed<
            Compose2<
              UnwrapTuple<[Transformer<unknown, unknown>, unknown]>,
              WrapTuple<Transformer<unknown, unknown>>
            >,
            IsAssignable<[Transformer<unknown, unknown>], [never]>
          >
        >,
        ArrayMapRaw<
          ToTupleWithOutput,
          [
            K42,
            K41,
            K40,
            K39,
            K38,
            K37,
            K36,
            K35,
            K34,
            K33,
            K32,
            K31,
            K30,
            K29,
            K28,
            K27,
            K26,
            K25,
            K24,
            K23,
            K22,
            K21,
            K20,
            K19,
            K18,
            K17,
            K16,
            K15,
            K14,
            K13,
            K12,
            K11,
            K10,
            K9,
            K8,
            K7,
            K6,
            K5,
            K4,
            K3,
            K2,
            K1,
          ]
        >
      > extends [unknown, infer I, ...unknown[]]
    ? I
    : never;
}

interface ToTupleWithOutput
  extends Transformer<
    Transformer<unknown, unknown>,
    [Transformer<unknown, unknown>, unknown]
  > {
  output: IfHasRaw<
    this,
    'input',
    [RawField<this, 'input'>, RawField<this, 'input'>['output']],
    [Transformer<unknown, unknown>, unknown]
  >;
}

interface Compose2<
  K1 extends Transformer<unknown, unknown>,
  K2 extends Transformer<K1['output'], unknown>,
> extends Transformer<K1['input'], K2['output']> {
  output: IfHasRaw<
    this,
    'input',
    InvokeTransformer<K2, InvokeTransformer<K1, RawField<this, 'input'>>>,
    K2['output']
  >;
}
