import { describe, it } from 'bun:test';
import type { IsBigInt, IsBigIntLiteral } from 'lib/assertions/is-bigint';
import { expectType } from 'types-testing';

describe('lib > assertions > is-bigint', () => {
  describe('IsBigInt', () => {
    it('should return `true` type, if type argument is `bigint` type', () => {
      expectType<IsBigInt<bigint>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not `bigint` type', () => {
      expectType<IsBigInt<number>>().toBe<false>();
    });
  });

  describe('IsBigIntLiteral', () => {
    it('should return `true` type, if type argument is big int literal type', () => {
      expectType<IsBigIntLiteral<1n>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not big int literal type', () => {
      expectType<IsBigIntLiteral<bigint>>().toBe<false>();
    });
  });
});
