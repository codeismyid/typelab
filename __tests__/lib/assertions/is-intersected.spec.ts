import { describe, it } from 'bun:test';
import type {
  IsIntersected,
  IsNotIntersected
} from 'lib/assertions/is-intersected';
import { expectType } from 'types-testing';

describe('lib > assertions > is-intersected', () => {
  describe('IsIntersected', () => {
    it('should return `true` if `T1` is intersected with `T2`', () => {
      expectType<IsIntersected<'a' | 'c', 'a' | 'b'>>().toBe<true>();
    });

    it('should return `false` if `T1` is not intersected with `T2`', () => {
      expectType<IsIntersected<'c', 'a' | 'b'>>().toBe<false>();
    });
  });

  describe('IsNotIntersected', () => {
    it('should return `true` if `T1` is not intersected with `T2`', () => {
      expectType<IsNotIntersected<'c', 'a' | 'b'>>().toBe<true>();
    });

    it('should return `false` if `T1` is intersected with `T2`', () => {
      expectType<IsNotIntersected<'a' | 'c', 'a' | 'b'>>().toBe<false>();
    });
  });
});
