import { describe, it } from 'bun:test';
import type {
  IfIntersected,
  IfNotIntersected
} from 'lib/conditions/if-intersected';
import { expectType } from 'types-testing';
import type { Else, Then } from './_';

describe('lib > conditions > if-intersected', () => {
  describe('IfIntersected', () => {
    it('should return `Then` if `T1` is intersected with `T2`', () => {
      expectType<
        IfIntersected<'a' | 'c', 'a' | 'b', Then, Else>
      >().toBe<Then>();
    });

    it('should return `Else` if `T1` is not intersected with `T2`', () => {
      expectType<IfIntersected<'c', 'a' | 'b', Then, Else>>().toBe<Else>();
    });
  });

  describe('IfNotIntersected', () => {
    it('should return `Then` if `T1` is not intersected with `T2`', () => {
      expectType<IfNotIntersected<'c', 'a' | 'b', Then, Else>>().toBe<Then>();
    });

    it('should return `Else` if `T1` is intersected with `T2`', () => {
      expectType<
        IfNotIntersected<'a' | 'c', 'a' | 'b', Then, Else>
      >().toBe<Else>();
    });
  });
});
