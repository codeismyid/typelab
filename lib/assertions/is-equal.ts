import type { IfEqual, IfNotEqual } from 'lib/conditions';

/**
 * Check the type equality between `T1` and `T2`.
 *
 * @template T1 The first type to compare.
 * @template T2 The second type to compare.
 * @returns `true` if types `T1` is equal to `T2`, `false` otherwise.
 * @example
 * type Equal = IsEqual<string, string>; // true
 * type NotEqual = IsEqual<string, ''>; // false
 */
export type IsEqual<T1, T2> = IfEqual<T1, T2, true, false>;

/**
 * Check the type inequality between `T1` and `T2`.
 *
 * {@link IsEqual `IsEqual`} in reverse.
 *
 * @template T1 The first type to compare.
 * @template T2 The second type to compare.
 * @returns `true` if types `T1` is not equal to `T2`, `false` otherwise.
 * @example
 * type NotEqual = IsNotEqual<string, ''>; // true
 * type Equal = IsNotEqual<string, string>; // false
 */
export type IsNotEqual<T1, T2> = IfNotEqual<T1, T2, true, false>;
