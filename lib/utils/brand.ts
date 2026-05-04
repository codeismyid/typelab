/**
 * Create a branded version of a base type.
 *
 * @template T - The original type.
 * @template BrandType - An identifier to distinguish the branded type.
 * @example
 * type UserId = Brand<string, 'UserId'>; // string & { __brand: "UserId" }
 * type OrderId = Brand<string, 'OrderId'>; // string & { __brand: "OrderId" }
 * type IsEqual = [UserId, OrderId] extends [OrderId, UserId] ? true : false; // false
 */
export type Brand<T, BrandType> = T & {
  /** Custom brand here */
  __brand: BrandType;
};
