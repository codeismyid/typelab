import type { _IfNotAnyOrNever } from './__internal';

/**
 * Resolves to `Then` if the type `T` is `symbol`, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is `symbol`.
 * @template Else The type to return if `T` is not `symbol`. Defaults to `never`.
 * @returns `Then` if `T` is `symbol`, `Else` otherwise.
 * @example
 * type Yes = IfSymbol<symbol, 'yes', 'no'>; // 'yes'
 * type No = IfSymbol<string, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfSymbol<symbol | string, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfSymbol<T, Then, Else = never> = _IfNotAnyOrNever<
  T,
  T extends symbol ? Then : Else,
  Else
>;
