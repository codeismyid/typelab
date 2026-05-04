import type { Any } from './any';
import type { ReadonlyArray } from './array';

/**
 * Type that represents a function that takes specified parameters types and returns a specified type.
 *
 * @template Params The parameters types of the function as an array, defaults to `any[]`.
 * @template Return The return type of the function, defaults to `any`.
 * @example
 * // MyFunction is (param_0: number, param_1: string) => string
 * type MyFunction = Function<[number, string], string>;
 */
export type Function<Params extends ReadonlyArray = Any[], Return = Any> = (
  ...param: Params
) => Return;

/**
 * Alias for {@link Function `Function`}.
 */
export type Fn<Params extends ReadonlyArray = Any[], Return = Any> = Function<
  Params,
  Return
>;

/**
 * Type that represents an async function that takes specified parameters types and returns a specified type.
 *
 * @template Params The parameters types of the function as an array, defaults to `any[]`.
 * @template Return The return type of the function, defaults to `any`.
 * @example
 * // MyAsyncFunction is (param_0: number, param_1: string) => Promise<string>
 * type MyAsyncFunction = AsyncFunction<[number, string], string>;
 */
export type AsyncFunction<
  Params extends ReadonlyArray = Any[],
  Return = Any
> = (...param: Params) => Promise<Return>;

/**
 * Alias for {@link AsyncFunction `AsyncFunction`}.
 */
export type AsyncFn<
  Params extends ReadonlyArray = Any[],
  Return = Any
> = AsyncFunction<Params, Return>;

/**
 * Type that represents a newable function that takes specified parameters types and returns a specified type.
 *
 * @template Params The parameters types of the function as an array, defaults to `any[]`.
 * @template Return The return type of the function, defaults to `any`.
 * @example
 * // MyNewableFunction is new (param_0: number, param_1: string) => string`
 * type MyNewableFunction = NewableFunction<[number, string], string>;
 */
export type NewableFunction<
  Params extends ReadonlyArray = Any[],
  Return = Any
> = new (...param: Params) => Return;

/**
 * Alias for {@link NewableFn `NewableFn`}.
 */
export type NewableFn<
  Params extends ReadonlyArray = Any[],
  Return = Any
> = NewableFunction<Params, Return>;
