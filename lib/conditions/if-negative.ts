/**
 * Resolves to `Then` if the type `T` is negative, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is negative.
 * @template Else The type to return if `T` is not negative. Defaults to `never`.
 * @returns `Then` if `T` is negative, `Else` otherwise.
 * @example
 * type Yes = IfNegative<-11 | -11n | '-11' | '-11n', 'yes', 'no'>; // 'yes'
 * type No = IfNegative<11, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfNegative<-11 | 11, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfNegative<
  T extends number | bigint | string,
  Then,
  Else = never
> = T extends number | bigint
  ? `${T}` extends `-${infer _}`
    ? Then
    : Else
  : T extends `-${infer Digits}`
    ? Digits extends `${infer _ extends number}`
      ? Then
      : Digits extends `${infer _ extends number}n`
        ? Then
        : Else
    : Else;
