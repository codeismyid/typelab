/**
 * Resolves to `Then` if the type `T` is a `never` type, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is `never`.
 * @template Else The type to return if `T` is not `never`. Defaults to `never`.
 * @returns `Then` if `T` is `never` type, `Else` otherwise.
 * @example
 * type Yes = IfNever<never, 'yes', 'no'>; // 'yes'
 * type No = IfNever<string, 'yes', 'no'>; // 'no'
 */
export type IfNever<T, Then, Else = never> = [T] extends [never] ? Then : Else;
