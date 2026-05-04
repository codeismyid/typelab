import type {
  IfArray,
  IfArrayReadonly,
  IfArrayWritable,
  IfTuple,
  IfTupleReadonly,
  IfTupleWritable
} from 'lib/conditions';
import type { _IsTrue } from './__internal';

/**
 * Checks if a given type `T` is an `Array` type.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is an `Array` type, `false` otherwise.
 * @example
 * type Valid = IsArray<string[]>; // true
 * type Invalid = IsArray<string>; // false
 */
export type IsArray<T> = _IsTrue<IfArray<T, true, false>>;

/**
 * Checks if a given type `T` is not readonly `Array` type.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is not readonly `Array` type, `false` otherwise.
 * @example
 * type Valid = IsArrayWritable<string[]>; // true
 * type Invalid = IsArrayWritable<readonly string[]>; // false
 */
export type IsArrayWritable<T> = _IsTrue<IfArrayWritable<T, true, false>>;

/**
 * Checks if a given type `T` is readonly `Array` type.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is readonly `Array` type, `false` otherwise.
 * @example
 * type Valid = IsArrayReadonly<readonly string[]>; // true
 * type Invalid = IsArrayReadonly<string[]>; // false
 */
export type IsArrayReadonly<T> = _IsTrue<IfArrayReadonly<T, true, false>>;

/**
 * Checks if a given type `T` is a `Tuple` type.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is a `Tuple` type, `false` otherwise.
 * @example
 * type Valid = IsTuple<[string]>; // true
 * type Invalid = IsTuple<string[]>; // false
 */
export type IsTuple<T> = _IsTrue<IfTuple<T, true, false>>;

/**
 * Checks if a given type `T` is not readonly `Tuple` type.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is not readonly `Tuple` type, `false` otherwise.
 * @example
 * type Valid = IsTupleWritable<[string]>; // true
 * type Invalid1 = IsTupleWritable<readonly [string]>; // false
 * type Invalid2 = IsTupleWritable<string[]>; // false
 */
export type IsTupleWritable<T> = _IsTrue<IfTupleWritable<T, true, false>>;

/**
 * Checks if a given type `T` is readonly `Tuple` type.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is readonly `Tuple` type, `false` otherwise.
 * @example
 * type Valid = IsTupleReadonly<readonly [string]>; // true
 * type Invalid1 = IsTupleReadonly<[string]>; // false
 * type Invalid2 = IsTupleReadonly<readonly string[]>; // false
 */
export type IsTupleReadonly<T> = _IsTrue<IfTupleReadonly<T, true, false>>;
