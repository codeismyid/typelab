import type { _IfNotAnyOrNeverOrUnknown } from './__internal';

/**
 * Resolves to `Then` if the type `T` is a nullish type, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is nullish.
 * @template Else The type to return if `T` is not nullish. Defaults to `never`.
 * @returns `Then` if `T` is nullish, `Else` otherwise.
 * @example
 * type Yes = IfNullish<string | null | undefined, 'yes', 'no'>; // 'yes'
 * type No = IfNullish<string, 'yes', 'no'>; // 'no'
 */
export type IfNullish<T, Then, Else = never> = _IfNotAnyOrNeverOrUnknown<
  T,
  undefined extends T ? Then : null extends T ? Then : Else,
  Else
>;
