import type { IfIntersected, IfNotIntersected } from 'lib/conditions';

/**
 * Checks if type `T1` is intersected with type `T2`.
 *
 * @template T1 The first type to compare.
 * @template T2 The second type to compare.
 * @returns `true` if `T1` & `T2` is not `never`, `false` otherwise.
 * @example
 * type Intersected = IsIntersected<'a' | 'c', 'a' | 'b'>; // true
 * type NotIntersected = IsIntersected<'c', 'a' | 'b'>; // false
 */
export type IsIntersected<T1, T2> = IfIntersected<T1, T2, true, false>;

/**
 * Checks if type `T1` is not intersected with type `T2`.
 *
 * @template T1 The first type to compare.
 * @template T2 The second type to compare.
 * @returns `true` if `T1` & `T2` is `never`, `false` otherwise.
 * @example
 * type Intersected = IsIntersected<'a' | 'c', 'a' | 'b'>; // true
 * type NotIntersected = IsIntersected<'c', 'a' | 'b'>; // false
 */
export type IsNotIntersected<T1, T2> = IfNotIntersected<T1, T2, true, false>;
