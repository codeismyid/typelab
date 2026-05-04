/**
 * Resolves to `Then` if `T1` is assignable to `T2`, otherwise resolves to `Else`.
 *
 * @template T1 The first type to compare.
 * @template T2 The second type to compare.
 * @template Then The type to return if `T1` is assignable to `T2`.
 * @template Else The type to return if `T1` is not assignable to `T2`. Defaults to `never`.
 * @returns `Then` if `T1` is assignable to `T2`, `Else` otherwise.
 * @example
 * type Yes = IfExtends<'', string, 'yes', 'no'>; // 'yes'
 * type No = IfExtends<string, '', 'yes', 'no'>; // 'no'
 * type YesOrNo = IfExtends<string | number, string, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfExtends<T1, T2, Then, Else = never> = T1 extends T2 ? Then : Else;

/**
 * Resolves to `Then` if `T1` is not assignable to `T2`, otherwise resolves to `Else`.
 *
 * @template T1 The first type to compare.
 * @template T2 The second type to compare.
 * @template Then The type to return if `T1` is not assignable to `T2`.
 * @template Else The type to return if `T1` is assignable to `T2`. Defaults to `never`.
 * @returns `Then` if `T1` is not assignable to `T2`, `Else` otherwise.
 * @example
 * type Yes = IfNotExtends<string, '', 'yes', 'no'>; // 'yes'
 * type No = IfNotExtends<'', string, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfNotExtends<string | number, string, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfNotExtends<T1, T2, Then, Else = never> = T1 extends T2
  ? Else
  : Then;

/**
 * Alias for {@link IfExtends `IfExtends`}.
 */
export type IfAssignable<T1, T2, Then, Else = never> = IfExtends<
  T1,
  T2,
  Then,
  Else
>;

/**
 * Alias for {@link IfNotExtends `IfNotExtends`}.
 */
export type IfNotAssignable<T1, T2, Then, Else = never> = IfNotExtends<
  T1,
  T2,
  Then,
  Else
>;

/**
 * Resolves to `Then` if `T1` is assignable to `T2` and `T2` is assignable to `T1`, otherwise resolves to `Else`.
 *
 * @template T1 The first type to compare.
 * @template T2 The second type to compare.
 * @template Then The type to return if `T1` and `T2` are assignable to each other.
 * @template Else The type to return if `T1` and `T2` are not assignable to each other. Defaults to `never`.
 * @returns `Then` if `T1` and `T2` are assignable to each other, `Else` otherwise.
 * @example
 * type Yes = IfExtendsMutually<string, string, 'yes', 'no'>; // 'yes'
 * type No = IfExtendsMutually<'', string, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfExtendsMutually<string | number, string, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfExtendsMutually<T1, T2, Then, Else = never> = T1 extends T2
  ? T2 extends T1
    ? Then
    : Else
  : Else;

/**
 * Resolves to `Then` if `T1` is not assignable to `T2` or `T2` is not assignable to `T1`, otherwise resolves to `Else`.
 *
 * @template T1 The first type to compare.
 * @template T2 The second type to compare.
 * @template Then The type to return if `T1` and `T2` are not assignable to each other.
 * @template Else The type to return if `T1` and `T2` are assignable to each other. Defaults to `never`.
 * @returns `Then` if `T1` and `T2` are not assignable to each other, `Else` otherwise.
 * @example
 * type Yes = IfNotExtendsMutually<'', string, 'yes', 'no'>; // 'yes'
 * type No = IfNotExtendsMutually<string, string, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfNotExtendsMutually<string | number, string, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfNotExtendsMutually<T1, T2, Then, Else = never> = T1 extends T2
  ? T2 extends T1
    ? Else
    : Then
  : Then;

/**
 * Alias for {@link IfExtendsMutually `IfExtendsMutually`}.
 */
export type IfAssignableMutually<
  T1,
  T2,
  Then,
  Else = never
> = IfExtendsMutually<T1, T2, Then, Else>;

/**
 * Alias for {@link IfNotExtendsMutually `IfNotExtendsMutually`}.
 */
export type IfNotAssignableMutually<
  T1,
  T2,
  Then,
  Else = never
> = IfNotExtendsMutually<T1, T2, Then, Else>;

/**
 * Resolves to `Then` if `T1` is assignable to `T2` or `T2` is assignable to `T1`, otherwise resolves to `Else`.
 *
 * @template T1 The first type to compare.
 * @template T2 The second type to compare.
 * @template Then The type to return if `T1` and `T2` are assignable either way.
 * @template Else The type to return if `T1` and `T2` are not assignable either way. Defaults to `never`.
 * @returns `Then` if `T1` and `T2` are assignable either way, `Else` otherwise.
 * @example
 * type Yes = IfExtendsEitherWay<string, '', 'yes', 'no'>; // 'yes'
 * type No = IfExtendsEitherWay<number, string, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfExtendsEitherWay<string | number, string, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfExtendsEitherWay<T1, T2, Then, Else = never> = T1 extends T2
  ? Then
  : T2 extends T1
    ? Then
    : Else;

/**
 * Resolves to `Then` if `T1` is not assignable to `T2` and `T2` is not assignable to `T1`, otherwise resolves to `Else`.
 *
 * @template T1 The first type to compare.
 * @template T2 The second type to compare.
 * @template Then The type to return if `T1` and `T2` are not assignable either way.
 * @template Else The type to return if `T1` and `T2` are assignable either way. Defaults to `never`.
 * @returns `Then` if `T1` and `T2` are not assignable either way, `Else` otherwise.
 * @example
 * type Yes = IfNotExtendsEitherWay<number, string, 'yes', 'no'>; // 'yes'
 * type No = IfNotExtendsEitherWay<string, '', 'yes', 'no'>; // 'no'
 * type YesOrNo = IfNotExtendsEitherWay<string | number, string, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfNotExtendsEitherWay<T1, T2, Then, Else = never> = T1 extends T2
  ? T2 extends T1
    ? Else
    : Then
  : T2 extends T1
    ? Else
    : Then;

/**
 * Alias for {@link IfExtendsEitherWay `IfExtendsEitherWay`}.
 */
export type IfAssignableEitherWay<
  T1,
  T2,
  Then,
  Else = never
> = IfExtendsEitherWay<T1, T2, Then, Else>;

/**
 * Alias for {@link IfNotExtendsEitherWay `IfNotExtendsEitherWay`}.
 */
export type IfNotAssignableEitherWay<
  T1,
  T2,
  Then,
  Else = never
> = IfNotExtendsEitherWay<T1, T2, Then, Else>;
