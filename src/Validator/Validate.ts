import { Validator } from '.';
import { HKT } from '../HKT';

export type Validate<
  InputType,
  Kind extends Validator<InputType>,
  InputValue extends InputType,
> = HKT<
  'validationResult',
  boolean,
  Validator<InputType>,
  Kind,
  { input: InputValue }
>;
