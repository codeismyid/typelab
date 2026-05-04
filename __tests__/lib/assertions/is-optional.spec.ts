import { describe, it } from 'bun:test';
import type { IsOptionalProperty } from 'lib/assertions/is-optional';
import { expectType } from 'types-testing';

describe('lib > assertions > is-optional', () => {
  describe('IsOptionalProperty', () => {
    it('should return `true` type, if property from object is optional', () => {
      expectType<IsOptionalProperty<{ a?: string }, 'a'>>().toBe<true>();
    });

    it('should return `false` type, if property from object is not optional', () => {
      expectType<IsOptionalProperty<{ a: string }, 'a'>>().toBe<false>();
    });

    it('should return `never` type, if property key does not exist', () => {
      expectType<IsOptionalProperty<{ a: string }, 'b'>>().toBe<never>();
      expectType<IsOptionalProperty<{}, 'b'>>().toBe<never>();
      expectType<IsOptionalProperty<undefined, 'b'>>().toBe<never>();
    });
  });
});
