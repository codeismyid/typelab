import { describe, it } from 'bun:test';
import type { Brand } from 'lib/utils/brand';
import { expectType } from 'types-testing';

describe('lib > aliases > brand', () => {
  describe('Brand', () => {
    it('should create branded type based on `T` and `BrandType`', () => {
      type UserId = Brand<string, 'UserId'>;
      type OrderId = Brand<string, 'OrderId'>;
      expectType<UserId>().toBe<string & { __brand: 'UserId' }>();
      expectType<OrderId>().toBe<string & { __brand: 'OrderId' }>();
      expectType<
        [UserId, OrderId] extends [OrderId, UserId] ? true : false
      >().toBe<false>();
    });
  });
});
