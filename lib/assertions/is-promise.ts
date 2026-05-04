import type { IfPromise } from 'lib/conditions';
import type { _IsTrue } from './__internal';

/**
 * Checks if a given type `T` is a `Promise` type.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is a `Promise` type, `false` otherwise.
 * @example
 * type Valid = IsPromise<Promise<string>>; // true
 * type Invalid = IsPromise<string>; // false
 */
export type IsPromise<T> = _IsTrue<IfPromise<T, true, false>>;

/**
 * Alias for {@link IsPromise `IsPromise`}.
 */
export type IsAsync<T> = IsPromise<T>;
