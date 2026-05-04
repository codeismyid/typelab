import type { _IfNotAnyOrNeverOrUnknown } from './__internal';

/**
 * Resolves to `Then` if the type `T` is a nullable type, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is nullable.
 * @template Else The type to return if `T` is not nullable. Defaults to `never`.
 * @returns `Then` if `T` is nullable, `Else` otherwise.
 * @example
 * type Yes = IfNullable<string | null, 'yes', 'no'>; // 'yes'
 * type No = IfNullable<string, 'yes', 'no'>; // 'no'
 */
export type IfNullable<T, Then, Else = never> = _IfNotAnyOrNeverOrUnknown<
  T,
  null extends T ? Then : Else,
  Else
>;
