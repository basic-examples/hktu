export interface Validator<T> {
  input: T;
  validationResult: boolean;
}
