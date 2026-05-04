import type {
  IfAsyncFunction,
  IfFunction,
  IfNewableFunction
} from 'lib/conditions';
import type { _IsTrue } from './__internal';

/**
 * Checks if a given type `T` is a function type.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is a function type, `false` otherwise.
 * @example
 * type Valid = IsFunction<() => string>; // true
 * type Invalid = IsFunction<string>; // false
 */
export type IsFunction<T> = _IsTrue<IfFunction<T, true, false>>;

/**
 * Alias for {@link IsFunction `IsFunction`}.
 */
export type IsFn<T> = IsFunction<T>;

/**
 * Checks if a given type `T` is an async function type.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is an async function type, `false` otherwise.
 * @example
 * type Valid = IsAsyncFunction<() => Promise<string>>; // true
 * type Invalid = IsAsyncFunction<() => string>; // false
 */
export type IsAsyncFunction<T> = _IsTrue<IfAsyncFunction<T, true, false>>;

/**
 * Alias for {@link IsAsyncFunction `IsAsyncFunction`}.
 */
export type IsAsyncFn<T> = IsAsyncFunction<T>;

/**
 * Checks if a given type `T` is a newable function type.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is a newable function type, `false` otherwise.
 * @example
 * type Valid = IsNewableFunction<new () => string>; // true
 * type Invalid = IsNewableFunction<() => string>; // false
 */
export type IsNewableFunction<T> = _IsTrue<IfNewableFunction<T, true, false>>;

/**
 * Alias for {@link IsNewableFunction `IsNewableFunction`}.
 */
export type IsNewableFn<T> = IsNewableFunction<T>;
