import { describe, it } from 'bun:test';
import type { IsRequiredProperty } from 'lib/assertions/is-required';
import { expectType } from 'types-testing';

describe('lib > assertions > is-required', () => {
  describe('IsRequiredProperty', () => {
    it('should return `true` type, if property from object is required', () => {
      expectType<IsRequiredProperty<{ a: string }, 'a'>>().toBe<true>();
    });

    it('should return `false` type, if property from object is not required', () => {
      expectType<IsRequiredProperty<{ a?: string }, 'a'>>().toBe<false>();
    });

    it('should return `never` type, if property key does not exist', () => {
      expectType<IsRequiredProperty<{ a: string }, 'b'>>().toBe<never>();
      expectType<IsRequiredProperty<{}, 'b'>>().toBe<never>();
      expectType<IsRequiredProperty<undefined, 'b'>>().toBe<never>();
    });
  });
});
