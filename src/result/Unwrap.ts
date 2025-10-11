import { ResultOk } from '../types';

export type Unwrap<T extends ResultOk<unknown, unknown, unknown>> = T['value'];
