import type { IfPositive } from 'lib/conditions';
import type { _IsTrue } from './__internal';

/**
 * Checks if a given number `T` is positive.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is a positive number, `false` otherwise.
 * @example
 * type Valid = IsPositive<11 | 11n>; // true
 * type Invalid = IsPositive<-11 | -11n>; // false
 */
export type IsPositive<T extends number | bigint | string> = _IsTrue<
  IfPositive<T, true, false>
>;
