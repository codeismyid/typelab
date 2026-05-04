import { describe, it } from 'bun:test';
import type { IsEqual, IsNotEqual } from 'lib/assertions/is-equal';
import { expectType } from 'types-testing';

describe('lib > assertions > is-equal', () => {
  describe('IsEqual', () => {
    it('should return `true` type, if `T1` and `T2` is equal', () => {
      expectType<IsEqual<string, string>>().toBe<true>();
      expectType<IsEqual<any, any>>().toBe<true>();
    });

    it('should return `false` type, if `T1` and `T2` is not equal', () => {
      expectType<IsEqual<string, ''>>().toBe<false>();
      expectType<IsEqual<any, string>>().toBe<false>();
    });
  });

  describe('IsNotEqual', () => {
    it('should return `true` type, if `T1` and `T2` is not equal', () => {
      expectType<IsNotEqual<string, ''>>().toBe<true>();
      expectType<IsNotEqual<any, string>>().toBe<true>();
    });

    it('should return `false` type, if `T1` and `T2` is equal', () => {
      expectType<IsNotEqual<string, string>>().toBe<false>();
      expectType<IsNotEqual<any, any>>().toBe<false>();
    });
  });
});
