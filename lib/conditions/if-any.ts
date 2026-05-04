/**
 * Resolves to `Then` if the type `T` is an `any` type, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is `any`.
 * @template Else The type to return if `T` is not `any`. Defaults to `never`.
 * @returns `Then` if `T` is an `any` type, `Else` otherwise.
 * @example
 * type Yes = IfAny<any, 'yes', 'no'>; // 'yes'
 * type No = IfAny<string, 'yes', 'no'>; // 'no'
 */
export type IfAny<T, Then, Else = never> = false extends T & true ? Then : Else;
