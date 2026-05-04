import type { IfNegative } from 'lib/conditions';
import type { _IsTrue } from './__internal';

/**
 * Checks if a given number `T` is negative.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is a negative number, `false` otherwise.
 * @example
 * type Valid = IsNegative<-11 | -11n>; // true
 * type Invalid = IsNegative<11 | 11n>; // false
 */
export type IsNegative<T extends number | bigint | string> = _IsTrue<
  IfNegative<T, true, false>
>;
