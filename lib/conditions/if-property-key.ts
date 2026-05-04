import type { _IfNotAnyOrNever } from './__internal';

/**
 * Resolves to `Then` if the type `T` is {@link PropertyKey `PropertyKey`}, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is `PropertyKey`.
 * @template Else The type to return if `T` is not `PropertyKey`. Defaults to `never`.
 * @returns `Then` if `T` is {@link PropertyKey `PropertyKey`}, `Else` otherwise.
 * @example
 * type Yes = IfPropertyKey<string, 'yes', 'no'>; // 'yes'
 * type No = IfPropertyKey<boolean, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfPropertyKey<string | boolean, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfPropertyKey<T, Then, Else> = _IfNotAnyOrNever<
  T,
  T extends PropertyKey ? Then : Else,
  Else
>;
