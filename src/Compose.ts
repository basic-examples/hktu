import { Pipe } from './Pipe';
import { Transformer } from './Transformer';
import { IfHasRaw } from './util/IfHasRaw';
import { IsNever } from './util/IsNever';
import { RawField } from './util/RawField';

export interface Compose2<
  K1 extends Transformer<unknown, unknown>,
  K2 extends Transformer<K1['output'], unknown>,
> extends Transformer<K1['input'], K2['output']> {
  output: IfHasRaw<
    this,
    'input',
    Compose2Raw<K1, K2, RawField<this, 'input'>>,
    K2['output']
  >;
}

export type Compose2Raw<
  K1 extends Transformer<unknown, unknown>,
  K2 extends Transformer<K1['output'], unknown>,
  Input extends K1['input'],
> = Pipe<Input, K1, K2>;

export type Compose<
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
> = IsNever<K26> extends false
  ? // prettier-ignore
    Compose2<Compose<K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17, K18, K19, K20, K21, K22, K23, K24, K25>, K26>
  : IsNever<K25> extends false
  ? // prettier-ignore
    Compose2<Compose<K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17, K18, K19, K20, K21, K22, K23, K24>, K25>
  : IsNever<K24> extends false
  ? // prettier-ignore
    Compose2<Compose<K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17, K18, K19, K20, K21, K22, K23>, K24>
  : IsNever<K23> extends false
  ? // prettier-ignore
    Compose2<Compose<K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17, K18, K19, K20, K21, K22>, K23>
  : IsNever<K22> extends false
  ? // prettier-ignore
    Compose2<Compose<K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17, K18, K19, K20, K21>, K22>
  : IsNever<K21> extends false
  ? // prettier-ignore
    Compose2<Compose<K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17, K18, K19, K20>, K21>
  : IsNever<K20> extends false
  ? // prettier-ignore
    Compose2<Compose<K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17, K18, K19>, K20>
  : IsNever<K19> extends false
  ? // prettier-ignore
    Compose2<Compose<K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17, K18>, K19>
  : IsNever<K18> extends false
  ? // prettier-ignore
    Compose2<Compose<K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17>, K18>
  : IsNever<K17> extends false
  ? // prettier-ignore
    Compose2<Compose<K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16>, K17>
  : IsNever<K16> extends false
  ? // prettier-ignore
    Compose2<Compose<K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15>, K16>
  : IsNever<K15> extends false
  ? // prettier-ignore
    Compose2<Compose<K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14>, K15>
  : IsNever<K14> extends false
  ? // prettier-ignore
    Compose2<Compose<K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13>, K14>
  : IsNever<K13> extends false
  ? Compose2<Compose<K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12>, K13>
  : IsNever<K12> extends false
  ? Compose2<Compose<K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11>, K12>
  : IsNever<K11> extends false
  ? Compose2<Compose<K1, K2, K3, K4, K5, K6, K7, K8, K9, K10>, K11>
  : IsNever<K10> extends false
  ? Compose2<Compose<K1, K2, K3, K4, K5, K6, K7, K8, K9>, K10>
  : IsNever<K9> extends false
  ? Compose2<Compose<K1, K2, K3, K4, K5, K6, K7, K8>, K9>
  : IsNever<K8> extends false
  ? Compose2<Compose<K1, K2, K3, K4, K5, K6, K7>, K8>
  : IsNever<K7> extends false
  ? Compose2<Compose<K1, K2, K3, K4, K5, K6>, K7>
  : IsNever<K6> extends false
  ? Compose2<Compose<K1, K2, K3, K4, K5>, K6>
  : IsNever<K5> extends false
  ? Compose2<Compose<K1, K2, K3, K4>, K5>
  : IsNever<K4> extends false
  ? Compose2<Compose<K1, K2, K3>, K4>
  : IsNever<K3> extends false
  ? Compose2<Compose2<K1, K2>, K3>
  : IsNever<K2> extends false
  ? Compose2<K1, K2>
  : K1;
