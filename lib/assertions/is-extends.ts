import type {
  IfExtends,
  IfExtendsEitherWay,
  IfExtendsMutually,
  IfNotExtends,
  IfNotExtendsEitherWay,
  IfNotExtendsMutually
} from 'lib/conditions';
import type { _IsTrue } from './__internal';

/**
 * Type that checks if type `T1` extends type `T2`.
 *
 * @template T1 The first type to compare.
 * @template T2 The second type to compare.
 * @returns `true` if `T1` is assignable to `T2` (i.e., `T1 extends T2`), `false` otherwise.
 * @example
 * type Extends = IsExtends<'', string>; // true
 * type NotExtends = IsExtends<string, ''>; // false
 */
export type IsExtends<T1, T2> = _IsTrue<IfExtends<T1, T2, true, false>>;

/**
 * Type that checks if type `T1` **not** extends type `T2`.
 *
 * {@link IsExtends `IsExtends`} in reverse.
 *
 * @template T1 The first type to compare.
 * @template T2 The second type to compare.
 * @returns `true` if `T1` is **not** assignable to `T2`, `false` otherwise.
 * @example
 * type NotExtends = IsNotExtends<string, ''>; // true
 * type Extends = IsNotExtends<'', string>; // false
 */
export type IsNotExtends<T1, T2> = _IsTrue<IfNotExtends<T1, T2, true, false>>;

/**
 * Alias for {@link IsExtends `IsExtends`}.
 */
export type IsAssignable<T1, T2> = IsExtends<T1, T2>;

/**
 * Alias for {@link IsNotExtends `IsNotExtends`}.
 */
export type IsNotAssignable<T1, T2> = IsNotExtends<T1, T2>;

/**
 * Type that checks if type `T1` extends type `T2` and type `T2` extends type `T1`.
 *
 * @template T1 The first type to compare.
 * @template T2 The second type to compare.
 * @returns `true` if both conditions are true, `false` otherwise.
 * @example
 * type Mutual = IsExtendsMutually<string, any>; // true
 * type NotMutual = IsExtendsMutually<string, ''>; // false
 */
export type IsExtendsMutually<T1, T2> = _IsTrue<
  IfExtendsMutually<T1, T2, true, false>
>;

/**
 * Type that checks if type `T1` **not** extends type `T2` or type `T2` **not** extends type `T1`.
 *
 * @template T1 The first type to compare.
 * @template T2 The second type to compare.
 * @returns `true` if either conditions are true, `false` otherwise.
 * @example
 * type NotMutual = IsNotExtendsMutually<string, ''>; // true
 * type Mutual = IsNotExtendsMutually<string, string>; // false
 */
export type IsNotExtendsMutually<T1, T2> = _IsTrue<
  IfNotExtendsMutually<T1, T2, true, false>
>;

/**
 * Alias for {@link IsExtendsMutually `IsExtendsMutually`}.
 */
export type IsAssignableMutually<T1, T2> = IsExtendsMutually<T1, T2>;

/**
 * Alias for {@link IsNotExtendsMutually `IsNotExtendsMutually`}.
 */
export type IsNotAssignableMutually<T1, T2> = IsNotExtendsMutually<T1, T2>;

/**
 * Type that checks if type `T1` extends type `T2` or type `T2` extends type `T1`.
 *
 * @template T1 The first type to compare.
 * @template T2 The second type to compare.
 * @returns `true` if either conditions are true, `false` otherwise.
 * @example
 * type Relate = IsExtendsEitherWay<string, ''>; // true
 * type NotRelate = IsExtendsEitherWay<string, number>; // false
 */
export type IsExtendsEitherWay<T1, T2> = _IsTrue<
  IfExtendsEitherWay<T1, T2, true, false>
>;

/**
 * Type that checks if type `T1` **not** extends type `T2` and type `T2` **not** extends type `T1`.
 *
 * @template T1 The first type to compare.
 * @template T2 The second type to compare.
 * @returns `true` if both conditions are true, `false` otherwise.
 * @example
 * type NotRelate = IsNotExtendsEitherWay<string, number>; // false
 * type Relate = IsNotExtendsEitherWay<string, ''>; // true
 */
export type IsNotExtendsEitherWay<T1, T2> = _IsTrue<
  IfNotExtendsEitherWay<T1, T2, true, false>
>;

/**
 * Alias for {@link IsExtendsEitherWay `IsExtendsEitherWay`}.
 */
export type IsAssignableEitherWay<T1, T2> = IsExtendsEitherWay<T1, T2>;

/**
 * Alias for {@link IsNotExtendsEitherWay `IsNotExtendsEitherWay`}.
 */
export type IsNotAssignableEitherWay<T1, T2> = IsNotExtendsEitherWay<T1, T2>;
