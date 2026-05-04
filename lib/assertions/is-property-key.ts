import type { IfPropertyKey } from 'lib/conditions';
import type { _IsTrue } from './__internal';

/**
 * Checks if a given type `T` is a {@link PropertyKey `PropertyKey`} type.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is a {@link PropertyKey `PropertyKey`} type, `false` otherwise.
 * @example
 * type Valid = IsPropertyKey<string>; // true
 * type Invalid = IsPropertyKey<bigint>; // false
 */
export type IsPropertyKey<T> = _IsTrue<IfPropertyKey<T, true, false>>;
