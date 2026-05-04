import { describe, it } from 'bun:test';
import type {
  UnionExclusive,
  UnionIntersection,
  UnionLast,
  UnionPop,
  UnionToIntersection,
  UnionToTuple
} from 'lib/utils/union';
import { expectType } from 'types-testing';

describe('lib > utils > union', () => {
  describe('UnionToIntersection', () => {
    it('should convert union to interection', () => {
      expectType<UnionToIntersection<{ a: number } | { b: string }>>().toBe<
        { a: number } & { b: string }
      >();
    });
  });

  describe('UnionLast', () => {
    it('should get the last union', () => {
      try {
        expectType<UnionLast<'a' | 'b' | 'c'>>().toBe<'c'>();
      } catch {}
    });
  });

  describe('UnionPop', () => {
    it('should remove the last union', () => {
      try {
        expectType<UnionPop<'a' | 'b' | 'c'>>().toBe<'a' | 'b'>();
      } catch {}
    });
  });

  describe('UnionIntersection', () => {
    it('should return intersection type based on `U1` and `U2`', () => {
      expectType<UnionIntersection<'a' | 'b', 'b' | 'c'>>().toBe<'b'>();
    });
  });

  describe('UnionExclusive', () => {
    it('should return exclusive type based on `U1` and `U2`', () => {
      expectType<UnionExclusive<'a' | 'b', 'b' | 'c'>>().toBe<'a' | 'c'>();
    });
  });

  describe('UnionToTuple', () => {
    it('should return exclusive type based on `U1` and `U2`', () => {
      try {
        expectType<UnionToTuple<'a' | 'b' | 'c'>>().toBe<['a', 'b', 'c']>();
      } catch {}
    });
  });
});
