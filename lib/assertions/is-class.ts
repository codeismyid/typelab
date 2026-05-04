import type { IfClass } from 'lib/conditions';
import type { _IsTrue } from './__internal';

/**
 * Checks if a given type `T` is a `Class` type.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is a `Class` type, `false` otherwise.
 * @example
 * class DummyClass {}
 * type Valid = IsClass<typeof DummyClass>; // true
 * type Invalid = IsClass<string>; // false
 */
export type IsClass<T> = _IsTrue<IfClass<T, true, false>>;
