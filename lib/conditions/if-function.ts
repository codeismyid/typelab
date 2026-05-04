import type { AsyncFn, Fn, NewableFn } from 'lib/aliases';
import type { _IfNotAnyOrNever } from './__internal';

/**
 * Resolves to `Then` if the type `T` is a function, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is function.
 * @template Else The type to return if `T` is not function. Defaults to `never`.
 * @returns `Then` if `T` is function, `Else` otherwise.
 * @example
 * type Yes = IfFunction<() => void, 'yes', 'no'>; // 'yes'
 * type No = IfFunction<string, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfFunction<(() => void) | string, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfFunction<T, Then, Else = never> = _IfNotAnyOrNever<
  T,
  T extends Fn ? Then : Else,
  Else
>;

/**
 * Alias for {@link IfFunction `IfFunction`}.
 */
export type IfFn<T, Then, Else = never> = IfFunction<T, Then, Else>;

/**
 * Resolves to `Then` if the type `T` is an async function, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is async function.
 * @template Else The type to return if `T` is not async function. Defaults to `never`.
 * @returns `Then` if `T` is async function, `Else` otherwise.
 * @example
 * type Yes = IfAsyncFunction<() => Promise<void>, 'yes', 'no'>; // 'yes'
 * type No = IfAsyncFunction<() => void, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfAsyncFunction<(() => Promise<void>) | (() => void), 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfAsyncFunction<T, Then, Else = never> = _IfNotAnyOrNever<
  T,
  T extends AsyncFn ? Then : Else,
  Else
>;

/**
 * Alias for {@link IfAsyncFunction `IfAsyncFunction`}.
 */
export type IfAsyncFn<T, Then, Else = never> = IfAsyncFunction<T, Then, Else>;

/**
 * Resolves to `Then` if the type `T` is a newable function, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is newable function.
 * @template Else The type to return if `T` is not newable function. Defaults to `never`.
 * @returns `Then` if `T` is newable function, `Else` otherwise.
 * @example
 * type Yes = IfNewableFunction<new () => void, 'yes', 'no'>; // 'yes'
 * type No = IfNewableFunction<() => void, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfNewableFunction<(new () => void) | (() => void), 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfNewableFunction<T, Then, Else> = _IfNotAnyOrNever<
  T,
  T extends NewableFn ? Then : Else,
  Else
>;

/**
 * Alias for {@link IfNewableFunction `IfNewableFunction`}.
 */
export type IfNewableFn<T, Then, Else> = IfNewableFunction<T, Then, Else>;
