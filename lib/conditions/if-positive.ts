/**
 * Resolves to `Then` if the type `T` is positive, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is positive.
 * @template Else The type to return if `T` is not positive. Defaults to `never`.
 * @returns `Then` if `T` is positive, `Else` otherwise.
 * @example
 * type Yes = IfPositive<11 | 11n | '11' | '11n', 'yes', 'no'>; // 'yes'
 * type No = IfPositive<-11, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfPositive<-11 | 11, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfPositive<
  T extends number | bigint | string,
  Then,
  Else = never
> = T extends number | bigint
  ? `${T}` extends `-${infer _}`
    ? Else
    : Then
  : `${T}` extends `-${infer Digits}`
    ? Digits extends `${infer _ extends number}`
      ? Else
      : Digits extends `${infer _ extends number}n`
        ? Else
        : Then
    : Then;
