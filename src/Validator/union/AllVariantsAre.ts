import { Validator } from '..';
import { Validate } from '../Validate';

export interface AllVariantsAre<T, K extends Validator<T>>
  extends Validator<T> {
  validationResult: AllVariantsAreRaw<T, K, this['input']>;
}

export type AllVariantsAreRaw<T, K extends Validator<T>, I extends T> = (
  I extends T ? Validate<T, K, I> : never
) extends true
  ? true
  : false;
