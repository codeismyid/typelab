import type { _IfNotAny } from './__internal';

/**
 * Resolves to `Then` if the type `T` is an `unknown` type, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is `unknown`.
 * @template Else The type to return if `T` is not `unknown`. Defaults to `never`.
 * @returns `Then` if `T` is an `unknown` type, `Else` otherwise.
 * @example
 * type Yes = IfUnknown<unknown, 'yes', 'no'>; // 'yes'
 * type No = IfUnknown<string, 'yes', 'no'>; // 'no'
 */
export type IfUnknown<T, Then, Else = never> = _IfNotAny<
  T,
  unknown extends T ? Then : Else,
  Else
>;
