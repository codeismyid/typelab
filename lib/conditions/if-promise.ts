import type { _IfNotAnyOrNever } from './__internal';

/**
 * Resolves to `Then` if the type `T` is `Promise`, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is `Promise`.
 * @template Else The type to return if `T` is not `Promise`. Defaults to `never`.
 * @returns `Then` if `T` is `Promise`, `Else` otherwise.
 * @example
 * type Yes = IfPromise<Promise<string>, 'yes', 'no'>; // 'yes'
 * type No = IfPromise<string, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfPromise<Promise<string> | string, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfPromise<T, Then, Else = never> = _IfNotAnyOrNever<
  T,
  T extends Promise<any> ? Then : Else,
  Else
>;

/**
 * Alias for {@link IfPromise `IfPromise`}.
 */
export type IfAsync<T, Then, Else = never> = IfPromise<T, Then, Else>;
