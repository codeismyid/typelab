import type { _IfNotAnyOrNever, _IfUnion } from './__internal';

/**
 * Resolves to `Then` if the type `T` is union, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is union.
 * @template Else The type to return if `T` is not union. Defaults to `never`.
 * @returns `Then` if `T` is union, `Else` otherwise.
 * @example
 * type Yes = IfUnion<string | number, 'yes', 'no'>; // 'yes'
 * type No = IfUnion<string, 'yes', 'no'>; // 'no'
 */
export type IfUnion<T, Then, Else = never> = _IfNotAnyOrNever<
  T,
  _IfUnion<T, Then, Else>,
  Else
>;
