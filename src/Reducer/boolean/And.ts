import { Reducer } from '..';

export interface And extends Reducer<boolean, boolean> {
  validationResult: AndRaw<this['accumulator'], this['current']>;
}

export type AndRaw<A extends boolean, B extends boolean> = A extends true
  ? B extends true
    ? true
    : false
  : false;
