import type { IfSymbol } from 'lib/conditions';
import type { _IsTrue } from './__internal';

/**
 * Checks if a given type `T` is a `symbol`.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is a `symbol`, `false` otherwise.
 * @example
 * type Valid = IsSymbol<symbol>; // true
 * type Invalid = IsSymbol<string>; // false
 */
export type IsSymbol<T> = _IsTrue<IfSymbol<T, true, false>>;
