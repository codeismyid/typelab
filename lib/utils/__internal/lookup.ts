/**
 * @internal
 */
export type _LookupType = 'deep' | 'shallow';

/**
 * @internal
 */
export type _Lookup<
  Z extends _LookupType,
  Return extends Record<_LookupType, unknown>
> = Return[Z];
