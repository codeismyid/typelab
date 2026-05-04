import type { _IfNotAnyOrNeverOrUnknown } from './__internal';

/**
 * Resolves to `Then` if the type `T` is an undefinable type, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is undefinable.
 * @template Else The type to return if `T` is not undefinable. Defaults to `never`.
 * @returns `Then` if `T` is undefinable, `Else` otherwise.
 * @example
 * type Yes = IfUndefinable<string | undefined, 'yes', 'no'>; // 'yes'
 * type No = IfUndefinable<string, 'yes', 'no'>; // 'no'
 */
export type IfUndefinable<T, Then, Else = never> = _IfNotAnyOrNeverOrUnknown<
  T,
  undefined extends T ? Then : Else
>;
