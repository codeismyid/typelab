import { describe, it } from 'bun:test';
import type { IsPropertyKey } from 'lib/assertions/is-property-key';
import { expectType } from 'types-testing';

describe('lib > assertions > is-property-key', () => {
  describe('IsPropertyKey', () => {
    it('should return `true` type, if type argument is `PropertyKey` type', () => {
      expectType<IsPropertyKey<string>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not `PropertyKey` type', () => {
      expectType<IsPropertyKey<bigint>>().toBe<false>();
    });
  });
});
