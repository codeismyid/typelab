import type { IsAny } from '.';

/**
 * Checks if a given type `T` is an `unknown` type.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is an `unknown` type, `false` otherwise.
 * @example
 * type Valid = IsUnknown<unknown>; // true
 * type Invalid = IsUnknown<string>; // false
 */
export type IsUnknown<T> =
  IsAny<T> extends true ? false : [unknown] extends [T] ? true : false;
