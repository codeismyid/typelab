/**
 * Resolves to `Then` if the type `T[Key]` is optional, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Key The key of `T`.
 * @template Then The type to return if `T[Key]` is optional.
 * @template Else The type to return if `T[Key]` is not optional. Defaults to `never`.
 * @returns `Then` if `T[Key]` is optional, `Else` otherwise.
 * @example
 * // 'yes'
 * type Yes = IfOptionalProperty<{ a?: string; }, 'a', 'yes', 'no'>;
 *
 * // 'no'
 * type No = IfOptionalProperty<{ a: string; }, 'a', 'yes', 'no'>;
 *
 * // 'yes' | 'no'
 * type YesOrNo = IfOptionalProperty<{ a?: string; } | { a: string; }, 'a', 'yes', 'no'>;
 *
 * // never
 * type Never = IfOptionalProperty<{ a?: string }, 'b', 'yes', 'no'>;
 */
export type IfOptionalProperty<T, Key, Then, Else = never> = T extends T
  ? Key extends keyof T
    ? Pick<T, Key> extends infer U1
      ? Partial<U1> extends infer U2
        ? [U1, U2] extends [U2, U1]
          ? Then
          : Else
        : never
      : never
    : never
  : never;
