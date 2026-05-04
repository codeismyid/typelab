/**
 * Resolves to `Then` if `T1` is intersected with `T2`, otherwise resolves to `Else`.
 *
 * @template T1 The first type to compare.
 * @template T2 The second type to compare.
 * @template Then The type to return if `T1` is intersected with type `T2`.
 * @template Else The type to return if `T1` is not intersected with type `T2`. Defaults to `never`.
 * @returns `Then` if `T1` & `T2` is not `never`, `Else` otherwise.
 * @example
 * type Yes = IfIntersected<'a' | 'c', 'a' | 'b', 'yes', 'no'>; // 'yes'
 * type No = IfIntersected<'c', 'a' | 'b', 'yes', 'no'>; // 'no'
 */
export type IfIntersected<T1, T2, Then, Else = never> = T1 & T2 extends never
  ? Else
  : Then;

/**
 * Resolves to `Then` if `T1` is not intersected with `T2`, otherwise resolves to `Else`.
 *
 * @template T1 The first type to compare.
 * @template T2 The second type to compare.
 * @template Then The type to return if `T1` is not intersected with type `T2`.
 * @template Else The type to return if `T1` is intersected with type `T2`. Defaults to `never`.
 * @returns `Then` if `T1` & `T2` is `never`, `Else` otherwise.
 * @example
 * type Yes = IfNotIntersected<'c', 'a' | 'b', 'yes', 'no'>; // 'yes'
 * type No = IfNotIntersected<'a' | 'c', 'a' | 'b', 'yes', 'no'>; // 'no'
 */
export type IfNotIntersected<T1, T2, Then, Else = never> = T1 & T2 extends never
  ? Then
  : Else;
